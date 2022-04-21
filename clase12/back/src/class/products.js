import getData from '../utils/getData'
import setData from '../utils/setData'
import Producto from './producto.js';
import * as controllers from "../controllers/products"

const getItemInArray = (data, id) => {
    return data.find((item) => item.id === id)
}

class Products {
    file;

    constructor(file) {
        this.file = file;
    }

    async save(product)  {
        let data = await getData(this.file)
        const id = data.length + 1;
        await setData(this.file, [...data, { ...product, id: id }])
        return id
    }

    async getById(id) {
        let data = await getData(this.file)
        const itemInArray = getItemInArray(data, id)
        if (itemInArray) {
            return itemInArray
        } else {
            throw new Error(`producto con id ${id} no encontrado`)
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
            throw new Error(`producto con id ${id} no encontrado`)
        }
    }

    async updateProduct(id) {
        let data = await getData(this.file)
        const itemInArray = getItemInArray(data, id)
        if (itemInArray) {
            if (body.name) itemInArray['name'] = body.name
            if (body.price) itemInArray['price'] = body.price
            if (body.thumbnail) itemInArray['thumbnail'] = body.thumbnail
            const newData = data.filter((item) => item.id !== id)
            await setData(this.file, [...newData, itemInArray])
            return itemInArray
        } else {
            throw new Error(`producto con id ${id} no encontrado`)
        }
    }

    async deleteAll() {
        await setData(this.file, [])
    }
}

export default Products