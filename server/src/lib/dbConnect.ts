import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "Code-Brackets",
    });
    console.log("Connection established!");
  } catch (error) {
    console.log("Error connecting to database");
  }
};
