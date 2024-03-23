import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js"

import { DB_NAME } from "./constants.js"

import userRouter from "./routes/user.routes.js";

import app from "./app.js";
// Load environment variables from .env file


dotenv.config({
    path:'./.env'
})


connectDB()
.then(() => {

    const app = express()

    app.use(express.json())
    app.use(userRouter)

    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("mongodb connection failed !!", error);
})

//app.use(express.json());
//app.use(userRouter);



export default connectDB   //connectDB








/*
import express from "express"

const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR:", error);
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`APP is listening on port ${process.env.PORT}`);
        })
    }catch(error) {
        console.error("ERROR: ",error)
        throw err
    }
})()
*/