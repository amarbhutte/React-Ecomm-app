import React from 'react'
import { useState } from 'react';
import Cart from '../pages/Cart';
import checkMark from "./../imges/checkMark.svg";
import  "./shopdata.css"


const ShopData = ({item1}) => {
    console.log(item1)
    console.log(100)
    const [first, setfirst] = useState({})
    const addCart = (cartItem)=>{
      setfirst({...first ,cartItem})

    }

  return (
    <>
<div className="displayed_product_imge_section">
          <div className="displayed_product_checkbox">
            <img className="checkmark" src={checkMark} alt="checkmark" />
          </div>
          <img className="content_actual_img" src={item1.img} alt="" />
        </div>
        
        <div className="displayed_product_imge_footer_section">
          <p className="displayed_product_text">{item1.productName}</p>

          <div className="new_div">
          <p className="price"> { item1.price}</p>
      
      <button className="displayed_prodcut_price_btn" onClick={()=>addCart(item1)}>
    Add Cart
      </button>
      
          </div>
        </div>

<Cart cartData={first}/>
    </>
  )
}

export default ShopData