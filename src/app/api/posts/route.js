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
  try {
    await connectDB();
    console.log("sj db")

    const { title, desc, image, content, username } = await request.json();

    // Validate that all required fields are present in the request body
    if (!title || !desc || !image || !content || !username) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const newPost = new Post({
      title,
      desc, // Make sure 'desc' is present in the request body
      image,
      content,
      username,
    });

    await newPost.validate(); // Validate the new post document

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    console.error(err);

    // Check if the error is a Mongoose validation error
    if (err.name === 'ValidationError') {
      return new NextResponse(`Validation Error: ${err.message}`, { status: 400 });
    }

    return new NextResponse("Database Error", { status: 500 });
  }
};
