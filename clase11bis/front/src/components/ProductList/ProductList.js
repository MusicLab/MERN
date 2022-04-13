import React, { useEffect, useContext, useState } from 'react';
import {DataContext} from "../../Context/Context"
import "./ProductList.css"
import { socket } from '../services/sockets';

const ProductList = () => {
  
  
  console.log(socket)
  

  const {products, setProducts} = useContext(DataContext)
  const [responseData, setResponseData] = useState([]);

  socket.on("products", () =>{
    getData()
    console.log("products have been arrive from server")
  })

  // useEffect(()=>{
  //   const socket = io("//localhost:8080")
  //   socket.on("connection", "buenas")
  //   socket.on("products", ()=>{
  //     const getData = async () => {
  //       const response = await fetch(`http://localhost:8080/api/productos`, {
  //         method: 'GET',
  //         mode: 'cors',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //           'Access-Control-Allow-Origin': '*',
  //           'Access-Control-Allow-Credentials': 'true'
  //         }
  //       })
  //     const data = await response.json()
  //     getData()
  //     setProducts(data)
  //     console.log("productos", data)
  //     console.log("products", products)
  //     }      
  //   })
    

  // }, [products])

  const getData = async () => {
    const response = await fetch(`http://localhost:8080/api/productos`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    })
    const data = await response.json()
    
    setResponseData(data)
    console.log(responseData)
    
  }

  useEffect(()=>{
    
    socket.on("products", () =>{
      getData()
      console.log("products have been arrive from server")
    })
    return () => {socket.off()}
  }, [])
  

  return (
    <div >
      {responseData.length > 0 && responseData.map(product =>{
        return(
        <div className="ProducList-div">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <img className="Img-Source" src={product.thumbnail} alt={product.name}></img>
            
        </div>)
      })}
    </div>
  )
}

export default ProductList