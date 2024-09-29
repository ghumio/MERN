import Swal from "sweetalert2";

export const loadData = (items) => async (dispatch, getState) => {
  try {
    let response = await fetch("https://dummyjson.com/products");
    let result = await response.json();
    dispatch({ type: "LOAD_DATA", payload: result.products });
    localStorage.setItem("items", JSON.stringify(getState().itemStore.items));
  } catch (error) {
    console.log(error);
  }
};

export const add_to_cart = (item) => async (dispatch, getState) => {
  try {
    let cart_items = getState().cartStore.cart_items;
    let itemExists = cart_items.find(
      (cart_item) => cart_item.title == item.title
    );
    if (itemExists) {
      Swal.fire({
        title: "Warning!",
        text: "ITEM already in cart, do you want to add another",
        icon: "question",
        showCancelButton: true,
        cancelButtonText: "NO",
        confirmButtonText: "YES!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let cart_item = { ...item, quantity: itemExists.quantity + 1 };
          await dispatch({ type: "UPDATE_CART", payload: cart_item });
          localStorage.setItem(
            "cart_items",
            JSON.stringify(getState().cartStore.cart_items)
          );
          Swal.fire("Congrats", "Item quantity increased in cart", "success");
        } else {
          Swal.fire("ACTION CANCELLED ");
        }
      });
    } else {
      await dispatch({ type: "ADD_TO_CART", payload: item });
      localStorage.setItem(
        "cart_items",
        JSON.stringify(getState().cartStore.cart_items)
      );
      Swal.fire("Congrats", "Item Added to cart", "success");
    }
  } catch (error) {
    console.log(error);
  }
};
