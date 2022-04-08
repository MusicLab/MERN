import './App.css';
import Form from "./components/Form/Form"
import ProductList from "./components/ProductList/ProductList"
import React, { useEffect, useState } from 'react';

function App() {
  
  
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
