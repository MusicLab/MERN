import express from "express"
import routerProductos from "./routes/productos.js"
import path from "path"
// resolviendo error de node 14
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import cors from 'cors'
import { Server } from "socket.io";
const port = 8080;
import http from "http"
import { initWsServer } from './services/socket.js';


const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", routerProductos)


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));

// ---------------------------- Socket Io ----------------------------

const server = http.createServer(app)
initWsServer(server);


server.listen(port, ()=> {
    console.log(`servidor iniciado en ${port}`)
})

// const io = new Server(http);(server, {
//     cors: {
//       origin: "http://localhost:3000",
//       credentials: true
//     }
//   });

// let hardcode = ["calavera","no","chilla"]

// let messages = ["la", "noche", "es", "larga"]

// io.on("connection", (socket)=>{
//   console.log(socket.id)
//   socket.emit("products", ()=>{
//     console.log("deploy products on connection")
//   })
//   socket.emit("messages", messages)
//   socket.on("product-added", ()=> {
//     console.log("message from client has been arrived")
//     let log = console.log("llega")
//     io.emit("products", log)
// })

  
  // socket.emit("messages", messages)
  // socket.on("new-message", (message)=> {
  //   console.log(message)
  // })
  
// })
