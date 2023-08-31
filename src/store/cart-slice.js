import { createSlice } from '@reduxjs/toolkit';

// const calculateTotalQuantity = (items) => {
//     return items.reduce((total, item) => total + item.quantity, 0);
// };
  
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // [{id, quantity}]
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    totalPrice: newItem.price * newItem.enteredAmountNumber,
                    quantity: newItem.enteredAmountNumber,
                }); 
            } else {
                existingItem.quantity += newItem.enteredAmountNumber;
                existingItem.totalPrice += newItem.price * newItem.enteredAmountNumber;
            }
            state.totalQuantity += newItem.enteredAmountNumber;
            // state.totalQuantity = calculateTotalQuantity(state.items);
            state.totalPrice += newItem.price * newItem.enteredAmountNumber;
        },

        addItemByOne(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            
            existingItem.quantity++;
            state.totalQuantity++;
            state.totalPrice += newItem.price;
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
        
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id );
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            state.totalQuantity--;
            state.totalPrice -= existingItem.price;
        },
        updateEnteredAmount(state, action) {
            state.enteredAmountNumber = action.payload;
        },
    },
    
});



export const cartActions = cartSlice.actions;

export default cartSlice;