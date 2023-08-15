import React from 'react'
// 🍀router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 🦄10 recoil
// 👉./component/ProductCard
// 👉./recoil/CartAtom
import { RecoilRoot } from 'recoil';

import Navbar from './component/Navbar';
import Main from './pages/Main';
import Cart from './pages/Cart';


const App = () => {
  return (
    <div>
        <RecoilRoot>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>        
        </RecoilRoot>
    </div>
  )
}

export default App