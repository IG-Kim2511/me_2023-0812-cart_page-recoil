import React from 'react'
// 🍀router
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './component/Navbar';
import Main from './pages/Main';
import Cart from './pages/Cart';


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>        
    </div>
  )
}

export default App