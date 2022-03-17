const fs = require("fs")
const { text } = require("stream/consumers")


class Product {
    constructor(title, price, number, id) {
        this.title = title
        this.price = price
        this.number = number
        this.id = id
    }
}

const setData = async (file, content) => {
    try {
        await fs.promises.writeFile(file, JSON.stringify(content, null, "\t"));
    } catch (error) {
        throw new Error("Ocurrió un error")
    }
};

const getData = async (file) => {
    try {
        const readedFile = await fs.promises.readFile(file, "utf-8");
        return console.log(JSON.parse(readedFile))
        
    } catch (error) {
        console.log("error--", error)
    }
};






class Contenedor {
    constructor(file) {
        this.file = file
    }


    

leer() {
    const readed = fs.promises.readFile(this.file, "utf-8")
    .then(readed => {
        let dividido = readed.split(',')
        console.log(dividido.length)
    })
    
    return console.log("se dividio")
    }
    
async save(Object) {

}    

}


const texto = new Contenedor("./productos.txt")


// texto.leer()



const saludo = {
    saludo: "Aloha"
} 

setData("./productos.txt", saludo)

getData("./productos.txt")

