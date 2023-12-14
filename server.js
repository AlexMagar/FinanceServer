import express from "express"
import dotenv from 'dotenv'
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import connectMongoDB from "./src/config/mongoConfig.js";
import kpiRoutes from "./src/routes/kpi.js";
import transactionRoutes from "./src/routes/transaction.js";
import productRoutes from "./src/routes/product.js";
import { kpis, products, transactions} from "./src/data/data.js"

dotenv.config()
const PORT = process.env.PORT || 8000
const app = express()

//connet db
connectMongoDB()

//middleware
app.use(express.json()) //to parse the json data
app.use(cors())
app.use(helmet()) //Helmet helps secure Express apps by setting HTTP response headers.
app.use(morgan("dev"))
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

console.log("first")

// routes
app.use("/kpi", kpiRoutes)
app.use("/product", productRoutes)
app.use("/transaction", transactionRoutes)

app.listen(PORT, (err) => {
    err
    ? console.log(err.message)
    : console.log(`server running at http://localhost:${PORT}`)
    // transactionRoutes.insertMany(transactions)

    // await mongoose.Connection.db.dropDatabase()
})