import express from "express"
import { addTransaction, findTransaction } from "../models/TransactionModel.js"
import { transactions } from "../data/data.js"

const router = express.Router()

router.post("/transaction", async ( req, res) => {
    try {
        const rtl = addTransaction(transactions)
        rtl?._id
        ? res.status(200).json({
            message: "New Transaction has been added"
        })
        : res.status(400).json({
            message: "Error, Unable to add new Transaction"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get("/transaction", async (req, res) => {
    try {
        const trn = findTransaction()
            .limit(50)
            .sort({createdOn: -1})

        res.status(200).json(trn)
        
    } catch (error) {
        res.status(404)
        .json({
            status: "Error",
            message: error.message
        })
    }
}) 
export default router