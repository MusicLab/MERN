import "dotenv/config"
import ProductsDaoMongoDB from "./products/productsDaoMongoDB"
import ProductsDaoMariaDB from "./products/productsDaoMariaDB"
import CartsDaoMongoDB from "./carts/cartsDaoMongoDB"


let productsDao
let cartsDao

switch (process.env.PERSISTENCE) {
    case "mongodb":
        productsDao = new ProductsDaoMongoDB()
        cartsDao = new CartsDaoMongoDB()
        console.log("estamos en mongodb")
        break
    case "mariadb":
        productsDao = new ProductsDaoMariaDB()
        console.log("estamos en mariadb")
        break
}


export {productsDao, cartsDao}