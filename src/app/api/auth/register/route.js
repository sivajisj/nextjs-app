import User from "@models/User"
import connectDB from "@utils/db"
import bcrypt from "bcryptjs/dist/bcrypt"
import { NextResponse } from "next/server"

export const POST = async(request) =>{
   const {name, email , password} = await request.json()

      await connectDB()
      const hashedPassword = await bcrypt.hash(password,5)
      console.log(hashedPassword);
      const newUser = new User({
        name,
        email,
        password:hashedPassword
      })
      try {

        await newUser.save()
         return new NextResponse("user has been created", {
            status: 201
          });
        
      } catch (error) {

        return new NextResponse("Internal Server Error: Couldn't connect to the database", {
            status: 500
          });
          
        
      }

}