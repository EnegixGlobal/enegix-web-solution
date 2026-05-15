import mongoose from "mongoose";

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

const connectDB = async (): Promise<void> => {
  try {
    // If already connected, return
    if (connection.isConnected) {
      console.log("Already connected to MongoDB");
      return;
    }

    // Check if MongoDB URI is provided
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not defined");
    }

    // Connect to MongoDB
    // Connect to MongoDB with options for better stability in serverless environments
    const db = await mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false, // Disable buffering for serverless
      connectTimeoutMS: 10000, // 10s timeout
      socketTimeoutMS: 45000, // 45s socket timeout
    });

    connection.isConnected = db.connections[0].readyState;

    console.log("MongoDB connected successfully");

    // Handle connection events
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });

  } catch (error) {
    console.error("Database connection failed:", error);
    throw new Error(`Database connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export default connectDB;
