"use client";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai/";
import { AiOutlineFire } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { BiLogIn } from "react-icons/bi";
import Sidebar from "../sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";

import "./header.css";
import {
  saveData,
  updateLoading,
  updatediff,
} from "../../GlobalRedux/features/data/dataSlice";
import { useSearchAllProductsQuery } from "../../GlobalRedux/features/data/apiSlice";

function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const diff = useSelector((state) => state.productData.diff);
  const { data: searchData, error: searchError } =
    useSearchAllProductsQuery(search);
  const loading = useSelector((state) => state.productData.loading);

  const handleSubmit = () => {
    dispatch(updateLoading(!loading));
    dispatch(updatediff(!diff));
    if (searchError) {
      console.log(searchError);
    } else {
      dispatch(saveData(searchData.products));
    }
    dispatch(updateLoading(false));
    setSearch("");
  };

  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="header-container">
      <div className=" wrapper ">
        <div className="flex justify-between items-center header-section">
          <div className="md:hidden icon">
            <Sidebar />
          </div>

          <div>
            <h1>
              <i>Codemania</i>
            </h1>
          </div>
          <div className=" items-center header-search-wrapper hidden md:flex justify-between">
            <GoSearch className="icon" />

            <input
              className="header-search-input"
              placeholder="Search"
              value={search}
              onChange={handleChange}
            />

            <button onClick={handleSubmit} className="header-search-button">
              Submit
            </button>
          </div>

          <div className="flex items-center gap-[10px]">
            <div className="flex items-center  login-box">
              <BiLogIn className="icon" />
              <div className=" hidden md:block">Login</div>
              <hr className="break hidden md:block" />
              <div className="hidden md:block">Signup</div>
            </div>
            <div>
              <AiOutlineShoppingCart className="icon" />
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-5 header-section items-center">
          <div className="flex gap-[10px]  items-center ">
            <div className="hidden md:block">
              <Sidebar />
            </div>

            <div className=" items-center header-search-wrapper flex justify-between md:hidden  ">
              <GoSearch className="icon" />
              <input
                placeholder="Search"
                className="header-search-input ml-1"
                value={search}
                onChange={handleChange}
              />
              <button onClick={handleSubmit} className="header-search-button">
                Submit
              </button>
            </div>

            <div className="hidden md:flex items-center ">
              <AiOutlineFire /> Top deals
            </div>
            <div className="hidden md:block">% Offers and Discount</div>
            <div className="hidden md:block">sell</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
