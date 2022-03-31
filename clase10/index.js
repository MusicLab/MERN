const express = require("express")
const routerProductos = require("./routes/productos.js")
const path = require("path")

const port = 8080;

const app = express();



const server = app.listen(port, () => {
    console.log('server up en puerto', port)
})

server.on('error', (err) => {
    console.log('ERROR =>', err);
});



app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", routerProductos)

app.use(express.static(__dirname + "/public")); 

app.get("/asd", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})
