import React from 'react'
import './purchase.css'
import starRate from'../imges/star.svg'
import dotted from'../imges/dottedline.PNG'
import { NavLink } from 'react-router-dom'
// import dot from'../imges/dotted2.Png'


const Purchase = () => {
  return (
    <>
    <div className="main_box_container1">

    <div className="inner_box_container">
        
        {/* Purchase headline with button section- left  */}
        <div className="purchase_left_container">
            
        <div className="purchase_box">
            <div className="purchase_tittle">Purchase your <br/> 
                    <u>shoes</u>  now.
   </div>
            <div className="purchase_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor ac.</p>
            </div>
          <NavLink to="/shop" className="no-underline">
            <div className="purchase_btn_box">
                <button className='shop_now'>Shop Now</button>
            </div>
            </NavLink>
            
            {/* dotted arrow cross and rating section */}
            <div className="wraper_container">
    <div className="arrow_and_rating_main_wrapper">
            <div className="arrow">
              {/* <img className='dotted_line' src={dotted}alt="dotted-line" /> */}
              <div className="dotted_line"></div>
            </div>


            
            {/* rating section  */}
            <div className="rating_box_main_container">

              {/* rating box star and rating number section */}
              <div className="ratingstars_and_number">

              <div className="rating_number"><p className='num'>4.3</p></div>

             {/* star rating section */}

              <div className="rating_stars">
                <img className='star' src={starRate} alt="rating-star" />
                <img className='star' src= {starRate}alt="rating-star" />
                <img className='star' src= {starRate}alt="rating-star" />
                <img className='star' src={starRate} alt="rating-star" />
                <img className='star' src= {starRate}alt="rating-star" />
                
              </div>
              </div>
              {/* total revivew text section */}
              
              <div className="rating_text"><p className='user_total_rating'>(11.6k Total Review)</p></div>

            </div>
            </div>
        </div>
        </div>
        </div>
      

        {/* shoes 3D image section-right */}
        <div className="shoe_3D">
          {/* <div className="shine_star">/ */}
            {/* <image src={} alt="" ><img src="" alt="" /></image>          </div> */}
            <div className="discount_box">
            <div className="discount_box2">

                <div className="discount_text"> <p>Get Up to 30% Off </p></div>
                <div className="discount_description"><p> You can get 30% off this product <br/>
if you are buying now </p></div>
            </div>
         </div>
        </div>
        
    </div>
</div> 



    </>
  )
}

export default Purchase