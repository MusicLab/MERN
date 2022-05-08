import mongoose from "mongoose"

class ContainerMongoDB {
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
}