"use client";

import { createSlice } from "@reduxjs/toolkit";

export const ProductData = createSlice({
  name: "productData",
  initialState: {
    data: [],
    error: null,
    navigations: [],
    loading: false,
    diff: false,
  },
  reducers: {
    saveData: (state, action) => {
      state.data = action.payload;
    },

    updateNavigations: (state, action) => {
      state.navigations = action.payload;
    },

    updateLoading: (state, action) => {
      state.loading = action.payload;
    },

    updatediff: (state, action) => {
      state.diff = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveData, updateNavigations, updateLoading, updatediff } =
  ProductData.actions;

export default ProductData.reducer;
