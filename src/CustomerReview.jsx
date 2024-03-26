import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img_cr from "./images/quote-2.svg";
import "animate.css";
function CustomerReview() {
    const slider_card_data = [
        {
            image: img_cr,
            body: '"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."',
            name: "Ali Tufan",
            desc: "product Manager, Apple INC"
        },
        {
            image: img_cr,
            body: '"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."',
            name: "Ali Tufan",
            desc: "product Manager, Apple INC"
        },
        {
            image: img_cr,
            body: '"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."',
            name: "Ali Tufan",
            desc: "product Manager, Apple INC"
        },
    ]
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='customer-review-section p-5 animate__animated animate__fadeInLeft' >
            <div className="container p-5">
                <div className="row p-4">
                    <Slider {...settings}>
                        {
                            slider_card_data.map((ele, index) => {
                                return (
                                    <div key={index} className='col-12'>
                                        <div className="cust-slider-box">
                                            <div className='cust-slider-img-box'>
                                                <img src={ele.image} alt="img" />
                                            </div>
                                            <p className='cust-slider-body'>{ele.body}</p>
                                            <p className='cust-slider-name'>{ele.name}</p>
                                            <p className='cust-slider-desc'>{ele.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default CustomerReview
