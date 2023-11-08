import mongoose from "mongoose";

const connectDB = async () => {
   try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");          
   } catch (error) {
      throw new Error("Couldn't connect to Mongo")
   }
 

}
export default connectDB;