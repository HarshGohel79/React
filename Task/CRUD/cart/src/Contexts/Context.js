import { faker } from "@faker-js/faker";
import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";

const cart = createContext();
faker.seed(99); // every time the data is changed in faker, so because of this the data will be static and won't be changed every time on load

const Context = ({ children }) => {
  const products = [...Array(50)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 7, 9]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  //   console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <>
      <cart.Provider value={{ state, dispatch }}>{children}</cart.Provider>
    </>
  );
};

export default Context;

export const CartState = () => {
  return useContext(cart);
};
