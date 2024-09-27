import React from "react";
import MyRoutes from "./MyRoutes";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { itemReducer } from "./redux/itemReducer";
import { cartReducer } from "./redux/cartReducer";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

const App = () => {
  const rootReducer = combineReducers({
    itemStore: itemReducer,
    cartStore: cartReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <>
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    </>
  );
};

export default App;
