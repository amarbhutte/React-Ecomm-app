import React from "react";
import "./navbar.css";
import logo from "../imges/logo icon.svg";
import userProfile from "../imges/userprofile.svg";
import srch from "../imges/search.svg";
import cart from "../imges/Vector.svg";
import { NavLink } from "react-router-dom";
const Navabar = () => {
  return (
    <>
      <div className="inner_container">
        {/* logo and name section */}
        <div className="logo_section">
          <img src={logo} alt="logo_brand" className="logo_icon" />
          <h3 className="logo_name">CHOICE</h3>
        </div>



        <div className="navbar_box">

          <div className="nav_lists">

            <NavLink className="no-underline">
            <li>HOME</li>
            </NavLink>
            
            <NavLink className="no-underline">
            <li>ABOUT</li>
            </NavLink>

            <NavLink className="no-underline">
            <li>CONTACT</li>
            </NavLink>


            
          </div>

          <div className="srch">
            <div className="srch_small">
            <input type="text" placeholder="Search" />
            <img src={srch} alt=""search-logo/>
            </div>
           
          </div>

          <div className="cart_user">
            <img src={cart} alt="cart" />
            <div className="cart_background">
            <div className="cart_number">
              <p>0</p>
            </div>
            </div>
            <img src={userProfile} alt="avater"  className="user_profile"/>
          </div>

        </div>

       

      </div>
    </>
  );
};

export default Navabar;
