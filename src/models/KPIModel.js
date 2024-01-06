import kpiSchem from "./kpiSchem.js"

export const getKpi = () => {
    return kpiSchem.find()
}

export const addKpi = (kpis) => {
    return kpiSchem(kpis).save()
}