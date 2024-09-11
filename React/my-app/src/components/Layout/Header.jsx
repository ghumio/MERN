// import React from "react";

import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="grid md:grid-cols-5 bg-slate-700 text-white">
        <div className="col-span-1 text-center text-2xl font-bold hover:text-yellow-500 hover:underline">
          Brand Name
        </div>
        <div className="md:col-span-3">Search Bar</div>
        <div className="col-span-1 flex justify-evenly py-1">
          <Link to="/login">LOGIN</Link>
          <Link to="/register">REGISTER</Link>
          <Link to="/cart">CART</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
