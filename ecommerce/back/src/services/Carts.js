import getData from '../utils/getData'
import setData from '../utils/setData'
import path from 'path';
import Products from './Products'

const PUBLIC_PATH = path.join(__dirname, './', 'products.txt')
const products = new Products(PUBLIC_PATH)

const getItemInArray = (data, id) => {
    return data.find((item) => item.id === id)
}

class Carts {
    file

    constructor(file) {
        this.file = file;
    }

    async save() {
        let data = await getData(this.file)
        const id = data.length + 1;
        // const productsPromise = cart.products.map(product => products.getById(product))
        try {
            // const carts = await Promise.all(productsPromise)
            const cart = {
                id: id,
                timestamp: Date.now(),
                products: []
            }
            await setData(this.file, [...data, cart])
            return id
        } catch (error) {
            let msg = (error).message
            throw new Error(msg)
        }
    }

    async getById(id) {
        let data = await getData(this.file)
        const itemInArray = getItemInArray(data, id)
        if (itemInArray) {
            return itemInArray
        } else {
            throw new Error(`carrito con id ${id} no encontrado`)
        }
    }

    async getAll() {
        return await getData(this.file)
    }

    async deleteById(id) {
        let data = await getData(this.file)
        if (getItemInArray(data, id)) {
            const newData = data.filter((item) => item.id !== id)
            await setData(this.file, newData)
            return "se elimino correctamente"
        } else {
            throw new Error(`carrito con id ${id} no encontrado`)
        }
    }

    async updateCart(id, body) {
        let data = await getData(this.file)
        const itemInArray = getItemInArray(data, id)
        if (itemInArray) {
            itemInArray.products.push(...body)
        }
        const newData = data.filter((item) => item.id !== id)
        await setData(this.file, [...newData, itemInArray])
        return itemInArray
    }

    async deleteProdInCart(cartId, productId) {
        let data = await getData(this.file)
        const newData = data.filter((item) => item.id !== cartId)

        const itemInCart = getItemInArray(data, cartId)

        if (itemInCart) {
            const newCart = itemInCart.products.filter(item => item.id !== productId)
            itemInCart.products = newCart
            await setData(this.file, [...newData, itemInCart])
            return itemInCart
        } else {
            throw new Error(`carrito con id ${productId} no encontrado`)
        }
    }
}

export default Carts