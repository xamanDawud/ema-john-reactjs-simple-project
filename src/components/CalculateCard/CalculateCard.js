import React from "react";

const CalculateCard = () => {
  return (
    <div className="px-4">
      <h1 className="text-2xl text-center mt-5">Order Summery</h1>
      <p className="mb-3 mt-12">
        Selected items: <span>6</span>
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
    </div>
  );
};

export default CalculateCard;
