import express from 'express';
import {cartsDao} from "../daos/index"
import {productsDao} from "../daos/index"



const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const request = await cartsDao.getAll()
        res.json(request)
    } catch (error) {
        let msg = (error).message
        return res.status(400).json({ error: msg })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const products = await cartsDao.getById(id)
        res.json(products)
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }
})

router.post('/', async (req, res) => {
    try {
        const request = await cartsDao.save()
        res.status(201).json({ message: 'the cart has been succesfully created', cartId: request })
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }
})


router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const response = await cartsDao.deleteById(id)
        res.json(response)
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }
});

router.post('/:idCart/:idProduct', async (req, res) => {
    const { idCart, idProduct } = req.params
    try {
        const product = await productsDao.getById(idProduct)
        const request = await cartsDao.saveProduct(idCart, product)
        res.status(201).json(product)
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }
});

router.delete('/:idCart/:idProduct', async (req, res) => {
    const {  idCart, idProduct } = req.params
    try {
        const response = await cartsDao.deleteProdInCart(idCart, idProduct)
        res.json(response)
    } catch (error) {
        let msg = (error).message;
        return res.status(400).json({ error: msg });
    }
});



export default router;
