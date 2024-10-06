import { createSlice } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";

const initialState = {
  items: [],
  cart_items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    LOAD_ITEMS: (state, action) => {
      return {
        items: action.payload,
      };
    },

    ADD_TO_CART: (state, action) => {
      return {
        cart_items: [...state.cart_items, action.payload],
      };
    },
  },
  // middleware: thunk,
});

export const { ADD_TO_CART, LOAD_ITEMS } = cartSlice.actions;
export default cartSlice.reducer;
