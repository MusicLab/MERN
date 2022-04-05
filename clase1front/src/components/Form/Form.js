import React, {useState} from 'react'

const Form = () => {
    const [nombreProducto, setNombreProducto] = useState("")
    const [precioProducto, setPrecioProducto] = useState("")
    const cambiarNombreProducto = (e) => {
        const value = e.target.value
        console.log(value)
        setNombreProducto(value)
    }
    const cambiarPrecioProducto = (e) => {
        const value = e.target.value
        console.log(value)
        setPrecioProducto(value)
    }
    const guardarProducto = (event) => {
        event.preventDefault()
        console.log("estos son los dos estados:", nombreProducto, precioProducto)
        setNombreProducto("")
        setPrecioProducto("")
    }

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