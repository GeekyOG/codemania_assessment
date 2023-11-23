"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useGetAllCategoriesQuery } from "../../GlobalRedux/features/data/apiSlice";
import Drawer from "@mui/material/Drawer";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "../../GlobalRedux/features/data/apiSlice";

import "./sidebar.css";
import {
  saveData,
  updateLoading,
  updateNavigations,
  updatediff,
} from "../../GlobalRedux/features/data/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Sidebar() {
  const [open, setOpen] = useState(false);
  let category = "";
  const navigations = useSelector((state) => state.productData.navigations);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.productData.loading);

  const { data, isError, isLoading } = useGetAllCategoriesQuery();

  useEffect(() => {
    if (!isLoading) {
      dispatch(updateNavigations(data));
    }
  }, [isLoading]);

  const handleCategoryClick = () => {
    dispatch(updateLoading(true)), dispatch(updatediff(!loading));
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        dispatch(updateLoading(false)), dispatch(updatediff(!loading));
        setOpen(false);
        dispatch(saveData(data.products));
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <ApiProvider api={productsApi}>
      <div>
        <HiOutlineMenuAlt1 onClick={() => setOpen(!open)} className="icon" />
      </div>

      <Drawer anchor="left" open={open} onClose={() => setOpen(!open)}>
        <div className="sidebar-items px-[10px] pt-[60px]  w-[200px]">
          <h2>
            <i onClick={handleCategoryClick}> Categories</i>
          </h2>
          <ul>
            {isLoading ? (
              "LOADING..."
            ) : isError ? (
              <p className="err">Something went wrong!</p>
            ) : (
              navigations.map((item) => (
                <li className="sidebar-list-item">
                  <h3
                    onClick={() => {
                      category = item;
                      handleCategoryClick();
                    }}
                  >
                    {item}
                  </h3>
                </li>
              ))
            )}
          </ul>
        </div>
      </Drawer>
    </ApiProvider>
  );
}

export default Sidebar;
