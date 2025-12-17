import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },

    parentId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      default: null,
      index: true,
    },
  },
  { timestamps: true }
);

export const categoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
