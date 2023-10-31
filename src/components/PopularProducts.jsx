import React from 'react'
import './popularproducts.css'
import prod1 from  "../product-img/product1.png"
import star from  "../product-img/star.svg"
import love from  "../product-img/ph_heart-light.svg"



const PopularProducts = ({Data}) => {
// console.log(Data)

  return (
    <div className='product_wrapper'>
<div className="products_main">

    <div className="product_frame">

        <div className="sub_fram">
            <div className="group_product">

              <div className="reactangle">

                <img className='group_img' src={Data.img} alt="" />
                </div>


             <div className="another_group">
                <div className='heart_back'  >
                <img className='heart_icon' src={love} alt="" />
                </div>

            </div>
            </div>






            <div className="product_small_bottom_frame">
                <div className="bottom_frame1">

                    <div className="bottom_frame1_sub_frame1">
                        <div className="review_frame">
                            <div className="review_frame_sub1">
                                <img className='star' src={star} alt="" />
                            </div>
                            <div className="review_frame_sub2">11.6k review</div>
                        </div>
                        <div className="tittle_frame3695"><p className='tittle_frame_3695_text'> {Data.productName}</p></div>
                    </div>
                    <div className="bottom_frame3730">
                        <p className='frame3730_text_Rs'>{Data.price}</p>
                        <p className='frame3730_text_sold_out'>{Data.soldOut} &nbsp;sold out</p>
                <button className="frame3692"> Add Cart </button>

                    </div>
                </div>
            </div>




        </div>

    </div>
</div>

    </div>
  )
}

export default PopularProducts