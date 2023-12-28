import dotenv from "dotenv";
dotenv.config()
import express from "express";
import morgan from "morgan";
import connectMongoDB from "./src/config/mongoConfig.js";
import cors from "cors"

const PORT = process.env.PORT || 8000
const app = express()

//connect db
connectMongoDB()

//middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())


//apis
app.use("/", (req, res) => {
    res.json({
        status: "Success",
        message: "This is successfull response"
    })
})


app.listen(PORT, (err) => {
    err 
    ? console.log(err.message)
    : console.log(`server running at http://localhost:${PORT}`)
})