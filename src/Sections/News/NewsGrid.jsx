import React from 'react';
import { Link } from 'react-router-dom';
import NewsImage1 from '../../assets/images/resource/news1-1.jpg';
import NewsImage2 from '../../assets/images/resource/news1-2.jpg';

function CoupleSection() {
    return (
        <section class="news-section pb-70">
            <div class="icon-leave-4 bounce-y"></div>
            <div class="icon-flower-12 zoom-one"></div>
            <div class="auto-container">
                <div class="news-block wow fadeInUp">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><Link to="/news-details"><img src={NewsImage1} alt="Image" /></Link></figure>
                        </div>
                        <div class="content-box">
                            <div class="date"><span>24</span>December 2025</div>
                            <div class="title-box">
                                <h6 class="title"><Link to="/news-details">Couple's wedding <br /> turns emotional as <br />groom stands</Link></h6>
                                <div class="text">I'm filled with joy and excitement to be <br />marrying the love of my life.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="news-block style-two wow fadeInUp" data-wow-delay="200ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><Link to="/news-details"><img src={NewsImage2} alt="Image" /></Link></figure>
                        </div>
                        <div class="content-box">
                            <div class="date"><span>24</span>December 2025</div>
                            <div class="title-box">
                                <h6 class="title"><Link to="/news-details">Photography is the <br />important part of <br />wedding.</Link></h6>
                                <div class="text">I'm filled with joy and excitement to be <br />marrying the love of my life.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoupleSection;
