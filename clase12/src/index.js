import express from 'express';
import path from "path"
import * as http from "http"
import io from "socket.io"

import routerProductos from "./routes/productos.js"

const portExpress = 8080;
const portSocket = 8080

const app = express();
const myServer = http.Server(app)

const publicPath = path.resolve(__dirname, "../public")
app.use(express.static(publicPath))


const viewsPath = path.resolve(__dirname, "../views")    
app.set("view engine", "pug")
app.set("views", viewsPath)
app.get('/', (req, res) => {
    res.render("index.pug", {miDataDinamica})
})


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", routerProductos)



myServer.listen(portSocket, () => console.log("server up en puerto", portSocket))

const myWSServer = io(myServer)

myWSServer.on("connection", (socket) => {
    console.log("un cliente se ha conectado")
    console.log(`Cliente SID => ${socket.client.id}`)
    // socket.on("new message", (data) => {
    //     messages.push(data)
    //     socket.emmit("messages", messages)
    // })
})





