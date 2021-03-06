const express = require("express")
const routerProductos = require("./routes/productos.js")
const path = require("path")
const cors = require('cors');
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

app.use(cors());


app.use(express.static(__dirname + "/public")); 


