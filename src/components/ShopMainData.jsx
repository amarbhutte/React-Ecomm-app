import React from "react";
import "./shopmaindata.css";
import addHead from "./../imges/addHeadBtn.svg";
import yestick from "./../imges/yesTick.svg";
import search from "./../imges/searchIcon.svg";
import filter from "./../imges/filterIcon.svg";
import delet from "./../imges/deleteIcon.svg";
import edit from "./../imges/editor.svg";
import action1 from "./../imges/actionView1.svg";
import action2 from "./../imges/actionView2.svg";
import checkMark from "./../imges/checkMark.svg";
import shoe from "./../imges/shoes.png";
import ShopPageContent from "./ShopPageContent";
import Data from "./../DataProduct";

const ShopMainData = () => {
//   console.log(Data);
  return (
    <>
      {/* shop page main data such as peoducts ,info */}
      <div className="shopData_main_container">
        {/* inner main continer of shop page */}

        <div className="inner_content_main_container">
          {/* head section first head */}
          <div className="data_head1">
            <div className="data_head1_small_box">
              {/* left side  */}
              <div className="head1_left">
                <button className="head1_left_side_btn">
                  <img className="shopping_bsket" csrc="" alt="" />
                </button>
                <p className="head1_left_txt">Products</p>
              </div>

              <div className="head1_tabs">
                <div className="tab1">
                  <p className="tab_text1">Active</p>
                </div>
                <div className="tab2">
                  <p className="tab_text2">Draft</p>
                </div>
                <div className="tab3">
                  <p className="tab_text3">Assembly</p>
                </div>
              </div>

              {/* right side button side  */}
              <button className="head1_add_btn">
                {/* <img className="head1_add_icon" src={addHead} alt="add-btn" /> */}
                <p className="head1_add_icon_text">Go Cart</p>
              </button>
            </div>
          </div>

          {/* head section second head */}

          <div className="data_head2">
            <div className="data_head2_content">
              <button className="selectAll_btn ">
                <img className="selectAll_logo" src={yestick} alt="tickmark" />
                <p className="selectAll_text">Select All</p>
              </button>

              <div className="group_btns1">
                <button className="group_btns1_button">
                  <img
                    className="group_btns1_button_icon"
                    src={search}
                    alt="sreach"
                  />
                  <p className="comm_text"></p>
                </button>

                <button className="group_btns1_button">
                  <img
                    className="group_btns1_button_icon"
                    src={filter}
                    alt="filter"
                  />
                  <p className="comm_text"></p>
                </button>

                <button className="group_btns1_button">
                  <img
                    className="group_btns1_button_icon"
                    src={edit}
                    alt="Edit"
                  />
                  <p className="comm_text"></p>
                </button>

                <button className="group_btns1_button">
                  <img
                    className="group_btns1_button_icon"
                    src={delet}
                    alt="delete"
                  />
                  <p className="comm_text"></p>
                </button>
              </div>

              {/* group icons buttons second section */}

              <div className="group_btns2">
                <button className="group_btns2_button">
                  <img
                    className="group_btns2_button_icon"
                    src={action1}
                    alt="actionview"
                  />
                </button>
                <button className="group_btns2_button">
                  <img
                    className="group_btns2_button_icon"
                    src={action2}
                    alt="action"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* actuall data on UI img, descr */}

          {/* UI data of shop page */}
          <div className="product_sub_container2">
            <div className="product_sub_container2_data_display">
              {/* display product on shop page with description */}
              <ShopPageContent />
             

              <div className="data_product_main_container">
                <div className="product_sub_container1">
                  {/* <button className="load_more">
                    <p className="load_more_text">Load More</p>
                  </button> */}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopMainData;
