import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Main from './component/Main';
import Cart from './component/Cart';



const App = () => {
  return (
    <div>
    
        <h2>App</h2>

        <Navbar/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </BrowserRouter>

        
    </div>
  )
}

export default App