import mongoose, { Schema } from "mongoose";
import { sizeModel } from "./size";
import { productModel } from "./product";
import { productColorModel } from "./product_color";


const productVariantSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },
    productColorId: {
      type: Schema.Types.ObjectId,
      ref: "ProductColor",
      required: true,
      index: true,
    },

    sizeId: {
      type: Schema.Types.ObjectId,
      ref: "Size",
      required: true,
      index: true,
    },

    sku: { type: String, required: true, unique: true, index: true },
    stock: { type: Number, required: true, min: 0, default: 0 },
    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

productVariantSchema.index(
  { productId: 1, productColorId: 1, sizeId: 1 },
  { unique: true }
);

export const productVariantModel =
  mongoose.models.ProductVariant ||
  mongoose.model("ProductVariant", productVariantSchema);
