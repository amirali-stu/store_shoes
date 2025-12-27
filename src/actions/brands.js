"use server";

import { writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";
import connectToDb from "../../database/db";
import slugify from "slugify";
import { brandModel } from "../../schema/product/brand";
import { categoryModel } from "../../schema/product/category";
import { colorModel } from "../../schema/product/color";
import { sizeModel } from "../../schema/product/size";
import { productModel } from "../../schema/product/product";
import { productColorModel } from "../../schema/product/product_color";
import { productVariantModel } from "../../schema/product/product_variant";

async function createNewBrand(formData) {
  try {
    const name = formData.get("name");
    const logo = formData.get("logo");

    if (!name) {
      return { success: false, error: "INVALID_DATA" };
    }

    if (!logo || logo.size === 0) {
      return { success: false, error: "NO_FILE" };
    }

    if (!logo.type.startsWith("image/")) {
      return { success: false, error: "INVALID_FILE_TYPE" };
    }

    const slug = slugify(name, { lower: true, strict: true });

    await connectToDb();

    const exists = await brandModel.findOne({
      $or: [{ name }, { slug }],
    });

    if (exists) {
      return { success: false, error: "BRAND_EXISTS" };
    }

    // save image in local
    const uploadDir = path.join(process.cwd(), "public/uploads/brands");
    await mkdir(uploadDir, { recursive: true });

    const buffer = Buffer.from(await logo.arrayBuffer());
    const fileName = `${crypto.randomUUID()}-${logo.name}`;
    const filePath = path.join(uploadDir, fileName);

    await writeFile(filePath, buffer);
    // done

    const brand = await brandModel.create({
      name,
      slug,
      logoUrl: `/uploads/brands/${fileName}`,
    });

    return {
      success: true,
      data: {
        id: brand._id.toString(),
        name: brand.name,
        slug: brand.slug,
        logoUrl: brand.logoUrl,
      },
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: "SERVER_ERROR" };
  }
}

async function createNewCategory(formData) {
  try {
    const name = formData.get("name");

    if (!name) {
      return { success: false, error: "INVALID_DATA", data: { name } };
    }

    const slug = slugify(name, { lower: true, strict: true });

    await connectToDb();

    const exists = await categoryModel.findOne({
      $or: [{ name }, { slug }],
    });

    if (exists) {
      return { success: false, error: "CATEGORY_EXISTS", data: { name } };
    }

    const category = await categoryModel.create({
      name,
      slug,
    });

    return {
      success: true,
      data: {
        id: category._id.toString(),
        name: category.name,
        slug: category.slug,
      },
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: "SERVER_ERROR" };
  }
}

async function createNewColor(formData) {
  try {
    const name = formData.get("name");
    const hexCode = formData.get("color");

    if (!name || !hexCode) {
      return { success: false, error: "INVALID_DATA", data: { name } };
    }

    await connectToDb();

    const exists = await colorModel.findOne({
      $or: [{ name }, { hexCode }],
    });

    if (exists) {
      return { success: false, error: "COLOR_EXISTS" };
    }

    const color = await colorModel.create({
      name,
      hexCode,
    });

    return {
      success: true,
      data: {
        id: color._id.toString(),
        name: color.name,
        hexCode: color.hexCode,
      },
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: "SERVER_ERROR" };
  }
}

async function createNewSize(formData) {
  try {
    const sizeValue = formData.get("size");

    if (!sizeValue) {
      return { success: false, error: "INVALID_DATA" };
    }

    await connectToDb();

    const exists = await sizeModel.findOne({
      $or: [{ value: sizeValue }],
    });

    if (exists) {
      return { success: false, error: "SIZE_EXISTS" };
    }

    const last = await sizeModel.findOne().sort({ sortOrder: -1 });
    const nextOrder = last ? last.sortOrder + 10 : 10;

    const size = await sizeModel.create({
      value: sizeValue,
      sortOrder: nextOrder,
    });

    return {
      success: true,
      data: {
        id: size._id.toString(),
        value: size.value,
        sortOrder: size.sortOrder,
      },
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: "SERVER_ERROR" };
  }
}

async function createNewProduct(formData) {
  try {
    await connectToDb();

    const title = formData.get("title");
    const description = formData.get("description");
    const price = formData.get("price");
    const priceNumber = Number(price);
    const brand = formData.get("brand");
    const category = formData.get("category");
    const images = formData.getAll("images");
    const sizeFrom = Number(formData.get("sizeFrom"));
    const sizeTo = Number(formData.get("sizeTo"));
    let colorsStock;
    try {
      colorsStock = JSON.parse(formData.get("colorsStock") || "[]");
    } catch {
      console.log("INVALID_DATA");
      return { success: false, error: "INVALID_DATA" };
    }
    const invalid = {
      success: false,
      error: "INVALID_COLOR",
    };

    if (
      !Number.isFinite(sizeFrom) ||
      !Number.isFinite(sizeTo) ||
      sizeFrom > sizeTo
    ) {
      console.log("INVALID_SIZE_RANGE");
      return { success: false, error: "INVALID_SIZE_RANGE" };
    }

    if (
      !title ||
      !description ||
      !price ||
      !brand ||
      !category ||
      !colorsStock
    ) {
      console.log("INVALID_DATA");

      return { success: false, error: "INVALID_DATA" };
    }

    if (!Array.isArray(colorsStock) || colorsStock.length === 0) {
      console.log("INVALID_DATA");

      return { success: false, error: "INVALID_DATA" };
    }

    if (Number.isNaN(priceNumber) || priceNumber < 0) {
      console.log("INVALID_DATA_PRICE");

      return { success: false, error: "INVALID_DATA_PRICE" };
    }

    for (const row of colorsStock) {
      if (!row.colorId) return invalid;

      if (!Array.isArray(row.sizes) || row.sizes.length === 0) return invalid;

      for (const s of row.sizes) {
        if (!s?.sizeId) return invalid;

        const stockNum = Number(s.stock);
        if (!Number.isFinite(stockNum) || stockNum < 0) return invalid;
      }
    }

    if (!images || images.length === 0) {
      console.log("NO_FILE");

      return { success: false, error: "NO_FILE" };
    }

    for (const image of images) {
      if (!image.type.startsWith("image/")) {
        console.log("INVALID_FILE_TYPE");

        return { success: false, error: "INVALID_FILE_TYPE" };
      }
    }

    // save image in local
    const uploadDir = path.join(process.cwd(), "public/uploads/products");
    await mkdir(uploadDir, { recursive: true });
    const savedImages = [];

    for (const image of images) {
      const buffer = Buffer.from(await image.arrayBuffer());
      const fileName = `${crypto.randomUUID()}-${image.name}`;
      const filePath = path.join(uploadDir, fileName);

      await writeFile(filePath, buffer);

      savedImages.push({
        url: `/uploads/products/${fileName}`,
        alt: "",
        sortOrder: savedImages.length,
      });
    }
    // done

    // create slug
    let baseSlug = slugify(title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    while (await productModel.exists({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    // done

    // check exists product
    const exists = await productModel.exists({ title });
    if (exists) {
      console.log("PRODUCT_EXISTS");
      return { success: false, error: "PRODUCT_EXISTS" };
    }

    const product = await productModel.create({
      title,
      slug,
      description,
      brandId: brand,
      categoryId: category,
      images: savedImages,
      price: priceNumber,
      sizeRange: { from: sizeFrom, to: sizeTo },
    });

    console.log("product Color ->", product);

    const productColors = await productColorModel.insertMany(
      colorsStock.map((row) => ({
        productId: product._id,
        colorId: row.colorId,
      }))
    );

    console.log("product Color ->", productColors);

    const variants = [];

    for (const pc of productColors) {
      const row = colorsStock.find(
        (r) => String(r.colorId) === String(pc.colorId)
      );

      if (!row) continue;

      for (const s of row.sizes) {
        const sizeId = s.sizeId;
        const stock = Number(s.stock);

        const sku = `${product.slug}-${pc._id}-${sizeId}`.toUpperCase();

        variants.push({
          productId: product._id,
          productColorId: pc._id,
          sizeId,
          sku,
          stock,
        });
      }
    }

    if (variants.length === 0) {
      return { success: false, error: "INVALID_COLOR" };
    }

    await productVariantModel.insertMany(variants);

    console.log("product varinat ->", variants);
    console.log("product created");

    return { success: true, data: product._id };
  } catch (error) {
    console.log(error);
    return { success: false, error: "SERVER_ERROR" };
  }
}

export {
  createNewCategory,
  createNewBrand,
  createNewColor,
  createNewSize,
  createNewProduct,
};
