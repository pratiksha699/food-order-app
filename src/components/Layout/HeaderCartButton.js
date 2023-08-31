import { useContext, useEffect, useState } from "react";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
// import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const dispatch = useDispatch();
  
  // const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  
  setTimeout(() => {console.log(cartQuantity);}, 5000);

  // const { items } = cartCtx

  // const numberOfItems = items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  useEffect(() => {
    if (cartQuantity === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
     };
  }, [cartQuantity]);

  const showCartHandler = () => {
    console.log("clicked");
    dispatch(uiActions.toggle());
  }
 

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  return (
    <button className={btnClasses} onClick={showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
          <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
