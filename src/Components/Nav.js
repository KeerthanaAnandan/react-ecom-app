import React from "react";
import img from "../assets/K.png";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Nav() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header-container">
      <Link to="/">
        <img className="logo" src={img} alt="" />
        {/*  <i className="fas fa-tshirt text-warning logo">Kay Store</i>*/}
      </Link>
      <div className="search-bucket">
        <input type="text" name="search" id="search-box" />
        <span>
          <i className="fas fa-search search-icon bg-warning"></i>
        </span>
      </div>

      {/*login */}
      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-name"> Hello {user?.email}</span>
        </div>

        <Link to={!user && "/login"} className="header-link">
          <div className="header-option">
            <span onClick={login} className="header-option-signin">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/*cart */}
        <Link to="/checkout" className="header-link">
          <div className="header-option-basket">
            <span>
              <i className="fas fa-shopping-cart "></i>
            </span>
            <span className="header-option-basket-count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
