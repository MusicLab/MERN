import ContainerMongoDB from "../../containers/ContainerMongoDB"

class ProductsDaoMongoDB extends ContainerMongoDB {
    constructor() {
        super("products", {
            number: {type: Number, required: true}
        })
    }
}

export default ProductsDaoMongoDB