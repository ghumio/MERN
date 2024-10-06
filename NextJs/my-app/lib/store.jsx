import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";

export const cartStore = () => {
  return configureStore({
    reducer: cartReducer,
  });
};
