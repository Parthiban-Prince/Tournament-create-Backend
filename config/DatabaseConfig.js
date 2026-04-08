import mongoose from "mongoose";
import { DB_URL } from "./ServerConfig.js";

export async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URL, {
      autoIndex: true,        // ensures indexes like unique email
    });

    console.log("✅ Connected to Database:", mongoose.connection.name);

  } catch (error) {
    console.error("❌ Database connection failed:", error.message);

    // 🔥 IMPORTANT: stop server if DB fails
  }
}

export default connectToDatabase;
