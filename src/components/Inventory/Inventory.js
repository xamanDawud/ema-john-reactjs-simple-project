import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContex";

const Inventory = () => {
  let { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default Inventory;
