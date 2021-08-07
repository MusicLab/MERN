import express from 'express';
// import { productos } from "./Products"
import { Products } from "./Products";

const port = 8080;

const app = express();

const server = app.listen(port, () => {
    console.log('server up en puerto', port)
})

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

const products = new Products()

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/api/productos/listar', (req, res) => {
    const response = products.getProducts()
    if (!response.length > 0) {
        return res.status(400).json({
            error: 'no hay productos cargados'
        })
    }
    res.json(response)
});

app.post('/api/productos/guardar', (req, res) => {
    const { name, price, thumbnail } = req.body;
    if (!name || !price || !thumbnail) {
        return res.status(400).json({
            error: 'Deben ingresar name y price'
        })
    }
    products.addProduct(name, price)
    return res.json(
        products
    );
});

app.get('/api/productos/listar/:id', (req, res) => {
    const { id } = req.params
    const response = products.getProductById(id);
    if (!response) {
        return res.status(400).json({
            error: 'no existe el id ' + id
        })
    }
    res.json(response)
});
