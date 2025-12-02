import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    await mongoose.connect("mongodb://127.0.0.1:27017/store_shoes_tak");

    console.log("MongoDB connected successfully ✅");
  } catch (err) {
    console.error("MongoDB connection error: ❌", err);
    process.exit(1);
  }
};

export default connectToDb;
