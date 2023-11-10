import connectDB from "@utils/db";
import { NextResponse } from "next/server";
import Post from "@models/Post";

export const GET = async (request,{params}) => {

    const {id} = params
    // console.log(id);
  try {
    await connectDB();

    const posts = await Post.findById(id);
    // console.log(JSON.stringify(posts));
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(
      "Internal Server Error: Couldn't connect to the database",
      {
        status: 500,
      }
    );
  }
};


export const DELETE = async (request,{params}) => {

    const {id} = params
    // console.log(id);
  try {
    await connectDB();

    await Post.findByIdAndDelete(id);
    // console.log(JSON.stringify(posts));
    return new NextResponse("Post has been deleted ", {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(
      "Internal Server Error: Couldn't connect to the database",
      {
        status: 500,
      }
    );
  }
};
