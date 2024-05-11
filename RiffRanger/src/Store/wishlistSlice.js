import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addTowishlist(state, action) {
      state.items.push(action.payload);
    },
    removeFromwishlist(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearwishlist(state) {
      state.items = [];
    },
  },
});

export const { addTowishlist, removeFromwishlst, clearwishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
