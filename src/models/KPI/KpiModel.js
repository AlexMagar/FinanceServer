import KpiSchema from "./KpiSchema.js";

export const getKpi = () => {
    return KpiSchema.find()
}