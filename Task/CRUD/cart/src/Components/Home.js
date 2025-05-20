import React from "react";
import { CartState } from "../Contexts/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Filters />
          </div>
          <div className="col-8">
            <h2>Products</h2>
            <div className=" d-flex flex-wrap">
              {products.map((prod) => {
                return <SingleProduct prod={prod} key={prod.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
