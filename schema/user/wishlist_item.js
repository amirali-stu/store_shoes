import mongoose, { Schema } from "mongoose";
import UserModel from "./user";
import { productModel } from "../product/product";

const wishlistItemSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

wishlistItemSchema.index({ userId: 1, productId: 1 }, { unique: true });

const WishlistModel =
  mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistItemSchema);

export default WishlistModel;
