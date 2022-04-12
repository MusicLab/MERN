import './App.css';

import Form from "./Components/Form/Form"
import ProductList from "./Components/ProductList/ProductList"
import Chat from "./Components/Chat/Chat"

import React from 'react';
import {DataProvider} from "./Context/Context"






function App() {
  
  
  
  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">
          <Form></Form>
          <ProductList></ProductList>
          <Chat></Chat>
        </header>
      </div>
    </DataProvider>
  );
}

export default App;