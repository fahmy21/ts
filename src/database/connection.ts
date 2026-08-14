import mongoose from "mongoose";
import { env } from "../config/env.service.js";

export const databaseConnect = async () => {
    try {
        await mongoose.connect(env.MONGO_URI as string).then(() => {
            console.log("connected to database");
        });
    } catch (error) {
        console.error("error connecting to database", error);
    }
};