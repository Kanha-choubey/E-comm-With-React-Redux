import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authen/authSlice";
import listReducer from "../features/authen/listSlice";
import cartReducer from "../features/authen/cartSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    list: listReducer,
    cart: cartReducer,
  },
});
