import mongoose, { Schema } from "mongoose";
import UserModel from "../user/user";

const cartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "CONVERTED"],
      default: "ACTIVE",
      index: true,
    },
  },
  { timestamps: true }
);

// اگر userId داری، فقط یک سبد ACTIVE برای هر کاربر
cartSchema.index(
  { userId: 1, status: 1 },
  {
    unique: true,
    partialFilterExpression: {
      status: "ACTIVE",
      userId: { $type: "objectId" },
    },
  }
);

const CartModel = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
export default CartModel;
