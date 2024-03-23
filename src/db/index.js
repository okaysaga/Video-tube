import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

//C:\Users\sujal\backend\src\constants.js

const connectDB = async () => {   //async func bcoz db is in another continent
    try{
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log( `/n MongoDB connected !! DB HOST:$
       {connectionInstance.connection.host }`);

    }
    catch(error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB