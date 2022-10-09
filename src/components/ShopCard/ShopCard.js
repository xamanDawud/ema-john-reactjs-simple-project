import React from "react";
import "./ShopCard.css";
import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import CalculateCard from "../CalculateCard/CalculateCard";

const ShopCard = () => {
  let [itemTotal, setItemTotal] = useState([]);
  let clickToAddHandler = (item) => {
    let newItemTotal = [...itemTotal, item];
    setItemTotal(newItemTotal);
    console.log(setItemTotal);
  };
  let [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="layout-wrapper">
      <div className="single-card-wrapper p-8 mt-12">
        {items.map((item) => (
          <SingleCard
            key={item.id}
            item={item}
            itemHandler={clickToAddHandler}
          />
        ))}
      </div>
      <div>
        <div className="calculate-section">
          <CalculateCard itemTotal={itemTotal} />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
