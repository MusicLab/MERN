const fs = require("fs");
const { text } = require("stream/consumers");



class Product {
    constructor(title, price, number, id) {
        this.title = title
        this.price = price
        this.number = number
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

    
async save(Object) {
    const data = await getData(this.file)
    return await writeFile(this.file, data)
    console.log(data)

}    

}

saludo = {saludo2: "Hola"}


const texto = new Contenedor("./productos.txt")

text.save(saludo)

