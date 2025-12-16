import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    hexCode: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Color || mongoose.model("Color", colorSchema);
