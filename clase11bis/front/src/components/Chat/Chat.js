import React, { useState } from 'react';
import io from "socket.io-client"



const Chat = () => {
  const [messagesReact, setMessagesReact] = useState("")

  // const socket = io.connect("//localhost:8080")
  // socket.on("connection", () =>{
  //   socket.on("messages", (messages) =>{
  //     setMessagesReact(messages)
  //   })
  // })
  
  
  // const sendMessage = () => {
    
  //   socket.emit("new-message", "hondo")
  // }



  return (
    <div>
      {messagesReact}
      {/* <button action={sendMessage()} >Enviar mensaje</button> */}
    </div>
  )
}

export default Chat