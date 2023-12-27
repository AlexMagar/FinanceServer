import express from "express"
import { products } from "../data/data.js";
import { addProduct, findProduct } from "../models/ProductModel.js";

const router = express.Router()

router.post("/product", async (req, res) => {
    try {
        const rslt = addProduct(products)

        rslt?._id 
        ? res.status(200).json({
            message: "New Product has been added"
        })
        : res.status(400).json({
            message: "Error, unable to add products"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get("/product", async (req, res) => {
    try {
        const pdt = findProduct()

        pdt &&
        res.status(200).json({
            message: pdt
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

export default router