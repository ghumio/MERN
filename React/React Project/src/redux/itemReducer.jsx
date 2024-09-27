const initialData = {
  items: [],
};
export const itemReducer = (state = initialData, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return { items: action.payload };
    default:
      return state;
  }
};
