import React from "react";
import { BsCartPlus } from "react-icons/bs/";
import { MdBookmarkAdd } from "react-icons/md/";
import "./style.css";

function Product({ img, title, price }) {
  return (
    <div className="product-wrapper">
      <div className="product-top">
        <img src={img} />
        <div className="product-icons-wrapper">
          <BsCartPlus className="icon" />
          <MdBookmarkAdd className="icon" />
        </div>
      </div>
      <div className="product-bottom">
        <h5>{title}</h5>
        <h4>#{price}</h4>
      </div>
    </div>
  );
}

export default Product;
