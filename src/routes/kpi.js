import express from "express"
import { findKPI } from "../models/KPIModel.js"
import { kpis, products, transactions } from "../data/data.js";

const router = express.Router()

router.get("/kpi", async (req, res) => {
    try {
        const kpis = await findKPI();
        const kpiData = await insertKpi(kpis)

        res.status(200).json(kpis)
        
    } catch (error) {
        res.status(404)
        .json({
            status: "Error",
            message: error.message
        })
    }
}) 

export default router