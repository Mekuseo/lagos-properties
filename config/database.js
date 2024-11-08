import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (connected) {
    console.log('MongoDB is already connected');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 50000, // try increasing this timeout
    });
    connected = true;
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default connectDB ;