import React, {useContext, useEffect} from 'react'
import {DataContext} from "../../Context/Context"
import io from "socket.io-client"




const Form = () => {
  const {products, setProducts, nombreProducto, setNombreProducto, precioProducto, setPrecioProducto, fotoProducto, setFotoProducto} = useContext(DataContext)
  const cambiarNombreProducto = (e) => {
      const value = e.target.value
      setNombreProducto(value)
  }
  const cambiarPrecioProducto = (e) => {
      const value = e.target.value
      setPrecioProducto(value)
  }
  const cambiarFotoProducto = (e) => {
    const value = e.target.value
    setFotoProducto(value)
}

  const guardarProducto = async (event) => {
      event.preventDefault()
      const response = await fetch(`http://localhost:8080/api/productos`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify({name: nombreProducto, price: precioProducto, thumbnail:fotoProducto}),
      })
      const data = await response.json()
      console.log(data)
      setNombreProducto("")
      setPrecioProducto("")
      setFotoProducto("")
      setProducts(products + 1)
      console.log(products)
      
      
    }

  
  useEffect(()=>{
    const socket = io("//localhost:8080")
    socket.on("product-added", "mensaje")
    socket.emit("product-added", () =>{
      console.log("product added")     
    })
  }, [])



  return (
    <div className= "Form-Div">
        <form onSubmit={guardarProducto}>
            <input id= "Nombre" placeholder="Producto" type="text" name="nombre" value={nombreProducto} onChange={cambiarNombreProducto}/>
            <input id= "Precio" placeholder="Precio" type="number" name="precio" value={precioProducto} onChange={cambiarPrecioProducto}/>
            <input id= "Foto" placeholder="Foto" type="text" name="foto" value={fotoProducto} onChange={cambiarFotoProducto}/>
            <button type="Submit">Guardar</button>
        </form>        
    </div>
  )
}

export default Form