const initialData = {
  count: 0,
};
export const counterReducer = (state = initialData, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: ++state.count };

    case "DECREASE":
      return {
        count: --state.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};
