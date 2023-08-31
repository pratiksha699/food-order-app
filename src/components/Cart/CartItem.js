import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  // const price = `$${props.price.toFixed(2)}`;
  const dispatch = useDispatch();

  const { id, name, amount, price } = props.item;
  
  console.log("quanity is " + amount);

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  }

  const AddToCartHandler = (props) => {
    console.log("clicked addtocart");
    dispatch(cartActions.addItemByOne({
      id,
      name,
      price,
    }));
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price.toFixed(2)}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeFromCartHandler}>−</button>
        <button onClick={AddToCartHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
