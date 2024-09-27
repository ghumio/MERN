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
