import React from 'react'
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
// import Card from './Card';
import Caousel from './Caousel';
const Banner = () => {

  return (


    <div div className="animate__animated animate__fadeInLeft cust-carousel-box" >
      <Caousel />
      <div className="cust-box1">
        <p className='carousel-text'>tour Experience</p>
        <p className='carousel-title'>Find The Best Cruise <br /> For You</p>
      </div>
      <div className="container text-end d-flex align-item-start justify-content-between banner-cust-box2">

        <div className="text-center banner-cust-box2-conts">
        <p className='fs-4 p-1'>Where to</p>
          <p className='fs-5 fst-italic fw-light'>All Docs</p>
        </div>
        <div className="text-center  banner-cust-box2-conts">
          <p className='fs-4 p-1'>All Cruise Line</p>
          <p className='fs-5 fst-italic fw-light'>Holland America Line</p>
        </div>
        <div className="text-center banner-cust-box2-conts">
          <p className='fs-4 p-1'>Departure Month</p>
          <p className='fs-5 fst-italic fw-light'>June</p>
        </div>
        <div className=" banner-cust-box2-conts">
          <button className="btn btn-warning btn-lg p-3 text-center">
            <span className="banner-btn-icon"></span>Search
          </button>
        </div>
      </div>
    </div>


  )
}

export default Banner
