import { createSlice } from "@reduxjs/toolkit";
import { toast, Slide } from "react-toastify";

const initialState = {
  cartDetails: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const newItemId = action.payload.id;
      const existingItem = state.cartDetails.find(
        (item) => item.id === newItemId
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        let tempProductItem = { ...action.payload, quantity: 1 };
        state.cartDetails.push(tempProductItem);
      }

      toast.success(`${action.payload.rname} added to cart`, {
        position: "top-center",
        transition: Slide,
      });
    },

    del: (state, action) => {
      toast.success(`Item removed from cart`, {
        position: "top-center",
      });
      state.cartDetails = state.cartDetails.filter(
        (item) => item.id !== action.payload
      );
    },

    remove: (state, action) => {
      toast.success(`Item removed from cart`, {
        position: "top-center",
        transition: Slide,
      });
      state.cartDetails = state.cartDetails
        .map((item) => {
          if (item.id === action.payload) {
            item.quantity--;
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
  },
});

export const { add, remove, del } = cartSlice.actions;
export default cartSlice.reducer;
