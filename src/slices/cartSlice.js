import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const products = JSON.parse(
        localStorage.getItem("cart-products") || "[]"
      );
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

      if (!isOnTheList) {
        products.push(payload);
      }

      state.products = products;
      localStorage.setItem("cart-products", JSON.stringify(products));
    },
    clearCartProducts: (state, { payload }) => {
      state.products = [];
      localStorage.setItem("cart-products", JSON.stringify([]));
    },
  },
});

export const { addToCart, clearCartProducts } = cartSlice.actions;

export default cartSlice.reducer;
