import express from "express"
import dotenv from 'dotenv'
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import kpiRoutes from "./src/routes/kpi.js";
import transactionRoutes from "./src/routes/transaction.js";
import productRoutes from "./src/routes/product.js";
import { kpis, products, transactions} from "./src/data/data.js"
import mongoose from "mongoose";
import KPI from "./src/models/KPI.js";
import Product from "./src/models/Product.js";
import Transaction from "./src/models/Transaction.js";

dotenv.config()
const PORT = process.env.PORT || 8000
const app = express()

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


// mongoose setup
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then ( async () => {
    app.listen(PORT, () => console.log(`server Port: ${PORT}`))
    // add data one time only or as needed
    // await mongoose.connection.db.dropDatabase()
    // KPI.insertMany(kpis)
    // Product.insertMany(products)
    // Transaction.insertMany(transactions)
})
.catch((error) => console.log(`${error} did not connect`))