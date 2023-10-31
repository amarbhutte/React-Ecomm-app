import React from 'react'
import './shopleftside.css'
import addUser from './../imges/addUser.svg'
import avaterActive from './../imges/avaterActive.svg'


// import ''
import chat from './../imges/chat.svg'
import site from './../imges/site.svg'
import explore from './../imges/explore.svg'
import trending from './../imges/trending.svg'
import earth from './../imges/earth.svg'
import startRate from './../imges/starRate.svg'
import redDot from './../imges/redDot.svg'


const ShopLeftSide = () => {
  return (
    <>
{/* left main container */}


<div className="left_main_container">

{/*  upper section of left section  having  icons chat,site explore etc...section */}


<div className="menu_upper_box">
    <button className='shop_left_btn'><img  className='users_btn' src={explore} alt="explore" /></button>
    <button className='shop_left_btn'><img  className='users_btn' src={startRate} alt="starrate" /></button>

    <div className="chat_box">
      <button className="chat_circle">
      <img className='chat_logo' src={chat} alt="chat" />
      </button>
      <img className="active_dot" src={redDot}/>

    </div>



    <button className='shop_left_btn'><img  className='users_btn' src={trending} alt="trending" /></button>
    <button className='shop_left_btn'><img  className='users_btn' src={earth} alt="earth" /></button>
    <button className='shop_left_btn'><img  className='users_btn' src={site}alt="site" /></button>
    
</div>

{/* users profile sections */}
<div className="menu_lower_users_box">

  <button className='add_users_btn'>
    <img className='add_user_logo' src={addUser} alt="" />

  </button>


  <div className="avater_box1">
    <div className="avater_box1_sub_box">
      <div className="avater1_small">
        <div className='avater1_logo'></div>
      </div>
    </div>
    {/* <img className='avater_active' src={avaterActive} alt="user-active-status"  /> */}

  </div>



  <div className="avater_box">
    <div className="avater_icons">
    </div>
  </div>


  <div className="avater_box">
    <div className="avater_icons">
    </div>
  </div>


  <div className="avater_box">
    <div className="avater_icons">
    </div>
  </div>




 
</div>


</div>



    </>
  )
}

export default ShopLeftSide