import ContainerMongoDB from "../../containers/ContainerMongoDB"
import productsDaoMongoDB from "../products/productsDaoMongoDB"




class CartsDaoMongoDB extends ContainerMongoDB {
    constructor() {
        super("carts", {"productsIn" : {}})
    }
    async getById(id) {
        try {
            const docs = await this.collection.find({_id : id})
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
        const doc = await this.collection.create(this)
        return doc._id
    }

    async saveProduct(idCart, product) {
        
        const doc = await this.collection.updateOne({_id: idCart }, {$push:{productsIn: product}})
    }

    async deleteById(id) {
        const doc = await this.collection.deleteOne({_id : id})
        return doc
    }

    async deleteProdInCart(idCart, idProduct) {
        const res = await this.collection.updateOne({_id: idCart }, {$pull:{productsIn: {_id: idProduct}}})
        return res
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

export default CartsDaoMongoDB