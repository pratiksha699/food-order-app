import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { uiActions } from "./store/ui-slice";

function App() {
  // const [cartIsShown, setCartIsShown] = useState(false);

  const dispatch = useDispatch();

  const cartIsShown = useSelector(state => state.ui.cartIsVisible);
  console.log(cartIsShown);

  const hideCartHandler = () => {
    dispatch(uiActions.closeCart());
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
