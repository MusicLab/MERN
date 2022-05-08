import "dotenv/config"
import ProductsDaoMongoDB from "./products/productsDaoMongoDB"

let productsDao
console.log(process.env.PERSISTENCE)

switch (process.env.PERSISTENCE) {
    case "mongodb":
        const {default: productsDaoMongoDB} = await import("../daos/products/productsDaoMongoDB")

        productsDao = new ProductsDaoMongoDB()
        break
}

export {productsDao}