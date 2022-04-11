import React, { useEffect, useContext, useState } from 'react';
import {DataContext} from "../../Context/Context"
import io from "socket.io-client"

const ProductList = () => {
  
  

  

  const {products, setProducts} = useContext(DataContext)
  const [responseData, setResponseData] = useState([]);

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
    const socket = io("//localhost:8080")
    socket.on("products", () =>{
      getData()
      

      
       
    })
  }, [products])
  

  
  //   const data = await response.json()
  //   getData()
  //   setProducts(data)
  //   console.log("products", products)
  // }
  // const socket = io("//localhost:8080")
  //   socket.on("connection", "buenas")
  //   socket.on("products", ()=>{
            
  //   })



  return (
    <div>
      {responseData.length > 0 && responseData.map(product =>{
        return(
        <li>
          {product.name} {product.price}
        </li>)
      })}
    </div>
  )
}

export default ProductList