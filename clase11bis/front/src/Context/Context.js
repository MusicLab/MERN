import React, { useState } from 'react';


export const DataContext = React.createContext()


export const DataProvider = ({ children }) => {
    const [nombreProducto, setNombreProducto] = useState("")
    const [precioProducto, setPrecioProducto] = useState("")
    

  return (
    <DataContext.Provider value={{
        nombreProducto,
        setNombreProducto,
        precioProducto,
        setPrecioProducto
        }}>
        { children }
    </DataContext.Provider>
  )
}
