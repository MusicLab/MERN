import express from 'express';
import path from "path"
import handlebars from "express-handlebars"


import routerProductos from "./routes/productos.js"

const port = 8080;

const app = express();

const publicPath = path.resolve(__dirname, "../public")
app.use(express.static(publicPath))

const layoutFolderPath = path.resolve(__dirname, "../views/layouts")
const defaultLayerPth = path.resolve(__dirname, "../views/layouts/index.handlebars")

app.set("view engine", "handlebars")
app.engine("handlebars", handlebars({
    layoutsDir: layoutFolderPath,
    defaultLayout: defaultLayerPth

}))

const server = app.listen(port, () => {
    console.log('server up en puerto', port)
})

server.on('error', (err) => {
    console.log('ERROR =>', err);
});



app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", routerProductos)




