import express from 'express'
import { addProduct } from '../models/ProductModel.js'
import { products } from '../data/data.js'

const router = express.Router()


router.post("/", async (req, res) => {
    try {

        const result = await addProduct(products)

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

export default router