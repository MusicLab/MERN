import ContainerMongoDB from "../../containers/ContainerMongoDB"
import cartDaoMongoDB from "../carts/cartDaoMongoDB"
import cartDao from "../index"


class CartsDaoMongoDB extends ContainerMongoDB {
    constructor() {
        super(
            "carts", {carts: []} 
        )
    }

}

export default CartsDaoMongoDB