import React from "react";
import "./SingleCard.css";

const SingleCard = ({ item, itemHandler }) => {
  let { id, name, img, price, ratings, stock } = item;
  return (
    <div>
      <div className="cardd pt-3 relative">
        <img className="rounded-3xl" src={img} alt="" />
        <h1 className="text-2xl font-semibold mt-4 mb-2 ml-2 ">{name}</h1>
        <h3 className="text-2xl ml-2 ">Price: {price}</h3>
        <p className="mt-6 ml-2 text-muted text-inherit">Available: {stock}</p>
        <p className=" ml-2 text-inherit pb-20">Rating: {ratings}</p>
        <button
          onClick={() => {
            itemHandler(item);
          }}
          className="w-full rounded-b-md bg-yellow-100 py-3 absolute bottom-0 mt-3 hover:bg-orange-600"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
