import * as socketIo from 'socket.io'
import Products from "../Products.js"

const products = new Products()

export const initWsServer = (server) => {
    const io = new socketIo.Server()
    io.attach(server, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
      }
    })

    products.addProduct("manzana",12, "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Watermelon-256.png")
    const messages = ["hola", "desde", "back"]
    console.log(products.getProducts())
    
    io.on("connection", (socket)=>{
      console.log(socket.id)
      const data = products.getProducts()
      socket.emit("products", data)
      socket.on("askProducts", (data)=>{
        console.log("llega info de react")
        data = products.getProducts()
        socket.emit("products", data)
        })
          
    })
    }