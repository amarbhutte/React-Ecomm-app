import React from "react";
import PopularProducts from "../components/PopularProducts";
import "./homepopularproducts.css";
import Data from "./../DataProduct";

const HomePopularProduct = () => {
  console.log(Data);
  return (
    <>
      <div className="popular">
        <p className="produts_main_text">Populer  products</p>
        <div className="popular_wraper">

        <div className="map_over_data">
          {Data.map((item, index) => {
            return <PopularProducts key={index} Data={item} />;
          })}
        </div>
        </div>
      </div>
    
    </>
  );
};

export default HomePopularProduct;
