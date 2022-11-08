import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducer/booksSlice";
import { counterReducer } from "./reducer/countSlice";
import { cartReducer } from "./reducer/cartSlice";
import { filterReducer } from "./reducer/filterslice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    booksList: booksReducer,
    cartList: cartReducer,
    filterList: filterReducer,
  },
});
