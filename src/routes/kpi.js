import express from "express"

const router = express.Router()

router.get("/kpi", async (req, res) => {
    try {
        const kpi = await 
        
    } catch (error) {
        res.status(404)
        .json({
            status: "Error",
            message: error.message
        })
    }
}) 

export default router