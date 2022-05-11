import express from 'express';
import {cartsDao} from "../daos/index"
import {productsDao} from "../daos/index"



const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const data = await cartsDao.getAll()
        res.json(data)
    } catch (error) {
        let msg = (error).message
        return res.status(400).json({ error: msg })
    }
})
router.post('/', async (req, res) => {
    try {
        const request = await cartsDao.save()
        res.status(201).json({ message: 'the cart has been succesfull created', cartId: request })
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }
})

router.get('/:id/products', async (req, res) => {
    const {
        params: { id }
    } = req
    try {
        const { products } = await cartsDao.getById(id)
        res.json(products)
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }
});


router.delete('/:id', async (req, res) => {
    const {
        params: { id }
    } = req
    try {
        const response = await carts.deleteById(Number(id))
        res.json(response)
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }
});

router.get('/:id/productos', async (req, res) => {
    const {
        params: { id }
    } = req
    try {
        const { products } = await cartDao.getById(Number(id))
        res.json(products)
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }
});

router.post('/:id', async (req, res) => {
    const { params: { id } } = req
    try {
        const product = await productsDao.getById(id)
        const request = await cartsDao.saveProduct(product)
        res.status(201).json(request)
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }
});

router.delete('/:id/productos/:id_prod', async (req, res) => {
    const {
        params: { id, id_prod }
    } = req
    try {
        const response = await carts.deleteProdInCart(Number(id), Number(id_prod))
        res.json(response)
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }
});


export default router;
