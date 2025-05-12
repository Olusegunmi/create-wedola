import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import Client1 from '../../assets/images/clients/2-1.png';
import Client2 from '../../assets/images/clients/2-2.png';
import Client3 from '../../assets/images/clients/2-3.png';
import Client4 from '../../assets/images/clients/2-4.png';
import Client5 from '../../assets/images/clients/2-5.png';
import Client6 from '../../assets/images/clients/2-6.png';

// Swiper options
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
  { img: Client1, alt: "Client 1", link: "/" },
  { img: Client2, alt: "Client 2", link: "/" },
  { img: Client3, alt: "Client 3", link: "/" },
  { img: Client4, alt: "Client 4", link: "/" },
  { img: Client5, alt: "Client 5", link: "/" },
  { img: Client6, alt: "Client 6", link: "/" },
];

const Client = () => {
    return (
        <section className="clients-section-two pt-0">
            <div className="icon-flower-22 bounce-x"></div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <h3>Wedding Design Companies</h3>
                </div>
                <div className="sponsors-outer">
                    {/* Clients Carousel */}
                    <Swiper {...swiperOptions} className="clients-carousel">
                        {clients.map((client, index) => (
                            <SwiperSlide key={index} className="client-block-two">
                                <Link to={client.link}>
                                    <img src={client.img} alt={client.alt} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Client;
