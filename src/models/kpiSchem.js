import mongoose from "mongoose"
import { loadType } from "mongoose-currency"

const Schema = mongoose.Schema

loadType(mongoose)

const kpiSchema = new Schema({

    totalProfit: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    totalRevenue: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    totalExpenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },

},
{ timestamps: true }
)

export default mongoose.model("KPI", kpiSchema)