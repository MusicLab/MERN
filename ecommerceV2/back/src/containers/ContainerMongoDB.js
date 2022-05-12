import mongoose from "mongoose"



export default class ContainerMongoDB {
    constructor(collectionName, schema) {
        this.collection = mongoose.model(collectionName, schema)
    }
}

