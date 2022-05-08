import mongoose from "mongoose"


const productCollection = "product" 

const ProductSchema = new mongoose.Schema({
    number: {type: Number, required: true, max: 1000},
    
})

const productModel = mongoose.model(productCollection, ProductSchema)

export default productModel