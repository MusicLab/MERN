const express = require("express")
const {contenedor, Contenedor} = require("./controllers/controllers")




const app = express()

const port = 8080

const server = app.listen(port, ()=>{
    console.log(`Server listening on port ${server.address().port}`)
})


server.on ("error", error => {
    console.log(`error de servidor : ${error}`)
})

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get("/productos", async (req, res) => {
    const response = await contenedor.getAll()
    res.json(response)
})


function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

app.get("/productoRandom", async (req, res) => {
    const response = await contenedor.getAll()
    res.json(response[numeroAleatorio(0,response.length - 1)])
})


