import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "ایمیل معتبر نیست"],
    },

    role: {
      type: String,
      enum: ["CUSTOMER", "ADMIN"],
      default: "CUSTOMER",
    },
    password: { type: String, required: true, min: 8 },

    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

userSchema.index({ email: 1 }, { unique: true });

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;
