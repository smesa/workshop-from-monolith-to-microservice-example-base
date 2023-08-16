import mongoose from "mongoose";

export const connectToMongoDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN!);

    console.log("DB is connected");
  } catch (error) {
    console.error(error);
    throw new Error("Error trying to connect to DB");
    process.exit(1);
  }
};
