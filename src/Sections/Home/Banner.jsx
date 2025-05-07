import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/images/banner/banner-3.png';

function Banner() {
    return (
        <section id="home" className="banner-section-three overflow-hidden">
            {/* Decorative Icons */}
            <div className="icon-bubbles-2"></div>
            <div className="icon-leaves-23 bounce-x"></div>
            <div className="icon-leaves-24 bounce-y"></div>
            
            <div className="bg-image wow fadeIn" data-wow-delay="1500ms">
                <img src={bannerImage} alt="Banner" />
            </div>

            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-5 col-md-12 col-sm-12 wow fadeInLeft">
                        <div className="inner-column">
                            <div className="name wow fadeInUp" data-wow-delay="300ms">
                                Olivia <br />
                                <span className="icon-heart-2"></span> <br />
                                Peter
                            </div>
                            <div className="text wow fadeInUp" data-wow-delay="600ms">
                                ONE O’CLOCK IN THE AFTERNOON <br />
                                THE WHITE CHURCH
                            </div>
                            <div className="date wow fadeInUp" data-wow-delay="900ms">
                                12. 12. 2027
                            </div>
                            <div className="btn-box wow fadeInUp" data-wow-delay="1200ms">
                                <Link to="/event" className="theme-btn btn-style-one green-bg">
                                    <span className="btn-title">Wedding</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
