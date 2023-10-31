import React from "react";
import dropdown from "./../imges/dropdown.svg";
import search from "./../imges/srch.svg";
import account from "./../imges/account_circle.svg";
import notify from "./../imges/notify.svg";
import redDot from "./../imges/redDot.svg";
import cancel from "./../imges/cancel.svg";
import "./shopnavbar.css";

const ShopNavbar = () => {
  return (
    <>
      {/* shop navigate container */}

      <div className="shop_navigate_container">
        {/* logo and dropdown button  */}
        <div className="logo_and_dropdown">
          <button className="btn_drop_box">
            <img src={dropdown} alt="" className=" drop_btn_logo" />
          </button>

          <p className="name_logo">Constructor</p>
        </div>

        {/* navlink section */}

        <div className="navlink_list">
          <p className="shop_nav">Dashboard</p>
          <p className="shop_nav">About Us</p>
          <p className="shop_nav">News</p>
          <p className="shop_nav">User policy</p>
          <p className="shop_nav">Contacts</p>
        </div>

        {/* srch section  */}

        <div className="srch_section">
          <img className="srch_icon_nav" src={search} alt="search" />
          <p className="serch_docu_trans">Search Transactions and Documents</p>
        </div>

        {/* last section notify, user, cancel*/}
        <div className="notify_user_section">
          <div className="nav_user_sec">
            <img className=".nav_user_logo" src={account} alt="" />
            <p className="user_accName">Clayton Santos</p>
          </div>
          <div className="nav_notify">
            <div className="notify_box">
              <button className="notify_circle">
                <img className="notify_logo" src={notify} alt="notification" />
              </button>
              <img className="active_dot" src={redDot} />
            </div>
            <button className="cancel_btn">
              <img src={cancel} alt="cancel" className="cancel_logo" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopNavbar;
