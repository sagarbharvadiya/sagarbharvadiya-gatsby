import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dataJson from '../Data/data.json'

const WhatIDo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Add this line to enable autoplay
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="what-i-do-section">
            <div className="what-i-do-wrapper">
                <h2>What Can I Do</h2>
                <div className="what-i-do-slider">
                    <div className='container'>
                        <Slider {...settings}>{
                            dataJson.whatICanDO.map((item, i) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <div className="what-i-do-image">
                                            <img src={item.img} alt="HTML" />
                                            <br />
                                            <div className='brand'>
                                                <b>{item.brand}</b>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;
