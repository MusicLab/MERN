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
}

export default ProductsDaoMongoDB