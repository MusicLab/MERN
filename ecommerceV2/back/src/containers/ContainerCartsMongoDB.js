import mongoose from "mongoose"



export default class ContainerCartsMongoDB {
    constructor(collectionName, schema) {
        this.collection = mongoose.model(collectionName, schema)
    }

    async getById(id) {
        try {
            const docs = await this.collection.find({ "_id": id }, {__v: 0})
            if (docs.length == 0) {
                throw new Error("error at listing by Id, not found")
            } else {
                return docs
                
            }
        } catch (error) {
            throw new Error(`error at listing by Id ${error}`)
        }
    }
    async getAll() {
        try {
            const docs = await this.collection.find()
            return docs
        } catch (error) {
            throw new Error("error listing all Docs")
        }
    }

    async save() {
        const doc = await this.collection.create()
    }

    async saveProduct(product) {
        console.log(product)
        id = "627ac3adeaddfcdf48c611a7"
        const doc = await this.collection.updateOne({"_id": ObjectId("627ac3adeaddfcdf48c611a7") }, {$push:{"productsIn": product}})
    }
    
    // todo manejo de errores
    async updateProduct(id, body) {
        try {
            const docs = await this.collection.findOneAndUpdate({ "_id": id }, {$set: body})
            
            
        } catch (error) {
            throw new Error(error, "error updating product")
        }
    }

    async deleteAll() {
        try {
            await this.collection.deleteMany()
        } catch (error) {
            throw new Error(error, "error deleting all products")
        }
    }
}

