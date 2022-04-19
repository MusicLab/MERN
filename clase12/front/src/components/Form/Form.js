import React, { useContext } from "react";
import { DataContext } from "../../Context/Context";
import { socket } from "../services/sockets";

const Form = () => {
  const {
    nombreProducto,
    setNombreProducto,
    precioProducto,
    setPrecioProducto,
    fotoProducto,
    setFotoProducto
  } = useContext(DataContext);
  const cambiarNombreProducto = e => {
    const value = e.target.value;
    setNombreProducto(value);
  };
  const cambiarPrecioProducto = e => {
    const value = e.target.value;
    setPrecioProducto(value);
  };
  const cambiarFotoProducto = e => {
    const value = e.target.value;
    setFotoProducto(value);
  };

  const guardarProducto = event => {
    event.preventDefault();
    const data = {
      title: nombreProducto,
      price: precioProducto,
      thumbnail: fotoProducto
    };
    socket.emit("new-product", data);
    setNombreProducto("");
    setPrecioProducto("");
    setFotoProducto("");
  };
  // const guardarProducto = async event => {
  //   event.preventDefault();
  //   const response = await fetch(`http://localhost:8080/api/guardar`, {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Credentials": "true"
  //     },
  //     body: JSON.stringify({
  //       title: nombreProducto,
  //       price: precioProducto,
  //       thumbnail: fotoProducto
  //     })
  //   });
  //   setNombreProducto("");
  //   setPrecioProducto("");
  //   setFotoProducto("");
  //   socket.emit("new-product");
  // };

  return (
    <div className="Form-Div">
      <form onSubmit={guardarProducto}>
        <input
          id="Nombre"
          placeholder="Producto"
          type="text"
          name="nombre"
          value={nombreProducto}
          onChange={cambiarNombreProducto}
        />
        <input
          id="Precio"
          placeholder="Precio"
          type="number"
          name="precio"
          value={precioProducto}
          onChange={cambiarPrecioProducto}
        />
        <input
          id="Foto"
          placeholder="Foto"
          type="text"
          name="foto"
          value={fotoProducto}
          onChange={cambiarFotoProducto}
        />
        <button type="Submit">Guardar</button>
      </form>
    </div>
  );
};

export default Form;
