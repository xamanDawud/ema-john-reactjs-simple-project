import React from "react";
import { BeakerIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const CalculateCard = ({ itemTotal }) => {
  return (
    <div className="px-4">
      <h1 className="text-2xl text-center">Order Summery</h1>
      <p className="mb-3 mt-12">
        Selected items: <span>{itemTotal.length}</span>
      </p>
      <p className="mb-3">
        Total price: $<span>1140</span>
      </p>
      <p className="mb-3">
        Total Shipping Charge: $<span>5</span>
      </p>
      <p className="mb-3">
        Tax: $<span>5</span>
      </p>
      <p className="mb-3 text-1xl font-semibold">
        Grand Total: $<span>0</span>
      </p>
      <button className="bg-red-600 mt-5 p-3 inline-flex rounded-md w-full justify-center text-white">
        Clear Cart <TrashIcon className="ml-2" width={"20px"} />
      </button>
      <button className="bg-yellow-400 mt-2 p-3 inline-flex rounded-md w-full justify-center text-white">
        Clear Cart <TrashIcon className="ml-2" width={"20px"} />
      </button>
    </div>
  );
};

export default CalculateCard;
