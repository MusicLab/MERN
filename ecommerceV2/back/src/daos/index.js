import "dotenv/config"
import ProductsDaoMongoDB from "./products/productsDaoMongoDB"
import ProductsDaoMariaDB from "./products/productsDaoMariaDB"

let productsDao
switch (process.env.PERSISTENCE) {
    case "mongodb":
        productsDao = new ProductsDaoMongoDB()
        break
    case "mariadb":
        productsDao = new ProductsDaoMariaDB()
        break
}

export {productsDao}