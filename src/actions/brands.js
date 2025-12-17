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

export { createNewCategory, createNewBrand, createNewColor, createNewSize };
