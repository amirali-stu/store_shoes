import mongoose, { Schema } from "mongoose";
import category from "./category";
import brand from "./brand";

const productSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },

    description: { type: String },

    brandId: { type: Schema.Types.ObjectId, ref: "Brand", index: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category", index: true },
    price: { type: Number, required: true, min: 0 },

    sizeRange: {
      from: { type: Number, required: true },
      to: { type: Number, required: true },
    },

    images: [
      {
        url: { type: String, required: true },
        alt: { type: String, default: "" },
        sortOrder: { type: Number, default: 0 },
      },
    ],

    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

export const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);
