import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;