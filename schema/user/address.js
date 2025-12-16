import mongoose, { Schema } from "mongoose";
import UserModel from "./user";

const addressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    fullName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },

    province: { type: String, required: true, trim: true }, // استان
    city: { type: String, required: true, trim: true }, // شهر
    postalCode: { type: String, trim: true },

    addressLine1: { type: String, required: true, trim: true },
    addressLine2: { type: String, trim: true },

    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const AddressModel =
  mongoose.models.Address || mongoose.model("Address", addressSchema);

export default AddressModel;
