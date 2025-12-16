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

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductModel;
