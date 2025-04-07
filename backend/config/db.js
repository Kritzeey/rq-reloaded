import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to database ${connection.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
}
