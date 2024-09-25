import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxCounter = () => {
  // let countStore = useSelector(store=>store)
  // let count = counterStore.count

  // let {count} = useSelector(store=>store)

  let count = useSelector((store) => store.counterStore.count);

  let dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "40px",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      ReduxCounter:{count}
      <Button
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      >
        Increase Count
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: "DECREASE" });
        }}
      >
        Decrease Count
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </Button>
    </div>
  );
};

export default ReduxCounter;
