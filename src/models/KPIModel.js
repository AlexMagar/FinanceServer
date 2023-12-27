import KPI from "./KPISchema.js";

export const getKpi = () => {
    return KPI.find()
}

export const addKpi = (kpis) => {
    return KPI(kpis).save()
}