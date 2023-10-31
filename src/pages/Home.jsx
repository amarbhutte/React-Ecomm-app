import React, { useState } from "react";
import images from "../product-img/product1.png";
import "./home.css";
import Navbar from "../components/Navbar";
import Purchase from "../components/Purchase";
// import Product from '../components/Product';
// import Products from '../components/Products';
import Shop from "./Shop";
// import PopularProducts from '../components/PopularProducts';
import HomePopularProduct from "../components/HomePopularProduct";
const Home = () => {
  // console.log(data)

  return (
    <>
      <div className="container">
        <div className="mini_container">
          
          <Navbar />
          <Purchase />
          <HomePopularProduct />
          <Shop/>
        </div>
      </div>
    </>
  );
};

export default Home;

//   // const [state,setState] =useState(Data)
//   // console.log(state.homePageProduct[0].name)

//  const productNames = Data.homePageProduct.map(product => product.product1);

// // Console log the product names
// console.log(productNames)

// const Data= {
//   homePageProduct :[
//       {
//       id:1,
//       product1 : "shoes1",
//       price : 200,
//      img : "../imges/product_images/product1"
//     },
//     {
//       id:1,
//       product1 : "shoes2",
//       price : 200,
//      img : "../imges/product_images/product2"
//     },
//     {
//       id:1,
//       product1 : "shoes3",
//       price : 200,
//      img : "../imges/product_images/product3"
//     },
//     {
//       id:1,
//       product1 : "shoes1",
//       price : 200,
//      img : "../imges/product_images/product4"
//     }

//   ]
// }

// console.log(Data.homePageProduct[0].name)
