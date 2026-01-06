import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"
const connectDB=async ()=>{
    try{
      const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log("MongoDB connected Successfully !!host:",connectionInstance.connection.host);

    }  catch(error){
        console.log("MongoDB sever error",error)
        process.exit(1)
    }

}
export default connectDB