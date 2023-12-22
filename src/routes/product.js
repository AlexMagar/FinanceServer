import express from "express"
import { products } from "../data/data"

const router = express.Router()

router.get("/product", async (req, res) => {
    try {
        const product = await products.find()
        res.status(200).json({
            message: product
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

export default router