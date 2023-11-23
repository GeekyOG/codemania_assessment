"use client";

import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

import productDataReducer from "./features/data/dataSlice";
import { productsApi } from "./features/data/apiSlice";

export  const store = configureStore({
  reducer: {
    productData: productDataReducer,
     [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productsApi.middleware),

});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


   
  
