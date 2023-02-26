import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  products: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fatchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fatchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(fatchProducts, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.products = [];
      });
  },
});
export const fatchProducts = createAsyncThunk("fatch/products", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export default listSlice.reducer;
