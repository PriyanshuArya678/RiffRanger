import { configureStore } from '@reduxjs/toolkit'
import commentsSliceReducer from './commentsSlice'
import userStatusSliceReducer from './userStatusSlice'
import EcomItemSlice from './EcomItemSlice'
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';
export const store= configureStore({
    reducer: {
        userStatus:userStatusSliceReducer,
        commentStatus:commentsSliceReducer,
        // userStatus1:EcomItemSliceReducer,
        cart:cartReducer,
        wishlist:wishlistReducer
    }
})