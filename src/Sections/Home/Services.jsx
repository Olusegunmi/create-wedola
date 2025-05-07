import React from 'react';
import { Link } from 'react-router-dom';
import serviceImage1 from '../../assets/images/resource/service3-1.jpg';
import serviceImage2 from '../../assets/images/resource/service3-2.jpg';
import serviceImage3 from '../../assets/images/resource/service3-3.jpg';

function Services() {
    return (
        <section id="event" className="services-section-three pt-0">
            <div className="icon-flowers-9 zoom-one"></div>
            <div className="auto-container">
                <div className="row">
                    <div className="services-block-three col-lg-4 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <img src={serviceImage1} alt="Image" />
                                </figure>
                                <div className="info-box">
                                    <i className="icon flaticon-birthday-girl"></i>
                                    <div className="date">12. 12. 2025</div>
                                    <div className="text">Venue at Lucy Forks, Patriciafur, United States.</div>
                                    <div className="btn-box">
                                        <Link to="/rsvp" className="theme-btn btn-style-one green">
                                            <span className="btn-title">RSVP</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-block-three col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <img src={serviceImage2} alt="Image" />
                                </figure>
                                <div className="info-box">
                                    <i className="icon flaticon-arch"></i>
                                    <div className="date">12. 12. 2025</div>
                                    <div className="text">Venue at Lucy Forks, Patriciafur, United States.</div>
                                    <div className="btn-box">
                                        <Link to="/rsvp" className="theme-btn btn-style-one green">
                                            <span className="btn-title">RSVP</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-block-three col-lg-4 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <img src={serviceImage3} alt="Image" />
                                </figure>
                                <div className="info-box">
                                    <i className="icon flaticon-cheers"></i>
                                    <div className="date">12. 12. 2025</div>
                                    <div className="text">Venue at Lucy Forks, Patriciafur, United States.</div>
                                    <div className="btn-box">
                                        <Link to="/rsvp" className="theme-btn btn-style-one green">
                                            <span className="btn-title">RSVP</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
