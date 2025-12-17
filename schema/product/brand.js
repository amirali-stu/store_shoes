import mongoose, { Schema } from "mongoose";

const brandSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    logoUrl: { type: String },
  },
  { timestamps: true }
);

export const brandModel =
  mongoose.models.Brand || mongoose.model("Brand", brandSchema);
