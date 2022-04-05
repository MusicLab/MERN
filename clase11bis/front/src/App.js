import './App.css';
import Form from "./components/Form/Form"
import ProductList from "./components/ProductList/ProductList"
import React, { useEffect, useState } from 'react';

function App() {
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
  }
  
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <Form></Form>
        <ProductList></ProductList>
      </header>
    </div>
  );
}

export default App;
