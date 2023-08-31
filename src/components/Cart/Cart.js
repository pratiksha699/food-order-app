import { useContext } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // const cartCtx = useContext(CartContext);

  // const cartItemRemoveHandler = id => {
  //   cartCtx.removeItem(id);
  //  };

  // const cartItemAddHandler = item => {
  //   cartCtx.addItem({...item, amount: 1});
  //  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={{
            id: item.id,
            name: item.name,
            amount: item.quantity,
            price: item.price,
            totalPrice: item.totalPrice,
          }}
         
          // onRemove={cartItemRemoveHandler.bind(null, item.id)}
          // onAdd ={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const totalAmount = `$${totalPrice.toFixed(2)}`;

  const hasItems = items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
