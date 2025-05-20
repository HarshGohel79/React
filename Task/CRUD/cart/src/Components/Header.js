import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../Contexts/Context";

const Header = () => {

  const {state : {cart}, dispatch} = CartState();
  return (
    <header>
      <div className="container-fluid px-5 bg-dark text-light">
        <div className="row align-items-center py-3 text-center">
          <div className="col-3">
            <Link to="/">
              <h2>Cart</h2>
            </Link>
          </div>
          <div className="col-6">
            <input
              type="search"
              name="searchproduct"
              id="psearch"
              className="w-100 px-3 rounded"
              placeholder="Search product here..."
            />
          </div>
          <div className="col-3">
            <Link to="/cart">
              <i className="fa fa-shopping-cart">
                <sup className="text-dark rounded-circle bg-light">&nbsp;{ cart.length}&nbsp;</sup>
              </i>
              <span>&nbsp;Cart</span>
            </Link>
          </div> 
        </div>
      </div>
    </header>
  );
};

export default Header;
