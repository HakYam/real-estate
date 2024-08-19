import GoogleProvider from "next-auth/providers/google";
import { useCallback } from "react";
import User from "@/models/User";
import connectDB from "@/config/database";

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization : {
            params: {
                prompt : 'consent',
                access_type: 'offline',
                response_type: 'code'
            }
        }
      })
    ],
    useCallback : {
        async singIn ({profile}) {
            //1. connect to db
            await connectDB();

            // 2. check if user exist
            const userExist = await User.findOne({email: profile.email})
            // 3. if not, create user
            if(!userExist) {
                //truncate username if too long
                const username = profile.name.slice(0, 20);
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture,
                })
            }
            // 4. return true to allow sing in
            return true;
        },

         async session ({session}) {
            // 1. get user from db
            const user = await User.findOne({
                email: session.user.email
            })
            // 2. assign user id from the session
            session.user.id = user._id.toString();
            // 3. return the session
            return session;
         }
    }
}
