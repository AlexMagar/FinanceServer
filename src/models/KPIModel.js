import kpiSchema from "./kpiSchem.js"

export const getKpi = () => {
    return kpiSchema.find()
}

export const addKpi = (kpis) => {
    return kpiSchema(kpis).save()
}