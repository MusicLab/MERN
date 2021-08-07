export class Products {
    constructor() {
        this.products = []
    }

    getProducts() {
        console.log(this.products)
        return this.products
    }

    getProductById(id) {
        const product = this.products.find(product => product.id == id)
        if (product) {
            return product
        }
    }

    addProduct(name, price, thumbnail) {
        console.log(this.products)
        this.products.push({
            name: name,
            price: price,
            thumbnail: thumbnail,
            id: this.products.length + 1
        })
    }
    
    deleteProduct(id) {
        const product = this.products.find(product => product.id == id)
        if (product) {
            var i = this.products.indexOf( product )
            this.products.splice(i, 1)
        }
    }
}