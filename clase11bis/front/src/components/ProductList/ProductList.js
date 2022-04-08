import React, { useEffect, useState } from 'react';

const ProductList = () => {

  const [products, setProducts] = useState("")


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
    setProducts(data)
    console.log("productos", data)
  }
  
  useEffect(() => {
    getData()
  }, [])



  return (
    <div>ProductList</div>
  )
}

export default ProductList