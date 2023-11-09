import User from "@models/User"
import connectDB from "@utils/db"

export const POST = async(request) =>{
   const {name, email , password} = await request.json()

      await connectDB()
      try {

        const newUser = new User()
        
      } catch (error) {

        return new NextResponse("Internal Server Error: Couldn't connect to the database", {
            status: 500
          });
          
        
      }

}