import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import StoryImage1 from '../../assets/images/resource/story1-1.png';
import StoryImage2 from '../../assets/images/resource/story1-2.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
};

const storyImages = [
  { src: StoryImage1, alt: "Story Image 1" },
  { src: StoryImage2, alt: "Story Image 2" },
  { src: StoryImage1, alt: "Story Image 1" },
  { src: StoryImage2, alt: "Story Image 2" }
];

const Story = () => {

    return (
        <>
            <section className="story-section">
                <div className="anim-icons full-width">
                    <span className="icon icon-flowers-10 bounce-y" />
                    <span className="icon icon-flowers-11 bounce-y" style={{ animationDelay: '3s' }} />
                </div>
                <div className="auto-container">
                    <div className="sec-title style-three text-center">
                        <span className="icon icon-green-heart" />
                        <span className="sub-title">Our Story</span>
                        <h2>Sweet Love Story</h2>
                    </div>
                    <div className="row">
                        <div className="column col-xl-3 col-md-6 wow fadeInLeft">
                            <div className="story-block">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <div className="date">December 23, 2024</div>
                                        <h4 className="title">First Time We Meet</h4>
                                        <div className="text">
                                            From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-heart-4"></div>
                            <div className="story-block">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <div className="date">December 23, 2024</div>
                                        <h4 className="title">Our First Date</h4>
                                        <div className="text">
                                            From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-3 col-md-6 wow fadeInRight order-xl-3">
                            <div className="story-block">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <div className="date">December 23, 2024</div>
                                        <h4 className="title">She Said Yes</h4>
                                        <div className="text">
                                            From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-heart-4"></div>
                            <div className="story-block">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <div className="date">December 23, 2024</div>
                                        <h4 className="title">Get Love Married</h4>
                                        <div className="text">
                                            From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-6 wow fadeInUp">
                            <Swiper {...swiperOptions} className="single-item-carousel owl-carousel">
                                {storyImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={image.src} alt={image.alt} />
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Story;
