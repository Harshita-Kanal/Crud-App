import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import CartNavigator from "./navigations/CartNavigator";

//reducers
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

//fonts
const fetchFonts = () => {
  return Font.loadAsync({
    "sansita-bold": require("./assets/fonts/SS-Bold.ttf"),
    "sansita-light": require("./assets/fonts/SS-Light.ttf"),
    "sansita-medium": require("./assets/fonts/SS-Medium.ttf"),
  });
};

const store = createStore(rootReducer);

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  //initial fetching of fonts
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  //store provider
  return (
    <Provider store={store}>
      <CartNavigator />
    </Provider>
  );
}
