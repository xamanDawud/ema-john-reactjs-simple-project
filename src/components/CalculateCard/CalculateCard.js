import React from "react";
import { Link } from "react-router-dom";
import {
  BeakerIcon,
  TrashIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const CalculateCard = ({ itemTotal, clearCart }) => {
  let itemPrice = 0;
  let shipingCharge = 0;
  let tax = 0;
  let grandTotal = 0;
  let quantity = 0;
  for (const item of itemTotal) {
    quantity = quantity + item.quantity;
    itemPrice = itemPrice + item.price;
    shipingCharge = shipingCharge + item.shipping * item.quantity;
    tax = tax + (item.price * 10) / 100;
    grandTotal = itemPrice + shipingCharge + parseInt(tax);
  }
  return (
    <div className="px-4">
      <h1 className="text-2xl text-center">Order Summery</h1>
      <p className="mb-3 mt-12">
        Selected items: <span>{quantity}</span>
      </p>
      <p className="mb-3">
        Total price: $<span>{itemPrice}</span>
      </p>
      <p className="mb-3">
        Total Shipping Charge: $<span>{shipingCharge}</span>
      </p>
      <p className="mb-3">
        Tax: $<span>{tax.toFixed(2)}</span>
      </p>
      <p className="mb-3 text-1xl font-semibold">
        Grand Total: $<span>{grandTotal.toFixed(2)}</span>
      </p>
      <button
        onClick={clearCart}
        className="bg-red-600 mt-5 p-3 inline-flex rounded-md w-full justify-center text-white"
      >
        Clear Cart <TrashIcon className="ml-2" width={"20px"} />
      </button>
      <Link to="/order">
        <button className="bg-yellow-400 mt-2 p-3 inline-flex rounded-md w-full justify-center text-white">
          Review Cart <ShoppingCartIcon className="ml-2" width={"20px"} />
        </button>
      </Link>
    </div>
  );
};

export default CalculateCard;
