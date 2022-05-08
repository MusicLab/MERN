import ContainerMongoDB from "../../containers/ContainerMongoDB"

class CartDaoMongoDB extends ContainerMongoDB {
    constructor() {
        super("cart", {
            name: {type: String, required: true},
            price: {type: Number, required: true},
            thumbnail: {type: String},
            code: {type: String, required: true},
            description: {type: String},
            stock: {type: Number, required: true}

        })
    }
}

export default CartDaoMongoDB