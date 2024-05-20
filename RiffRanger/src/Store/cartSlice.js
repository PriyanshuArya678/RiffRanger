

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [{itemId:0,
  quantity:0}],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addToCart(state, action) {
    //   state.items.push(action.payload);
    // },
    addToCart(state,action){
        state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.items = [];
    },
    increaseItemQuantity: (state, action) => {
      const itemId = action.payload.id;
      // console.log(action.payload)
      const item = state.items.find(item => item.id === itemId);
      console.log(item)
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload.id;
      const item = state.items.find(item => item.id == itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
    
    
  },
});

export const { addToCart, removeFromCart, clearCart,increaseItemQuantity,decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
