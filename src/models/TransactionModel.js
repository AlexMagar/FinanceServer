import Transaction from "./TransactionSchema.js"

export const addTransaction = (trn) => {
    return Transaction(trn).save()
}

export const findTransaction = () => {
    return Transaction.find()
}