import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import BrideImage from '../../assets/images/resource/team3-1.jpg';
import GroomImage from '../../assets/images/resource/team3-8.jpg';
import Bridesmaid1 from '../../assets/images/resource/team3-2.jpg';
import Bridesmaid2 from '../../assets/images/resource/team3-3.jpg';
import Bridesmaid3 from '../../assets/images/resource/team3-4.jpg';
import Groomsman1 from '../../assets/images/resource/team3-5.jpg';
import Groomsman2 from '../../assets/images/resource/team3-6.jpg';
import Groomsman3 from '../../assets/images/resource/team3-7.jpg';

// Swiper options
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    },
};

const teamMembers = [
    { id: 1, name: "Willimes Dom", role: "Bridesmaid", image: Bridesmaid1 },
    { id: 2, name: "Jessica Jess", role: "Bridesmaid", image: Bridesmaid2 },
    { id: 3, name: "Moniqa Ron", role: "Bridesmaid", image: Bridesmaid3 },
    { id: 4, name: "Willimes Dom", role: "Bridesmaid", image: Bridesmaid1 }
];

const groomsmen = [
    { id: 1, name: "Thomas Willime", role: "Groomsman", image: Groomsman1 },
    { id: 2, name: "Romin Noman", role: "Groomsman", image: Groomsman2 },
    { id: 3, name: "Hans Gruber", role: "Groomsman", image: Groomsman3 },
    { id: 4, name: "Thomas Willime", role: "Groomsman", image: Groomsman1 }
];

const Team = () => {
    return (
        <section id="bridegrooms" className="team-section-three pt-0">
            <div className="auto-container">
                <div className="sec-title style-three text-center">
                    <span className="icon icon-green-heart"></span>
                    <span className="sub-title">Dear Friends and Family</span>
                    <h2>We are getting married</h2>
                </div>
                <div className="team-block-outer wow fadeInLeft">
                    <div className="row">
                        <div className="image-column col-xl-4">
                            <div className="inner-column">
                                <div className="bride-image">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image overlay-anim">
                                                <img src={BrideImage} alt="Olivia, the Bride" />
                                            </figure>
                                            <div className="icon-leaves-8 wow zoom-two"></div>
                                            <div className="icon-leaves-9 wow zoom-two" data-wow-delay="3s"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-column col-xl-8">
                            <div className="inner-column">
                                <div className="team-info-box">
                                    <h2 className="name">Olivia <span className="designation">The Bride</span></h2>
                                    <div className="text">My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.</div>
                                    <ul className="social-icon-two">
                                        <li><Link to="/"><i className="icon fab fa-facebook"></i></Link></li>
                                        <li><Link to="/"><i className="icon fab fa-google"></i></Link></li>
                                        <li><Link to="/"><i className="icon fab fa-twitter"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="carousel-outer">
                                    <div className="team-carousel">
                                        <Swiper {...swiperOptions} className="team-slider">
                                            {teamMembers.map(member => (
                                                <SwiperSlide key={member.id}>
                                                    <div className="team-block-three">
                                                        <div className="inner-box">
                                                            <div className="image-box">
                                                                <figure className="image">
                                                                    <Link to="/team-details">
                                                                        <img src={member.image} alt={member.name} />
                                                                    </Link>
                                                                </figure>
                                                                <div className="team3-frame"></div>
                                                            </div>
                                                            <div className="info-box">
                                                                <div className="name"><Link to="/team-details">{member.name}</Link></div>
                                                                <div className="designation">{member.role}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-block-outer style-two mb-0 wow fadeInRight" data-wow-delay="300ms">
                    <div className="row">
                        <div className="image-column col-xl-4">
                            <div className="inner-column">
                                <div className="groom-image">
                                    <div className="image-box">
                                        <figure className="image overlay-anim">
                                            <img src={GroomImage} alt="Peter, the Groom" />
                                        </figure>
                                        <div className="icon-leaves-8"></div>
                                        <div className="icon-leaves-9"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-column col-xl-8">
                            <div className="inner-column">
                                <div className="team-info-box">
                                    <h2 className="name">Peter <span className="designation">The Groom</span></h2>
                                    <div className="text">My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.</div>
                                    <ul className="social-icon-two">
                                        <li><Link to="/"><i className="icon fab fa-facebook"></i></Link></li>
                                        <li><Link to="/"><i className="icon fab fa-google"></i></Link></li>
                                        <li><Link to="/"><i className="icon fab fa-twitter"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="carousel-outer">
                                    <div className="team-carousel">
                                        <Swiper {...swiperOptions} className="team-slider">
                                            {groomsmen.map(member => (
                                                <SwiperSlide key={member.id}>
                                                    <div className="team-block-three">
                                                        <div className="inner-box">
                                                            <div className="image-box">
                                                                <figure className="image">
                                                                    <Link to="/bride">
                                                                        <img src={member.image} alt={member.name} />
                                                                    </Link>
                                                                </figure>
                                                                <div className="team3-frame"></div>
                                                            </div>
                                                            <div className="info-box">
                                                                <div className="name"><Link to="/bride">{member.name}</Link></div>
                                                                <div className="designation">{member.role}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Team;
