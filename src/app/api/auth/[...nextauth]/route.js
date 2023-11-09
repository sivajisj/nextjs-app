import NextAuth from "next-auth/next";
import GoogleProvider from  "next-auth/providers/google"
import { CredentialsProvider } from "next-auth/providers/credentials";
import connectDB from "@utils/db";
import User from "@models/User";
import bcrypt from "bcryptjs/dist/bcrypt"



const handler =  NextAuth({
    providers: [
        CredentialsProvider({
          id: "credentials",
          name: "Credentials",
          async authorize(credentials) {
            //Check if the user exists.
            await connectDB
    
            try {
              const user = await User.findOne({
                email: credentials.email,
              });
    
              if (user) {
                const isPasswordCorrect = await bcrypt.compare(
                  credentials.password,
                  user.password
                );
    
                if (isPasswordCorrect) {
                  return user;
                } else {
                  throw new Error("Wrong Credentials!");
                }
              } else {
                throw new Error("User not found!");
              }
            } catch (err) {
              throw new Error(err);
            }
          },
        }),
        // GithubProvider({
        //   clientId: process.env.GITHUB_ID,
        //   clientSecret: process.env.GITHUB_SECRET,
        // }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
      ],
      pages: {
        error: "/dashboard/login",
      },
    
    });
    
    export { handler as GET, handler as POST };