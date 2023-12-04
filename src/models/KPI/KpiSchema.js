import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose)

const KpiSchema = new mongoose.Schema({
    totalProfit: {
        type: mongoose.Types.Currency,
        currency: "AUD",
        get: (v) => v/100,
    },
    totalRevenue: {
        type: mongoose.Types.Currency,
        currency: "AUD",
        get: (v) => v/100,
    },
    totalExpenses: {
        type: mongoose.Types.Currency,
        currency: "AUD",
        get: (v) => v/100,
    },
    expenseByCaregory: {
        type: Map,
        of:{
            type: mongoose.Types.Currency,
            currency: "AUD",
            get: (v) => v/100,
        }
    },
},
{
    timestamps: true, 
    toJSON: {getters: true}
}
)

export default mongoose.model("KPI", KpiSchema) //mongodb will convert KPI into kpi