const express = require("express")
const routerProductos = require("./routes/productos.js")
const path = require("path")
const cors = require('cors');
const socketio = require("socket.io")
const port = 8080;
const http = require("http")

const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", routerProductos)

app.use(express.static(__dirname + "/public")); 

// ---------------------------- Socket Io ----------------------------

const server = http.createServer(app)
server.listen(port, ()=> {
    console.log(`servidor iniciado en ${port}`)
})

const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
  });

let hardcode = ["calavera","no","chilla"]

let messages = ["la", "noche", "es", "larga"]

io.on("connection", (socket)=>{
  console.log(socket.id)
  socket.emit("products", ()=>{
    console.log("deploy products on connection")
  })
  socket.on("product-added", ()=> {
    socket.emit("products", ()=>{
      console.log("product added")
    })

  })
  
  // socket.emit("messages", messages)
  // socket.on("new-message", (message)=> {
  //   console.log(message)
  // })
  
})
