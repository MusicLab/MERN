import express, { Request, Response } from 'express';
import Products from './../services/Products'
import path from 'path';
import { isAdmin } from './../middlewares/isAdmin';

const PUBLIC_PATH = path.join(__dirname, '../', 'products.txt')

const router = express.Router()
const products = new Products(PUBLIC_PATH)

router.get('/:id?', async (req, res) => {
    const { id } = req.params
    if (id) {
        try {
            const data = await products.getById(Number(id))
            res.json(data)
        } catch (error) {
            let msg = (error).message;
            return res.status(400).json({ error: msg });
        }
    } else {
        const data = await products.getAll()
        res.json(data)
    }
});

router.post('/', isAdmin, async (req, res) => {
    const { name, price, thumbnail, code, description, stock, color } = req.body
    if (name && price && thumbnail && code && description && stock && color) {
        const request = await products.save({
            name,
            price,
            thumbnail,
            code,
            description,
            stock,
            timestamp: Date.now(),
        })
        res.status(201).json(`se creó el producto con id: ${request}`)
    } else {
        res.status(400).json(`Debe ingresar name && price && thumbnail && code && description && stock && color`)
    }
});

router.put('/:id', isAdmin, async (req, res) => {
    const {
        params: { id },
        body
    } = req
    if (body.name || body.price || body.thumbnail) {
        const response = await products.updateProduct(
            Number(id), body
        )
        res.json(response)
    } else {
        res.status(400).json(`Debe ingresar un title, price o thumbnail`)
    }
});

router.delete('/:id', isAdmin, async (req, res) => {
    const {
        params: { id }
    } = req
    try {
        const response = await products.deleteById(Number(id))
        res.json(response)
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }

});

export default router