import mongoose from "mongoose";

const DB_URL = "mongodb://127.0.0.1/Practicing";

export const dbconfig = async () => {
  try {
    const connect = await mongoose.connect(DB_URL);
    console.log(`connected to port ${connect.connection.host}`);
  } catch (error) {
    console.log("An error occurred while connecting");
  }
};
