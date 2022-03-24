const fs = require("fs")


const productos = [
    {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
    id: 1
    },
    {
    title: 'Calculadora',
    price: 234.56,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    id: 2
    },
    {
    title: 'Globo Terráqueo',
    price: 345.67,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
    id: 3
    }
    ] 



class Product {
    constructor(title, price, thumbnail) {
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
    }
}


class Contenedor {
    constructor(file) {
        this.file = file
    }

    

    async escribir(dato) {
        try {
            const contenido = await fs.promises.writeFile(this.file, dato)
            console.log("escrito correctamente")
            
        }
            catch (error) {
                console.log(error)
            }
        }
    async deleteAll() {
        try {
            await fs.promises.writeFile(this.file, "[]")
            console.log("borrado total correctamente")
            }
            catch(error){
                throw new Error(error)
            }
        }
    async getAll() {
        try {
            const contenido = await fs.promises.readFile(this.file, "utf-8")
            if (contenido.length > 2) return await JSON.parse(contenido)
            else return null
            }
            catch(error) {
                throw new Error(error)
            }
        }
        async getById(id) {
            try {
                const contenido = await this.getAll()
                const elemento = contenido.filter( (e) => e.id == id)
                return elemento
                }
                catch(error) {
                    throw new Error(error)
                    }
            }


        async deleteById(id) {
            try {
                const contenido = await this.getAll()
                const elementos = contenido.filter( (e) => e.id !== id)
                await this.escribir(JSON.stringify(elementos))
                }
                catch(error) {
                    throw new Error(error)
                    }
            }

        

    async save(producto) {
        try {
            const contenido = await this.getAll()
            console.log(contenido)
            const newId = contenido[contenido.length - 1].id + 1
            console.log(newId)
            console.log("new ID:", newId)
            producto.id = newId
            contenido.push(producto)
            await this.escribir(JSON.stringify(contenido))
            return console.log(newId)        
        } catch (error) {
            console.log(error)
        }
    }
    }
    


let contenedor = new Contenedor("./productos.txt")






let plays = new Product("Playstation", 200, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FPlayStation_(consola)&psig=AOvVaw33p2lfKT8uS4zq_iw49nF2&ust=1647727566035000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjt2dTV0PYCFQAAAAAdAAAAABAD")




contenedor.escribir(JSON.stringify(productos))

// contenedor.save(plays)


// const main = async  () => {
//     const mostrarEnPantalla = await contenedor.getAll()
//     console.log(mostrarEnPantalla)
//     await contenedor.save(plays)
    
// }

// main()




module.exports = {contenedor, Contenedor}