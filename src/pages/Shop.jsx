import React from 'react'
import ShopLeftSide from '../components/ShopLeftSide'
import ShopMainData from '../components/ShopMainData'
import ShopNavbar from '../components/ShopNavbar'
import ShopRightSide from '../components/ShopRightSide'
import './shop.css'
const Shop = () => {
  return (
    <>
{/* shop page container */}


    <div className="shop_container">
        <ShopNavbar/>

        {/* left component , middle component and right component of shop page , to make them seperate we used flex */}


        <div className="flex_container">
        <ShopLeftSide/>
        <ShopMainData/>
        <ShopRightSide/>
        </div>
    </div>
    
    
    
    </>


    
  )
}

export default Shop