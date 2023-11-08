import NextAuth from "next-auth/next";
import GoogleProvider from  "next-auth/providers/google"


const handler =  NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    // callbacks: {
    //     async session(session, token) {
    //         session.accessToken = token.accessToken;
    //         return session;
    //     }
    // }
})


export  {handler as GET, handler as POST};
