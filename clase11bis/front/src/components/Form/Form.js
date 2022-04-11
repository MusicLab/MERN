import React, {useContext, useEffect} from 'react'
import {DataContext} from "../../Context/Context"
import io from "socket.io-client"




const Form = () => {
  const {products, setProducts, nombreProducto, setNombreProducto, precioProducto, setPrecioProducto} = useContext(DataContext)
  const cambiarNombreProducto = (e) => {
      const value = e.target.value
      setNombreProducto(value)
  }
  const cambiarPrecioProducto = (e) => {
      const value = e.target.value
      setPrecioProducto(value)
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
        body: JSON.stringify({name: nombreProducto, price: precioProducto, thumbnail:"https://www.google.com/url?sa=i&url=https%3A%2F%2Flotuspc.com.ar%2Fproduct%2Fsony-playstation-4-1tb-standard%2F&psig=AOvVaw0YCY7RUGW8-i6isgkYuhZm&ust=1649447997731000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNCBluHegvcCFQAAAAAdAAAAABAH"}),
      })
      const data = await response.json()
      console.log(data)
      setNombreProducto("")
      setPrecioProducto("")
      setProducts(products + 1)
      console.log(products)
      
      
    }

  
  useEffect(()=>{
    const socket = io("//localhost:8080")

    socket.emit("product-added", () =>{
      console.log("product added")     
    })
  }, [products])



  return (
    <div className= "Form-Div">
        <form onSubmit={guardarProducto}>
            <input id= "Nombre" placeholder="Producto" type="text" name="nombre" value={nombreProducto} onChange={cambiarNombreProducto}/>
            <input id= "Precio" placeholder="Precio" type="number" name="precio" value={precioProducto} onChange={cambiarPrecioProducto}/>
            <button type="Submit">Guardar</button>
        </form>        
    </div>
  )
}

export default Form