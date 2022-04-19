import React, { useEffect, useState } from "react";
import "./Chat.css";
import { socket } from "../services/sockets";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({
    email: "",
    text: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit("new-message", form);
    console.log(form);
  };
  useEffect(() => {
    socket.emit("askMessages");
    socket.on("updateChat", data => {
      setMessages(data);
    });
  }, []);

  return (
    <div>
      <div className="chat-window">
        {messages.length > 0 &&
          messages.map(msg => {
            return (
              <div key={msg.date}>
                {msg.email}: {msg.text} {msg.date}
              </div>
            );
          })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="mail"
          placeholder={"Mail"}
          onChange={e =>
            setForm(prevState => ({ ...prevState, email: e.target.value }))
          }
        ></input>
        <input
          name="message"
          placeholder={"Mensaje"}
          onChange={e =>
            setForm(prevState => ({ ...prevState, text: e.target.value }))
          }
        ></input>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
