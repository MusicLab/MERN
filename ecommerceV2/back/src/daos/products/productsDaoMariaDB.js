import ContainerMariaDB from "../../containers/ContainerMariaDB"
import {knexProducts} from "../../db/config"



class ProductsDaoMariaDB extends ContainerMariaDB {
    constructor() {
        super(knexProducts, "allProducts")
    }
}

export default ProductsDaoMariaDB

