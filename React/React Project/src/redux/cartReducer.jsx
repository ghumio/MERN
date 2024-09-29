const initialData = {
  cart_items: [],
};

export const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart_items: [...state.cart_items, action.payload] };
    case "UPDATE_CART":
      return {
        cart_items: state.cart_items.map((item) => {
          return item.title == action.payload.title ? action.payload : item;
        }),
      };
    default:
      return state;
  }
};
