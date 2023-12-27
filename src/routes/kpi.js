import express from "express"
import { kpis } from "../data/data.js"
import { addKpi, getKpi } from "../models/KPIModel.js";

const router = express.Router()

router.post("/kpi", async (req, res) => {
    try {
        const rstl = await addKpi(kpis)

        rstl?._id
        ? res.status(200).json({
            message: "New kpis has been added"
        })
        : res.status(400).json({
            message: "Error, unable to add kpis"
        })
        
    } catch (error) {
        res.status(404)
        .json({
            status: "Error",
            message: error.message
        })
    }
})


router.get("/kpi", async (req, res) => {
    try {
        const kpiData = await getKpi()
        res.status(200).json(kpiData)
        
    } catch (error) {
        res.status(404)
        .json({
            status: "Error",
            message: error.message
        })
    }
}) 

export default router