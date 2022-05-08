import express from 'express';
import { isAdmin } from './../middlewares/isAdmin';
import {productsDao}  from "../daos/index"

const router = express.Router()

router.get('/:id?', async (req, res) => {
    const { id } = req.params
    if (id) {
        try {
            const data = await productsDao.getById(id)
            res.json(data)
        } catch (error) {
            let msg = (error).message;
            return res.status(400).json({ error: msg });
        }
    } else {
        try {
            const data = await productsDao.getAll()
            res.json(data)
        } catch (error) {
            let msg = (error).message
            return res.status(400).json({ error: msg })
        }
    }
});

router.post('/', isAdmin, async (req, res) => {
    const { name, price, thumbnail, code, description, stock } = req.body
    if (name && price && thumbnail && code && description && stock) {
        const request = await productsDao.save({
            name,
            price,
            thumbnail,
            code,
            description,
            stock
        })
        res.status(201).json(`se creó el producto con id: ${request}`)
    } else {
        res.status(400).json(`Debe ingresar name && price && thumbnail && code && description && stock`)
    }
});

router.put('/:id', isAdmin, async (req, res) => {
    const {
        params: { id },
        body
    } = req
    if (body.name || body.price || body.thumbnail || body.code || body.description || body.stock) {
        const response = await productsDao.updateProduct(
            id, body
        )
        res.json(response)
    } else {
        res.status(400).json(`Debe ingresar un title, price, thumbnail, code, description o stock`)
    }
});

router.delete('/:id?', isAdmin, async (req, res) => {
    const {
        params: { id }
    } = req
    if (id) {
        try {
            const response = await productsDao.deleteById(id)
            res.json(response)
        } catch (error) {
            let msg = (error).message;
            return res.status(400).json({ error: msg });
        }
    }
    else {
        try {
            const response = await productsDao.deleteAll()
            res.json(response)
        } catch(error) {
            let msg = (error).message
            return res.status(400).json({error:msg})
        }
    }
});

export default router