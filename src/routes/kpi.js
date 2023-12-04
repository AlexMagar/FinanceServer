import express from "express"
import { getKpi } from "../models/KPI/KpiModel.js"

const router = express.Router()

router.get("/kpi", async (req, res) => {
    try {
        const kpi = await getKpi()
        
    } catch (error) {
        res.status(404)
        .json({
            status: "Error",
            message: error.message
        })
    }
}) 

export default router