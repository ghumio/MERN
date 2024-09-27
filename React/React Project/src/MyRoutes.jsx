import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProductCard from "./components/ProductCard";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path="/products" element={<ProductCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
