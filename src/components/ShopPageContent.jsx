import React from "react";

// import shoe from './../imges/shoes.png'
import {Data1} from "../DataProduct";
import ShopData from "./ShopData";
const ShopPageContent = () => {
  // console.log(Data1)
  console.log(1000)
  return (
    <>

    {
      Data1.map((item1,index)=>{
      return( <div className="displayed_product">
        <ShopData key={index} item1={item1}/>
      </div>
      )

      })
      
     
      }

    </>
  );
};

export default ShopPageContent;
