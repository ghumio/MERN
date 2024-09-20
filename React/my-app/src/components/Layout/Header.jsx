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
        <div className="col-span-1 flex justify-evenly py-1 text-2xl">
          <Link to="/login">
            <i className="bi bi-box-arrow-in-left"></i>
          </Link>
          <Link to="/register">
            <i className="bi bi-person-plus"></i>
          </Link>
          <Link to="/cart">
            <i className="bi bi-cart"></i>
          </Link>
        </div>
      </div>
      <div className="bg-slate-400 flex justify-evenly text-white">
        <Link to="/">
          Home <i className="bi bi-house"></i>
        </Link>
        <Link to="/products">
          Products <i className="bi bi-grid"></i>
        </Link>
        <Link to="/Services">
          Services <i className="bi bi-gear"></i>
        </Link>
        <Link to="/Blogs">
          Blogs <i className="bi bi-copy"></i>
        </Link>
        <Link to="/Contact">
          Contact <i className="bi bi-person"></i>
        </Link>
      </div>
    </>
  );
};

export default Header;
