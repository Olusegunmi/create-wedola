import React from 'react';
import { Link } from 'react-router-dom';
import coupleImage1 from '../../assets/images/resource/couple2-1.jpg';
import coupleImage2 from '../../assets/images/resource/couple2-2.jpg';
import coupleImage3 from '../../assets/images/resource/couple2-3.jpg';

function CoupleSection() {
    return (
        <section className="couple-section-two">
            <div className="icon-leave-4 bounce-y wow" data-wow-delay="3s"></div>

            <div className="auto-container">
                <div className="row">
                    <div className="couple-image-block col-lg-4 order-lg-2 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image overlay-anim">
                                    <img src={coupleImage2} alt="Couple Image" />
                                </figure>
                                <div className="icon-flower-3 bounce-y"></div>
                                <div className="icon-flower-4 bounce-y wow" data-wow-delay="3s"></div>
                            </div>
                        </div>
                    </div>
                    <div className="couple-block-two style-two col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/about-us">
                                        <img src={coupleImage1} alt="Bride Image" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <span className="designation">The Bride</span>
                                <h4 className="name">
                                    <Link to="/about-us">Jessica Loran</Link>
                                </h4>
                                <div className="text">My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.</div>
                            </div>
                        </div>
                    </div>
                    <div className="couple-block-two col-lg-4 col-md-6 order-lg-3 wow fadeInRight" data-wow-delay="400ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/about-us">
                                        <img src={coupleImage3} alt="Groom Image" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <span className="designation">The Groom</span>
                                <h4 className="name">
                                    <Link to="/about-us">Thomas Walkar</Link>
                                </h4>
                                <div className="text">My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoupleSection;
