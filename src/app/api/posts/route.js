import connectDB from "@utils/db";
import { NextResponse } from "next/server"
import Post from "@models/Post";

export const GET  = async (request) =>{
    try{

        await connectDB()

        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts), {
            status: 200
          });
          

    }catch(err){
    
        return new NextResponse("Internal Server Error: Couldn't connect to the database", {
            status: 500
          });
          
    }


}