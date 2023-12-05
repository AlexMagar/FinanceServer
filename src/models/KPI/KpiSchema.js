import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose)

const daySchema = new mongoose.Schema({
    date: String,
    revenue: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    expenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
},
{ toJSON: {getters: true}}
)

const monthSchema = new mongoose.Schema({
    month: String,
    revenue: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    expenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    operationalExpenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    nonOperationalExpenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
},
{ toJSON: {getters: true}}
)


const KpiSchema = new mongoose.Schema({
    totalProfit: {
        type: mongoose.Types.Currency,
        currency: "USD",
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
    monthlyData: [monthSchema],
    dailyData: [daySchema],
},
{
    timestamps: true, 
    toJSON: {getters: true}
}
)

export default mongoose.model("KPI", KpiSchema) //mongodb will convert KPI into kpi