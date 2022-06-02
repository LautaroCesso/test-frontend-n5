import { createSlice, current } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  reducers: {
    editAmount: (state, { payload }) => {
      const { id, selectedAmount } = payload;
      const products = current(state.list);
      const unselectedProducts = products.filter(
        (product) => product.id !== id
      );
      let selectedProduct = products.find((product) => product.id === id);

      selectedProduct = {
        ...selectedProduct,
        amount: selectedProduct.amount - selectedAmount,
      };

      let editedProductList = [...unselectedProducts, selectedProduct].sort(
        (productA, productB) => {
          return productA.id - productB.id;
        }
      );

      state.list = editedProductList;
    },
    setProducts: (state, { payload }) => {
      state.list = payload.productsFromApi;
    },
  },
});

export const { editAmount, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
