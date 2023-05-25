import React from 'react';

const Banner = () => {
    return (
        <div className="banner-section">
            <div className="banner-wrapper">
                <div className="banner-left-section">
                    <h2>I'm Frontend Developer.</h2>
                    <p>
                        A front-end developer creates interactive user interfaces using
                        HTML, CSS, and JavaScript. They require design skills and proficiency
                        in frameworks like React and play a critical role in ensuring the final
                        product meets user needs.
                    </p>
                    <div className="banner-left-btn">
                        <a href="mailto:sagarbharvadiya">Hire me</a>
                    </div>
                </div>
                <div className="banner-right-section">
                    <div className="banner-right-section">
                    <img src="../image/giphy.gif" alt="Banner" />
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
