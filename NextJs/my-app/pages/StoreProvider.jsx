import React, { useRef } from "react";
import { cartStore } from "../lib/store";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
  const storeRef = useRef();

  if (!storeRef.current) {
    storeRef.current = cartStore();
  }

  return <Provider store={storeRef.current}> {children}</Provider>;
};

export default StoreProvider;
