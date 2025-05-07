import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },
    pagination: {
        clickable: true,
    },
    loop: true,
};

import TestimonialImage1 from '../../assets/images/resource/testi2-1.jpg';

const testimonials = [
    {
        id: 1,
        image: TestimonialImage1,
        text: "You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.",
        name: "Rose Marko",
        designation: "Bride's best friend, Aunt"
    },
    {
        id: 2,
        image: TestimonialImage1,
        text: "Seeing the love you both share makes me incredibly happy. Wishing you a lifetime of joy and adventure together!",
        name: "Michael Scott",
        designation: "Groom's childhood friend"
    }
];

const Testimonials = ({className}) => {
    return (
        <section className={`testimonial-section-two ${className || ''}`}>
            <div className="auto-container">
                <div className="title-box">
                    <div className="sec-title style-three">
                        <span className="sub-title">Client’s Reviews</span>
                        <h2>Thank you for the <br /> best wishes</h2>
                    </div>
                    <div className="default-navs">
                        <div className="owl-nav">
                            <div className="owl-prev"><i className="far fa-arrow-left" /></div>
                            <div className="owl-next"><i className="far fa-arrow-right" /></div>
                        </div>                        
                    </div>
                </div>
                <Swiper {...swiperOptions} className="single-item-carousel">
                    {testimonials.map(({ id, image, text, name, designation }) => (
                        <SwiperSlide key={id}>
                            <div className="testimonial-block-two">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <img src={image} alt={name} />
                                        </figure>
                                        <div className="testi-frame"></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="text">“{text}”</div>
                                        <div className="name">{name} <span className="designation">{designation}</span></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
