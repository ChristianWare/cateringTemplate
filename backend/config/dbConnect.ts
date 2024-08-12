import mongoose from "mongoose";
import room, { IRoom } from "../models/room";

const models = {
  Room: mongoose.models.Room || mongoose.model<IRoom>("Room", room as any),
};

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI!);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default models;
