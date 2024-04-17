import React from "react";
import "./Product.css";
import ProductCard from "./ProductCard/ProductCard";

const Product = () => {
  return (
    <div className="product">
      <div className="left-product">
        <div className="heading-product">
          <h1>Showing All Products...</h1>
        </div>
        <div className="product-cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="right-product">
        <div className="add-cart">
          <p>Please Add items</p>
          <button>View Cart</button>
        </div>
        <div className="filter-product">
          <h1>Choose By:</h1>
          <div className="filter-options">
            <div className="filter-option">
              <input type="checkbox" id="categoryCheckbox" />
              <label htmlFor="categoryCheckbox">Health Care</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="priceCheckbox" />
              <label htmlFor="priceCheckbox">Fitness</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="brandCheckbox" />
              <label htmlFor="brandCheckbox">Men</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="discountCheckbox" />
              <label htmlFor="discountCheckbox">Women</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="discountCheckbox" />
              <label htmlFor="discountCheckbox">Child</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
