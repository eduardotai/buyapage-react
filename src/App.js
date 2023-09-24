import './App.css';
import React from 'react';
import Header from './Components/Header'
import { ProductDataComponent } from './Components/ProductData';


function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <ProductDataComponent />
   </div>
    </div>
  );
}

export default App;
