import React from 'react'
import './shoprightside.css'
import chart1 from'./../imges/chartTotal1.svg'
import chart2 from'./../imges/chartTotal2.svg'
import chart1session1 from'./../imges/chart1session1.svg'
import chart2session1 from'./../imges/chart2session1.svg'
import purple from'./../imges/purple.svg'
import orange from'./../imges/orangedot.svg'
import threeDotNavigate from'./../imges/threeDotNavi.svg'

const ShopRightSide = () => {

  return (
    <>
    {/* main continer of right side bar of shop page */}

    <div className="right_sidebr">

        <div className="right_sidebar_content">

            {/* total sales chart and figures */}
<div className="total_sales">

    <div className="total_sales_content">

        <div className="total_content_sub_box">
            <div className="total_actual_content">
                <p className='total_text1'>Total Sales</p>
                <p className='total_text2'>$281.90</p>
            </div>
            <div className="total_actual_content_chart">
            <img className='total_chart1' src={chart1} alt="chart" />
                <img className='total_chart2' src={chart2} alt="chart" />

            </div>
        </div>
    </div>


    <div className="total_sales_footer">
        <div className="total_footer_text1">6 total orders</div>
        <div className="total_footer_text2">View report</div>
    </div>


</div>

{/* total session 1 section  */}

<div className="total_sessions1">
    <div className="sessions1_content">
        <div className="sessions1_content_sub_box">
            <div className="sessions1_content_sub_small_box">
                <p className='content_sub_small_box1'>Total Sessions</p>
                <p className='content_sub_small_box2'>456</p>
            </div>
            <div className="sessions1_chart_sub_small_box">
                <img className='chart_sub_small_box1_img' src={chart1session1} alt="chat" />
                <img className='chart_sub_small_box2_img' src={ chart2session1} alt="chart" />

            </div>

        </div>
    </div>
    <div className="sessions1_footer">
    <div className="sessions1_footer_content">
        <div className="live_logo">
        <p className='live_text'>Live</p>
        </div>
        <p className='visitor'>4 visitors</p>
        <p className='LiveView'>See Live View</p>
    </div>
    </div>

</div>

{/* total session 2 chart of right side  */}

<div className="total_sessions2">
    
    <div className="sessions1_content">
        <div className="sessions1_content_sub_box">
            <div className="sessions1_content_sub_small_box">
                <p className='content_sub_small_box1'>Customer rate</p>
                <p className='content_sub_small_box2'>5.43%</p>
            </div>
            <div className="sessions1_chart_sub_small_box">
                <img className='chart_sub_small_box1_img' src={chart1session1} alt="chat" />
                <img className='chart_sub_small_box2_img' src={ chart2session1} alt="chart" />

            </div>

        </div>
    </div>
    <div className="sessions1_footer">
    <div className="sessions1_footer_content">
        <div className="first_time_box1">
            <img  className='purple_dot' src={purple} alt="purple_dot" />
        <p className='LiveView'>First Time</p>
        </div>
        {/* <p className='visitor'>4 visitors</p> */}

        <div className="first_time_box1">
        <img  className='orange_dot' src={orange} alt="ornge_dot" />

        <p className='LiveView'>Returning</p>
        </div>

    </div>
    </div>

</div>


{/* details about action section of right side */}

<div className="actions_container">

    <div className="action_head">
        <div className="action_tab">
            <p className='action_text1'>Actions </p>
            <p className='action_text2_order'>Orders</p>
        </div>
        <img className='three_dot_icon'  src={threeDotNavigate} alt="navigator" />
    </div>

    {/* action content  */}

    <div className="action_content">

       
        <div className="action_item">
            <div className="action_item_left">
            <button className='action_item_btn'>
            <p className='action_time'>11:12</p>
            </button> 
            <div className="action_line"></div>
            </div>
            <div className="action_item_content"><p className='action_para'>New Product Added <br/> «Apple iPad Pro 12.9»</p></div>
        </div>



        <div className="action_item">
            <div className="action_item_left">
            <button className='action_item_btn'>
            <p className='action_time'>11:12</p>
            </button> 
            <div className="action_line"></div>
            </div>
            <div className="action_item_content"><p className='action_para'>New Product Added <br/> «Apple iPad Pro 12.9»</p></div>
        </div>


        <div className="action_item">
            <div className="action_item_left">
            <button className='action_item_btn'>
            <p className='action_time'>11:12</p>
            </button> 
            <div className="action_line"></div>
            </div>
            <div className="action_item_content"><p className='action_para'>New Product Added <br/> «Apple iPad Pro 12.9»</p></div>
        </div>


        <div className="action_item">
            <div className="action_item_left">
            <button className='action_item_btn'>
            <p className='action_time'>11:12</p>
            </button> 
            <div className="action_line"></div>
            </div>
            <div className="action_item_content"><p  className='action_para'>New Product Added <br/> «Apple iPad Pro 12.9»</p></div>
        </div>


        <div className="action_item">
            <div className="action_item_left">
            <button className='action_item_btn'>
            <p className='action_time'>11:12</p>
            </button> 
            <div className="action_line"></div>
            </div>
            <div className="action_item_content"><p className='action_para' >New Product Added <br/> «Apple iPad Pro 12.9»</p></div>
        </div>

{/* 
        <div className="action_item">
            <div className="action_item_left">
            <button className='action_item_btn'>
            <p className='action_time'>11:12</p>
            </button> 
            <div className="action_line"></div>
            </div>
            <div className="action_item_content"><p  className='action_para'>New Product Added <br/> «Apple iPad Pro 12.9»</p></div>
        </div> */}


       

       

    </div>
</div>


        </div>




    </div>


    
    </>
  )
}

export default ShopRightSide