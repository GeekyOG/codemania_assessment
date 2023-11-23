"use client";

import Product from "./components/product/Product";
import LoadingSkeleton from "./components/skeleton/Skeleton";

// REDUX IMPORTS
import {
  useGetAllProductsQuery,
  useSearchAllProductsQuery,
} from "./GlobalRedux/features/data/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./GlobalRedux/features/data/apiSlice";
import { saveData, updateLoading } from "./GlobalRedux/features/data/dataSlice";
// REDUX IMPORTS

import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import "./styles/home.css";

function Home() {
  const arrayEmpty = new Array([], [], [], [], []);

  const productData = useSelector((state) => state.productData.data);
  const diff = useSelector((state) => state.productData.diff);
  const loading = useSelector((state) => state.productData.loading);

  const dispatch = useDispatch();

  // product data
  const {
    data: allproducts,
    error: productsError,
    isError,
    isLoading,
  } = useGetAllProductsQuery();
  // product ata

  // reset pagination when data updates from categories and search
  useEffect(() => {
    setItemOffset(0);
  }, [diff]);

  // Store data to redux store on loading state from redux toolkit query update
  useEffect(() => {
    dispatch(updateLoading(!loading));
    if (!isLoading) {
      if (!isError) {
        dispatch(saveData(allproducts.products));
      }
    }
    dispatch(updateLoading(!loading));
  }, [isLoading]);

  // items list passed in for pangination
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => {
            return (
              <Product
                img={item.thumbnail}
                price={item.price}
                title={item.title}
              />
            );
          })}
      </>
    );
  }

  // pangination

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;

  let currentItems;
  if (!isLoading) {
    currentItems = productData.slice(itemOffset, endOffset);
  }
  let pageCount;
  if (!isLoading) {
    pageCount = Math.ceil(productData.length / itemsPerPage);
  }

  let newOffset;
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    newOffset = (event.selected * itemsPerPage) % productData.length;

    console.log(newOffset, itemOffset);

    setItemOffset(newOffset);
  };

  // pangination
  const { data: singleproduct } = useSearchAllProductsQuery("iphone");

  return (
    <ApiProvider api={productsApi}>
      <div className="wrapper">
        {loading ? (
          <div className="flex gap-5 lg:gap-10 flex-wrap justify-center">
            {arrayEmpty.map((iten) => (
              <LoadingSkeleton />
            ))}
          </div>
        ) : isError ? (
          <p className="err">Something went wrong!</p>
        ) : (
          <>
            <div className="flex gap-5 lg:gap-10 flex-wrap justify-center">
              <Items currentItems={currentItems} />
            </div>

            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </>
        )}
      </div>
    </ApiProvider>
  );
}

export default Home;
