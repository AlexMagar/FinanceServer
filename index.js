import dotenv from "dotenv";
dotenv.config()
import express from "express";
import morgan from "morgan";
import connectMongoDB from "./src/config/mongoConfig.js";
import cors from "cors"
import kpiRouter from "./src/routes/kpiRouter.js"
import productRouter from "./src/routes/productRouter.js"
import transactionRouter from "./src/routes/transactionRouter.js"

const PORT = process.env.PORT || 8000
const app = express()

//connect db
connectMongoDB()

//middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())


//apis
app.use("/api/v1/kpi", kpiRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/transaction", transactionRouter)


app.use("/", (req, res) => {
    res.json({
        status: "Success",
        message: "server running well"
    })
})


app.listen(PORT, (err) => {
    err 
    ? console.log(err.message)
    : console.log(`server running at http://localhost:${PORT}`)
})