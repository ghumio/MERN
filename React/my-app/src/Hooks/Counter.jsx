// import React from 'react'

import { useEffect, useState } from "react";

const Counter = () => {
  // useState -
  /*
    let[var_name, function] = useState(initial value)
    var_name : name of state variable
    function : function to update state variable(var_name)

    initial value : starting value
        0-9 : number
        '' or "" or ``: string
        true/false : boolean
        [] : array
         {} : object

    useEffect - to show side effect when a state changes
        useEffect(function,[dependency])
        function-effect to be shown
        [dependency - list of state vaariables that will trigger the function]
        [] - effect is shown at page load 
         [a,b,c] - effect is shown at page load  and when a or b or c updates
         if no dependency array is passed, effect is shown at page load, and when any state variable updates
    */
  let [count, setCount] = useState(0);
  let [data, setData] = useState(100);

  useEffect(() => {
    alert("Value Updated");
  }, [count, data]);
  return (
    <div
      className="flex justify-center item-center text-3xl"
      style={{ height: "100vh" }}
    >
      Counter count:{count}
      Data : {data}
      <br />
      <button
        onClick={() => {
          setCount(++count);
          console.log(count);
        }}
      >
        Increase Count
      </button>
      {count > 0 && (
        <button
          onClick={() => {
            setCount(--count);
            console.log(count);
          }}
        >
          Decrease Count
        </button>
      )}
      <button
        onClick={() => {
          setData(data + 10);
        }}
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          setData(data - 10);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setData(100);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
