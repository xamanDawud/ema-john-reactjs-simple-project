import React from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContex";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="nav-menu">
        <Link to="/order">Order</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/inventory">Inventory</Link>
        {user?.uid ? (
          <button onClick={logOut}>
            <Link to="/login">Log Out</Link>
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        <p>{user?.email}</p>
      </div>
    </nav>
  );
};

export default Header;
