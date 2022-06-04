import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const products = JSON.parse(JSON.stringify(current(state.products)));
      const { id, amountToAddToCart } = payload;
      let isOnTheList = false;

      for (let i = 0; i < products.length; i++) {
        const product = products[i];

        if (product.id === id) {
          product.amountToAddToCart += amountToAddToCart;
          isOnTheList = true;
          break;
        }
      }

      if (isOnTheList) {
        state.products = products;
      } else {
        state.products.push(payload);
      }
    },
    clearCartProducts: (state, { payload }) => {
      state.products = [];
    },
  },
});

export const { addToCart, clearCartProducts } = cartSlice.actions;

export default cartSlice.reducer;
