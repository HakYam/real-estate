import mongoose, { connect } from "mongoose";
import { cookies } from "next/headers";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // if db is already connected don't connect again
    if(connected) {
        console.log('the mongoDB is already connected');
        return
    }
    
    //connect to db
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true
        console.log('connected to monogoDB successfully')
    }

    catch (error)
    {
        console.log(error)
    }
}

export default connectDB