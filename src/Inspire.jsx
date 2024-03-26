import React from 'react';
import i1 from "./images/i1.png";
import i2 from "./images/i2.png";
import "animate.css";
let cardData = [
    {
        image: i1,
        title: "abcd sheihr lskhakehh kjfhsfkh jhfjf gdchk j,gcg hfl flkvhj",
        text: "April 06, 2024"
    },
    {
        image: i2,
        title: "abcd sheihr lskhakehh kjfhsfkh jhfjf gdchk j,gcg hfl flkvhj",
        text: "April 06, 2024"
    },
    {
        image: i1,
        title: "abcd sheihr lskhakehh kjfhsfkh jhfjf gdchk j,gcg hfl flkvhj",
        text: "April 06, 2024"
    },
    {
        image: i2,
        title: "abcd sheihr lskhakehh kjfhsfkh jhfjf gdchk j,gcg hfl flkvhj",
        text: "April 06, 2024"
    },
]

function Inspire() {
    return (
        <div className='container-fluid p-4 animate__animated animate__fadeInLeft'>
            <div className="container-fluid my-5 p-3">
                <div className="row text-center">
                    <p className='ins-title'>Get inspiration for your next trip</p>
                    <p className='ins-text'>Lorem ipsum dolor sit amet.</p>
                    <div className="p-3 cust-card">
                        {
                            cardData.map((ele, index) => {
                                return (
                                    <div key={index} className="cust-card-main">
                                        <div className='cust-img-cont'>
                                        <img src={ele.image} alt="img" className='cust-card-img' />
                                        </div>
                                        <div className=" cust-card-body">
                                            <p className='cust-card-title'>{ele.title}</p>
                                            <p className='cust-card-text'>{ele.text}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inspire
