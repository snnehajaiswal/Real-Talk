import express, { urlencoded } from "express"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
const app=express()
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(express.static('public'))
app.use("/api/v1/auth",authRoutes)

export default app