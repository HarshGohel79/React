import React from "react";
import { CartState } from "../Contexts/Context";
// import { type } from "@testing-library/user-event/dist/type";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="p-1 col-lg-4 col-sm-6 col-12 singleProduct">
      <div className="productImg">
        <img src={prod.image} alt={prod.name} className="w-100" />
      </div>
      <div className="productDetails border p-3">
        <p className="fw-bold">{prod.name}</p>
        <p className="text-secondary">M.R.P. ₹{prod.price}/-</p>
        <p className="text-secondary">Available pieces : {prod.inStock}</p>
        <p className="text-secondary">Ratings : {prod.ratings}.0 out of 5.0</p>
        {/* If product is in cart remove button will show else add to cart button will be visible */}
        {cart.some((product) => product.id === prod.id) ? (
          <button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              });
            }}
            className="btn btn-danger"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              });
            }}
            disabled={prod.inStock === 0}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        )}
        {/* <button disabled={prod.inStock === 0} className="btn btn-primary">
          Add to cart
        </button>
        <button className="btn btn-danger">Remove from cart</button> */}
      </div>
    </div>
  );
};

export default SingleProduct;
