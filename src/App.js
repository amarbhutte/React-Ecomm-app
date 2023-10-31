import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import './app.css';

const App = () => {
  return (
    <>
   {/* <Home/> */}

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>} />
          {/* <Route path="/about" element={<About/>} /> */}
          {/* <Route path="/contact" element={<Contact/>} /> */}

        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
