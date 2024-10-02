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

export const update_cart1 = (item) => async (dispatch, getState) => {
  await dispatch({ type: "UPDATE_CART", payload: item });
  localStorage.setItem(
    "cart_items",
    JSON.stringify(getState().cartStore.cart_items)
  );

  Swal.fire("Congrats", "Item quantity decreased in cart", "success");
};

export const update_cart = (item) => async (dispatch, getState) => {
  await dispatch({ type: "UPDATE_CART", payload: item });
  localStorage.setItem(
    "cart_items",
    JSON.stringify(getState().cartStore.cart_items)
  );

  Swal.fire("Congrats", "Item quantity increased in cart", "success");
};

export const remove_from_cart = (id) => async (dispatch, getState) => {
  Swal.fire({
    title: "Warning!",
    text: "Are you sure you want to remove this item from cart?",
    icon: "question",
    showCancelButton: true,
    cancelButtonText: "NO",
    confirmButtonText: "YES!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await dispatch({ type: "REMOVE_FROM_CART", payload: id });
      localStorage.setItem(
        "cart_items",
        JSON.stringify(getState().cartStore.cart_items)
      );
      Swal.fire("Congrats", "Item removed from cart", "success");
    } else {
      Swal.fire("action cancelled");
    }
  });
};

export const isLoggedIn = () => {
  return localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : false;
};
