"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    searchAllProducts: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
    getAllCategories: builder.query({
      query: () => "products/categories",
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useSearchAllProductsQuery,
  useGetAllCategoriesQuery,
} = productsApi;
