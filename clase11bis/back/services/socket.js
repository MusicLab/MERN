import * as socketIo from 'socket.io'
import * as http from 'http'

export const initWsServer = (server) => {
    const io = new socketIo.Server()
    io.attach(server)

    io.on("connection", (socket)=>{
        console.log(socket.id)
        socket.emit("products", ()=>{
          console.log("deploy products on connection")
        })
        socket.emit("messages", messages)
        socket.on("product-added", ()=> {
          console.log("message from client has been arrived")
          let log = console.log("llega")
          io.emit("products", log)
      })
    })
    }