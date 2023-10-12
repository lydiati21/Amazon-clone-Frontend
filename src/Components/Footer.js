import React from "react";
import "./Footer.css";
import LanguageIcon from "@mui/icons-material/Language";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="foot">
      <div className="backToTop" id="back">
        <span>
          <a href="#" className="header__clearlink">
            Back to top
          </a>
        </span>
      </div>
      <div className="footer">
        <ul>
          <h3>Get to Know Us</h3>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About Amazon</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Amazon Devices</a>
          </li>
          <li>
            <a href="#">Amazon science</a>
          </li>
        </ul>
        <ul>
          <h3>Make Money with Us</h3>
          <li>
            <a href="#">Sell products on Amazon</a>
          </li>
          <li>
            <a href="#">Sell on Amazon Business</a>
          </li>
          <li>
            <a href="#">Sell apps on Amazon</a>
          </li>
          <li>
            <a href="#">Become an Affiliate</a>
          </li>
          <li>
            <a href="#">Advertise Your Products</a>
          </li>
          <li>
            <a href="#">Self-Publish with Us</a>
          </li>
          <li>
            <a href="#">Host an Amazon Hub</a>
          </li>
          <li>
            <a href="#">›See More Make Money with Us</a>
          </li>
        </ul>
        <ul>
          <h3>Amazon Payment Products</h3>
          <li>
            <a href="#">Amazon Business Card</a>
          </li>
          <li>
            <a href="#">Shop with Points</a>
          </li>
          <li>
            <a href="#">Reload Your Balance</a>
          </li>
          <li>
            <a href="#">Amazon Currency Converter</a>
          </li>
        </ul>
        <ul>
          <h3>Let Us Help You</h3>
          <li>
            <a href="#">Amazon and COVID-19</a>
          </li>
          <li>
            <a href="#">Your Account</a>
          </li>
          <li>
            <a href="#">Your Orders</a>
          </li>
          <li>
            <a href="#">Shipping Rates &amp; Policies</a>
          </li>
          <li>
            <a href="#">Amazon Prime</a>
          </li>
          <li>
            <a href="#">Returns &amp; Replacements</a>
          </li>
          <li>
            <a href="#">Manage Your Content and Devices</a>
          </li>
          <li>
            <a href="#">Amazon Assistant</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      <div className="footer_logos_container">
        <div className="footer_logos_wrapper">
          <Link to="/" className="header__clearlink">
            <div className="footer__logo">
              <img
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
              />
            </div>
          </Link>
          <div className="ftr_wrapper_right">
            <div className="language ftr_wrapper_right_brdr">
              <LanguageIcon fontSize="small" /> <span>English</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <UnfoldMoreIcon fontSize="small" sx={{ color: grey[500] }} />
            </div>
            <div className="us_dollar ftr_wrapper_right_brdr">
              <p>
                $ &nbsp;<span>USD-U.S.Dollar</span>
              </p>
            </div>
            <div className="us ftr_wrapper_right_brdr">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5a/American-flag-2a.jpg"
                alt="us-flage"
              />{" "}
              <span>United States</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__credit">
        <h3>
          Built By:
          <a href="##" target="_blank" rel="noreferrer">
            Lydia Tilahun
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
