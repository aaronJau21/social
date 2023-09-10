import mongoose from "mongoose";

export const db = async () => {
  const uri_db = process.env.DB_URI as string;

  try {
    await mongoose.connect(uri_db);
    console.log("Se conecto correctamente");
  } catch (error) {
    console.log(error);
  }
};
