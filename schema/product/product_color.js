import mongoose, { Schema } from "mongoose";
import { productModel } from "./product";
import { colorModel } from "./color";

const productColorSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },
    colorId: {
      type: Schema.Types.ObjectId,
      ref: "Color",
      required: true,
      index: true,
    },

    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

productColorSchema.index({ productId: 1, colorId: 1 }, { unique: true });

export const productColorModel =
  mongoose.models.ProductColor ||
  mongoose.model("ProductColor", productColorSchema);
