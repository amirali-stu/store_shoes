import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      minlength: 3,
      sparse: true,
    },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    age: { type: Number, min: 2, max: 120 },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "ایمیل معتبر نیست"],
    },
    phone: { type: String },
    streetAddress: String,
    city: String,
    province: String,
    password: { type: String, required: true, min: 8 },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export default UserModel;
