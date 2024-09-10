// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./First";
import { Second } from "./Second";
import Layout from "./components/Layout/Layout";

const Myroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<First />}></Route>
          <Route path="/second/:username" element={<Second />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Myroutes;
