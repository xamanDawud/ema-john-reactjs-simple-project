import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStroedCard } from "../../utilities/fakedb";
import CalculateCard from "../CalculateCard/CalculateCard";

const Order = () => {
  let { products, previousCart } = useLoaderData();
  let [cart, setCart] = useState(previousCart);
  console.log(products, previousCart);

  return (
    <div className="layout-wrapper">
      <div className="single-card-wrapper p-8 mt-12 "></div>
      <div>
        <div className="calculate-section">
          <CalculateCard itemTotal={cart} />
        </div>
      </div>
    </div>
  );
};

export default Order;
