import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.cart.push(action.payload)
      state.cart = [...state.cart, action.payload];
      // state.cart.push(action.payload);
      console.log(state.cart);
    },
    removeFromCart: (state, action) => {
      let data = state.cart.filter((item) => {
        console.log(item.title);
        if (item.title != action.payload.title) return item;
      });
      state.cart = data;
    },
    increaseQty: (state, action) => {
      let data = state.cart.map((item) => {
        if (item.title != action.payload.title) return item;
        else {
          item.qty += 1;
          return item;
        }
      });

      state.cart = data;
    },
    DecreaseQty: (state, action) => {
      let data = state.cart.filter((item) => {
        if (item.title != action.payload.title) return item;
        else if (item.title == action.payload.title && item.qty != 1) {
          item.qty -= 1;

          return item;
        }
      });

      state.cart = data;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
