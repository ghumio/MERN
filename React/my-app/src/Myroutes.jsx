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
import Counter from "./Hooks/Counter";
import Display from "./Hooks/Display";
import ReduxCounter from "./Redux/ReduxCounter";
import Games from "./Redux/Games";
import DataFetch from "./Hooks/DataFetch";
import PostDetails from "./Hooks/PostDetails";
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
          <Route path="/count" element={<Counter />} />
          <Route path="/display" element={<Display />} />
          <Route path="/counter" element={<ReduxCounter />} />
          <Route path="/games" element={<Games />} />
          <Route path="/datafetch" element={<DataFetch />} />
          <Route path="/data/:id" element={<PostDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Myroutes;
