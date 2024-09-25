// import { useState } from "react";
import "./App.css";

// import First from "./First";
// import Fourth from "./Fourth";
// import { Second } from "./Second";
import Myroutes from "./Myroutes";
import "./myStyle.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MyContextProvider } from "./Hooks/MyContext";
import { createContext, useState } from "react";
import { combineReducers, createStore } from "redux";
import { counterReducer } from "./Redux/CounterReducer";
import { Provider } from "react-redux";
import { gameReducer } from "./Redux/gameReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";

export const ThemeContext = createContext();

function App() {
  let [theme, setTheme] = useState("light");

  // let store = createStore(counterReducer);
  // let store = createStore(gameReducer);

  let rootReducer = combineReducers({
    counterStore: counterReducer,
    gameStore: gameReducer,
  });

  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  // let store = createStore(rootReducer);
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContext.Provider value={theme}>
            <MyContextProvider>
              <Myroutes />
              <button
                style={{
                  position: "fixed",
                  top: "7%",
                  right: "10%",
                  border: "2px solid gray",
                }}
                onClick={() => {
                  if (theme == "light") {
                    setTheme("dark");
                  } else {
                    setTheme("light");
                  }
                }}
              >
                {theme}
              </button>
            </MyContextProvider>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
