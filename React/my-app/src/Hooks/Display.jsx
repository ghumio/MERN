// import React from 'react'

import { useContext } from "react";
import PersonCard from "./PersonCard";
import { MyContext } from "./MyContext";
import { ThemeContext } from "../App";

const Display = () => {
  let msg = useContext(MyContext);
  let theme = useContext(ThemeContext);
  //   let dark = { color: "white", backgroundColor: "black" };
  //   let light = { color: "black", backgroundColor: "white" };

  return (
    <div className={theme}>
      <button className={`${theme}-btn`}>Click Me</button>
      {msg}
      <PersonCard name="RAM" address="Kathmandu" phone="9844549482" />
      <PersonCard name="RAM" address="Kathmandu" phone="9844549482" />
      <PersonCard name="RAM" address="Kathmandu" phone="9844549482" />
      <PersonCard name="RAM" address="Kathmandu" phone="9844549482" />
      <PersonCard name="RAM" address="Kathmandu" phone="9844549482" />
    </div>
  );
};

export default Display;
