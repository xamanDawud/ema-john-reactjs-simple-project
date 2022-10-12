import React from "react";
import "./ReviewItem.css";
import { TrashIcon } from "@heroicons/react/24/solid";

const ReviewItem = ({ product, handelRemoveItem }) => {
  let { id, name, price, quantity, img, shipping } = product;
  return (
    <div className="reviewItemWrapper relative">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="reviewBoxWrapper">
        <span>
          <h1>{name}</h1>
          <p>
            price: <span className="text-yellow-600">${price}</span>
          </p>
          <p>Qunatity: ${quantity}</p>
          <p>Shipping Charge: ${shipping}</p>
        </span>
        <span>
          <button
            onClick={() => {
              handelRemoveItem(id);
            }}
          >
            <TrashIcon
              className="absolute right-6  top-1/4 bg-red-200 cursor-pointer hover:bg-red-500 rounded-[4.25rem] p-2 "
              width={"40px"}
            />
          </button>
        </span>
      </div>
    </div>
  );
};

export default ReviewItem;
