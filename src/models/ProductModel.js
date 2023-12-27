import Product from "./ProductSchema.js";

export const addProduct = (pdt) => {
    return Product(pdt).save()
}

export const findProduct = () => {
    return Product.find()
}