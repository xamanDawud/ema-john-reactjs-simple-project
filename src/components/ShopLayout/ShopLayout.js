import React from "react";
import CalculateCard from "../CalculateCard/CalculateCard";
import ShopCard from "../ShopCard/ShopCard";
import "./ShopLayout.css";

const ShopLayout = () => {
  return (
    <div className="layout-wrapper">
      <div>
        <ShopCard />
      </div>
      <div className="calculate-section">
        <CalculateCard />
      </div>
    </div>
  );
};

export default ShopLayout;
