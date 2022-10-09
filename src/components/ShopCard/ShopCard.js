import React from "react";
import "./ShopCard.css";
import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const ShopCard = () => {
  let [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="single-card-wrapper p-8 mt-12">
      {items.map((item) => (
        <SingleCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShopCard;
