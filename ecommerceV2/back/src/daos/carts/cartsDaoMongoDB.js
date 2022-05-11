import ContainerCartsMongoDB from "../../containers/ContainerProductsMongoDB"
import productsDaoMongoDB from "../products/productsDaoMongoDB"




class CartsDaoMongoDB extends ContainerCartsMongoDB {
    constructor() {
        super("carts", {"productsIn" : [{}]})
    }


}

export default CartsDaoMongoDB