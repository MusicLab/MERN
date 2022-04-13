import { response } from "express"
import express from "express"
import Products from "../Products.js"

const routerProductos = express.Router()

const products = new Products()


routerProductos.get('/productos/', (req, res) => {   
    const response = products.getProducts()
    if (!response.length > 0) {
        return res.status(400).json({
            error: 'no hay productos cargados'
        })
    }
    res.json(response)
});



routerProductos.post('/productos/', (req, res) => {
    const { name, price, thumbnail } = req.body;
    const body = req.body
    const numeroConvertido = Number(body.price)

    if (!name || !price || !thumbnail || !numeroConvertido) {
        return res.status(400).json({
            error: 'Deben ingresar name: string ,price: number y thumbnail: string'
        })
    }
    res.json(products.addProduct(name, price, thumbnail))
    
    
    
});

routerProductos.get('/productos/:id', (req, res) => {
    const { id } = req.params
    const response = products.getProductById(id);
    if (!response) {
        return res.status(400).json({
            error: 'no existe el id ' + id
        })
    }
    res.json(response)
});

routerProductos.put("/productos/:id", (req, res) => {
    const { id } = req.params
    const body = req.body
    const response = products.getProductById(id)
    if (!response) {
        return res.status(400).json({
            error: 'no existe el id ' + id
        })
    }
    const numeroConvertido = Number(body.price) 
    if (
        !numeroConvertido||
        !body.name || 
        !body.price ||
        !body.thumbnail ||
        typeof body.name != "string" ||
        typeof body.thumbnail != "string"
    ) {
        res.status = 400
        return res.json({
            msg: "necesito el name: string, price: number y thumbnail: string"

        })
    }
    response.name = body.name
    response.price = body.price
    response.thumbnail = body.thumbnail
    res.json(response)
})

routerProductos.delete("/productos/:id", (req, res) => {
    const { id } = req.params
    const response = products.getProductById(id)
    if (!response) {
        return res.status(400).json({
            error: 'no existe el id ' + id
        })
    }
    products.deleteProduct(id)
    res.json(response)
})



export default routerProductos
