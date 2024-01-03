import expres from 'express'
import { addKpi, getKpi } from '../models/KPIModel.js'
import { kpis } from '../data/data.js'

const router = expres.Router()

router.post("/", async (req, res) => {
    try {
        const interKpi = await addKpi(kpis)

        interKpi?._id
        ? res.status(200).json({
            message: "Successfully added kpis data"
        })
        : res.status(400).json({
            message: "Error on adding kpis data"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get("/", async (req, res) => {
    try {
        // const result = await getKpi()
        const result = kpis
        console.log("kpis first", result)
        result &&
        res.json({
            status: "success",
            message: result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

export default router