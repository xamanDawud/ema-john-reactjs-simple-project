import React from "react";
import "./SingleCard.css";

const SingleCard = ({ item }) => {
  let { id, name, img, price, rating, stock } = item;
  return (
    <div className="cardd pt-3">
      <img className="" src={img} alt="" />
      <h1 className="text-2xl font-semibold mt-4 mb-2 ml-2 ">{name}</h1>
      <h3 className="text-2xl ml-2 ">Price:{price}</h3>
      <p className="mt-10 ml-2 text-muted text-inherit">Available:{stock}</p>
      <p className=" ml-2 text-inherit">Rating:{rating}</p>
    </div>
  );
};

export default SingleCard;
