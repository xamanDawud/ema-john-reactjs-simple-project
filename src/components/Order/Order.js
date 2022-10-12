import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  deleteShoppingCart,
  getStroedCard,
  removeFromDb,
} from "../../utilities/fakedb";
import CalculateCard from "../CalculateCard/CalculateCard";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  let { products, previousCart } = useLoaderData();
  let [cart, setCart] = useState(previousCart);
  // console.log(products, previousCart);

  let handelRemoveItem = (id) => {
    let selectedItem = cart.filter((product) => product.id !== id);
    setCart(selectedItem);
    removeFromDb(id);
  };

  let clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="layout-wrapper">
      <div className="review-card-wrapper p-8 mt-12 ">
        {cart.map((productt) => (
          <ReviewItem
            handelRemoveItem={handelRemoveItem}
            key={productt.id}
            product={productt}
          />
        ))}

        {cart.length === 0 && (
          <h1 className="text-2xl">
            You havn't select any product Please Purchase From{" "}
            <Link to="/">
              <span className="text-blue-500">Here</span>
            </Link>
          </h1>
        )}
      </div>
      <div>
        <div
          style={{ position: "sticky", top: 0 }}
          className="calculate-section order-calculate-cart"
        >
          <CalculateCard clearCart={clearCart} itemTotal={cart} />
        </div>
      </div>
    </div>
  );
};

export default Order;
