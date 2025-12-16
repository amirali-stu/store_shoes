import mongoose, { Schema } from "mongoose";

const sizeSchema = new Schema(
  {
    value: { type: String, required: true, trim: true },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Size || mongoose.model("Size", sizeSchema);
