import ContainerMongoDB from "../../containers/ContainerMongoDB"

class ProductsDaoMongoDB extends ContainerMongoDB {
    constructor() {
        super("products", {
            name: {type: String, required: true},
            price: {type: Number, required: true},
            thumbnail: {type: String},
            code: {type: String, required: true},
            description: {type: String},
            stock: {type: Number, required: true}

        })
    }
    async getById(id) {
        try {
            const docs = await this.collection.findOne({ "_id": id }, {__v: 0})
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

    async save(product) {
        const doc = await this.collection.create(product)
        return doc._id
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

export default ProductsDaoMongoDB