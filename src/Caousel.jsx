import React from 'react'
import img from "./images/bg.png"
function Caousel() {
    return (
        <div className="col-12">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active indicator-carosel-btn" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className=' indicator-carosel-btn' aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className=' indicator-carosel-btn' aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img} className="d-block w-100" alt="..." />
                    </div >
                    <div className="carousel-item">
                        <img src={img} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className=" cust-carousel-btn  cust-left">
                <button className='cust-btn'  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"></button>
                </div>
                <div className="cust-carousel-btn  cust-right" >
                <button className='cust-btn'  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"></button>
                </div>
            </div>
        </div>
    )
}

export default Caousel
