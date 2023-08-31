import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
// import CartContext from '../../../store/cart-context';
// import { useContext } from 'react';

const MealItem = (props) => {
    const dispatch = useDispatch();
    const { price, id, name, thumbnail, description, quantity, enteredAmountNumber } = props;

    // const cartctx = useContext(CartContext);

    // const price = `$${.price.toFixed(2)}`;

    // const addToCartHandler = amount => {
    //     cartctx.addItem({
    //         id: props.id,
    //         name: props.name,
    //         amount: amount,
    //         price: props.price,
    //         thumbnail: props.thumbnail
    //     });
    // }

    const addToCartHandler = (enteredAmountNumber) => {
        dispatch(cartActions.updateEnteredAmount(enteredAmountNumber));

        dispatch(cartActions.addItemToCart({
            id,
            name,
            description,
            thumbnail,
            price,
            enteredAmountNumber,
        }));
        console.log(name);
        console.log(enteredAmountNumber);
        
    }

    return (
        <li className={classes.meal}>
            <div>
                <img src={props.thumbnail} alt="food" width='150px' height='auto'/>
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}>{price.toFixed(2)}</div>
                </div>
            </div>    
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;