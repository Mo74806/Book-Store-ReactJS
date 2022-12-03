import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducer/booksSlice";
import { cartReducer } from "./reducer/cartSlice";
import { userReducer } from "./reducer/user";
export const store = configureStore({
  reducer: {
    booksList: booksReducer,
    cartList: cartReducer,
    userType: userReducer,
  },
});
