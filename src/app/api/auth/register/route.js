import User from "@models/User"
import connectDB from "@utils/db"
import bcrypt from "bcryptjs/dist/bcrypt"
import { NextResponse } from "next/server"

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connectDB();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};