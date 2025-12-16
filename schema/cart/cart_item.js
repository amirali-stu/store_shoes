import mongoose, { Schema } from "mongoose";
import CartModel from "./cart";

const cartItemSchema = new Schema(
  {
    cartId: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
      index: true,
    },

    variantId: {
      type: Schema.Types.ObjectId,
      ref: "ProductVariant",
      required: true,
      index: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
      max: 50,
      default: 1,
    },

    unitPriceSnapshot: {
      type: Number,
      min: 0,
    },
  },
  { timestamps: true }
);

cartItemSchema.index({ cartId: 1, variantId: 1 }, { unique: true });

const CartItemModel =
  mongoose.models.CartItem || mongoose.model("CartItem", cartItemSchema);

export default CartItemModel;
