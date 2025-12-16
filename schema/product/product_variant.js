import { Schema } from "mongoose";
import ProductModel from "./product";

const productVariantSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },
    sku: { type: String, required: true, unique: true, index: true },

    colorId: {
      type: Schema.Types.ObjectId,
      ref: "Color",
      required: true,
      index: true,
    },
    sizeId: {
      type: Schema.Types.ObjectId,
      ref: "Size",
      required: true,
      index: true,
    },

    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },

    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

productVariantSchema.index(
  { productId: 1, colorId: 1, sizeId: 1 },
  { unique: true }
);

const ProductVariantModel =
  mongoose.models.ProductVariant ||
  mongoose.model("ProductVariant", productVariantSchema);

export default ProductVariantModel;
