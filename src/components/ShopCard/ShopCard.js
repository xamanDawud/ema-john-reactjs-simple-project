import React from "react";
import "./ShopCard.css";
import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import CalculateCard from "../CalculateCard/CalculateCard";
import {
  addToDb,
  deleteShoppingCart,
  getStroedCard,
} from "../../utilities/fakedb";

const ShopCard = () => {
  let [itemTotal, setItemTotal] = useState([]);

  let clearCart = () => {
    setItemTotal([]);
    deleteShoppingCart();
  };

  let clickToAddHandler = (item) => {
    let newCart = [];
    let exists = itemTotal.find((product) => product.id === item.id);
    if (!exists) {
      item.quantity = 1;
      newCart = [...itemTotal, item];
    } else {
      const rest = itemTotal.filter((product) => product.id !== item.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setItemTotal(newCart);
    addToDb(item.id);
  };

  let [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    const storedCard = getStroedCard();
    let saveCart = [];
    for (const id in storedCard) {
      let addedProducts = items.find((item) => item.id === id);
      if (addedProducts) {
        let quantity = storedCard[id];
        addedProducts.quantity = quantity;
        saveCart.push(addedProducts);
      }
    }
    setItemTotal(saveCart);
  }, [items]);

  return (
    <div className="layout-wrapper">
      <div className="single-card-wrapper p-8 mt-12 ">
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
          <CalculateCard clearCart={clearCart} itemTotal={itemTotal} />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
