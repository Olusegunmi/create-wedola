import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Client1 from '../../assets/images/clients/3-1.png';
import Client2 from '../../assets/images/clients/3-2.png';
import Client3 from '../../assets/images/clients/3-3.png';
import Client4 from '../../assets/images/clients/3-4.png';
import Client5 from '../../assets/images/clients/3-5.png';
import Client6 from '../../assets/images/clients/3-6.png';

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 5,
        },
    },
};

const clients = [
  { image: Client1, alt: "Client 1" },
  { image: Client2, alt: "Client 2" },
  { image: Client3, alt: "Client 3" },
  { image: Client4, alt: "Client 4" },
  { image: Client5, alt: "Client 5" },
  { image: Client6, alt: "Client 6" }
];

const Clients = () => {
    return (
        <section className="clients-section-three">
            <div className="icon-leaves-28 bounce-x"></div>
            <div className="icon-leaves-29 bounce-y"></div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Thank you for giving</span>
                    <h2>Valuable Partners</h2>
                </div>
                <div className="sponsors-outer">
                    {/* Clients Carousel */}
                    <Swiper {...swiperOptions} className="clients-carousel">
                        {clients.map((client, index) => (
                            <SwiperSlide key={index} className="client-block-three">
                                <Link to="/gift">
                                    <img src={client.image} alt={client.alt} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Clients;
