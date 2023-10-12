import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";


const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
 
  return (
    <>
      {/* header section */}
      <div className="header">
        <div className="left-wrapper">
          <div className="header-logo-wrapper">
            <Link to="/">
              <img
                className="header__logo header__hover"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="header logo"
              />
            </Link>
          </div>
          <div className="deliver">
            <p>Deliver to</p>
            <h5>
              <LocationOnIcon fontSize="small" /> <span> Ethiopia</span>{" "}
            </h5>
          </div>
        </div>
        
        <div className="header__search dropdown__btn  ">
          <button className="drop__btn all">
            All <ArrowDropDownIcon className="header__dropdown" />
          </button>

          <input className="header__searchInput" type="text" />
          <button type="submit" className="header__searchIcon">
            <SearchIcon />
          </button>
        </div>
        <div className="right-wrapper">
          <div className="flag">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5a/American-flag-2a.jpg"
              alt="us-flag"
            />
            <span>
              <ArrowDropDownIcon />
            </span>
          </div>
          <Link to={!user && "/Login"} className="header__clearlink">
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                hello, {!user ? "Customer" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="./Orders" className="header__clearlink">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/Checkout" className="header__clearlink">
            <div className="header__optionCart ">
              <span className="header__optionLineTwo header__cart__count">{basket?.length}</span>
              <ShoppingCartIcon />
              <span className="header__optionLineTwo">cart</span>
            </div>
          </Link>
        </div>
      </div>

      <nav className="subnavigation" id="top">
        <ul className="submenu">
          <li>
            <a href="##">
              <MenuIcon className="menu__icon" /> All
            </a>
          </li>
          <li>
            <a href="#">Today's Deals</a>
          </li>
          <li>
            <a href=""> Customer Service</a>
          </li>
          <li>
            <a href="">Registry</a>
          </li>
          <li>
            <a href="">Gift Cards</a>
          </li>
          <li>
            <a href="">Sell</a>
          </li>
        </ul>
        <ul className="submenu">
          <li className="submenu__right">
            <a href="">New Year, new deals</a>
          </li>
        </ul>
      </nav>
    
    </>
  );
};

export default Header;
