import React from "react";

const Filters = () => {
  const handleFilter = () => {
    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach((radio) => {
      radio.checked = false;
    });
    console.log("All filters removed..!");
  };

  return (
    <>
      <div className="filterProduct ">
        <h2>Filters</h2>
        <form className="w-50">
          <div className="">
            <input type="radio" value="Relevence" name="sortOrder" id="" />
            <span>&nbsp;Relevence</span>
          </div>
          <div className="">
            <input type="radio" value="Ascending" name="sortOrder" id="" />
            <span>&nbsp;Ascending (A-Z)</span>
          </div>
          <div className="">
            <input type="radio" value="Descending" name="sortOrder" id="" />
            <span>&nbsp;Descending (Z-A)</span>
          </div>
          <div className="">
            <input
              type="radio"
              value="Price_low_to_high"
              name="sortPrice"
              id=""
            />
            <span>&nbsp;Price low to high</span>
          </div>
          <div className="">
            <input
              type="radio"
              value="Price_high_to_low"
              name="sortPrice"
              id=""
            />
            <span>&nbsp;Price high to low</span>
          </div>
          <div className="">
            <input
              type="radio"
              value="fast_delivery_only"
              name="speedPost"
              id=""
            />
            <span>&nbsp;Fast Delivery Only</span>
          </div>
          <div className="">
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Clear All"
              name=""
              id=""
              onClick={handleFilter}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Filters;
