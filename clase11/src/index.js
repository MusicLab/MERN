import express from 'express';
import path from "path"




import routerProductos from "./routes/productos.js"

const port = 8080;

const app = express();

const publicPath = path.resolve(__dirname, "../public")
app.use(express.static(publicPath))

const viewsPath = path.resolve(__dirname, "../views")

app.set("view engine", "pug")
app.set("views", viewsPath)


const server = app.listen(port, () => {
    console.log('server up en puerto', port)
})

server.on('error', (err) => {
    console.log('ERROR =>', err);
});



app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", routerProductos)






