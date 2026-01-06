import dotenv from "dotenv"
dotenv.config()
import connectDB from "./db/index.js"
import app from './app.js'

connectDB().then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server are running on the port :${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log("MongoDB error",error)
})