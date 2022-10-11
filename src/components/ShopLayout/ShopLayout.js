import React from "react";
import { useState } from "react";
import CalculateCard from "../CalculateCard/CalculateCard";
import ShopCard from "../ShopCard/ShopCard";
import "./ShopLayout.css";

const ShopLayout = () => {
  return (
    <div>
      <div>
        <ShopCard />
      </div>
    </div>
  );
};

export default ShopLayout;
