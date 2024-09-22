// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import First from "./First";
import { Second } from "./Second";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
const Myroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/second/:username" element={<Second />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Myroutes;
