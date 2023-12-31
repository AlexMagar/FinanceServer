import express from "express"
import { addTransaction, findTransaction } from "../models/TransactionModel.js"
import { transactions } from "../data/data.js"

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const result = await addTransaction(transactions)

        result?._id
        ? res.json({
            status: "Success",
            message: "New product has been added successfully"
        })
        : res.status(500).json({
            message: "Error"
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get("/", async (req, res) => {
    try {
        const result = await findTransaction()
        result &&
        res.json({
            status: "success",
            message: "Data connected successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

export default router