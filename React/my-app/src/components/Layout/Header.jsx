// import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">First Page</Link>
      <Link to="/second/abc">Second Page</Link>
    </div>
  );
};

export default Header;
