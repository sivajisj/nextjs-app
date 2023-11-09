import connectDB from "@utils/db";
import { NextResponse } from "next/server"
import Post from "@models/Post";


export const GET = async (request) => {
    const url = new URL(request.url);
  
    const username = url.searchParams.get("username");
  
    try {
      await connectDB();
  
      const posts = await Post.find(username && { username });
  
      return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
  
  export const POST = async (request) => {
    const body = await request.json();
  
    const newPost = new Post(body);

    console.log(newPost);
  
    try {
      await connectDB();
  
      await newPost.save();
      console.log(newPost.save())
  
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };