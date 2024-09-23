import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connectionDB.connection.host}`);
  } catch (error) {
    console.log(`Error $(error.message)`);
    process.exit(1); // here 1 code is for the error and 0 code is for the succesfully connected.
  }
};
