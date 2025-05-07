import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import GalleryImage1 from '../../assets/images/resource/gallery2-1.jpg';
import GalleryImage2 from '../../assets/images/resource/gallery2-2.jpg';
import GalleryImage3 from '../../assets/images/resource/gallery2-3.jpg';
import GalleryImage4 from '../../assets/images/resource/gallery2-4.jpg';
import GalleryImage5 from '../../assets/images/resource/gallery2-5.jpg';
import GalleryImage6 from '../../assets/images/resource/gallery6-1.jpg';
import GalleryImage7 from '../../assets/images/resource/gallery6-2.jpg';
import GalleryImage8 from '../../assets/images/resource/gallery6-3.jpg';
import GalleryImage9 from '../../assets/images/resource/gallery6-4.jpg';
import GalleryImage10 from '../../assets/images/resource/gallery6-5.jpg';

const galleryImages = [
  { src: GalleryImage1, alt: "Gallery Image 1" },
  { src: GalleryImage2, alt: "Gallery Image 2" },
  { src: GalleryImage3, alt: "Gallery Image 3" },
  { src: GalleryImage4, alt: "Gallery Image 4" },
  { src: GalleryImage5, alt: "Gallery Image 5" },
  { src: GalleryImage6, alt: "Gallery Image 6" },
  { src: GalleryImage7, alt: "Gallery Image 7" },
  { src: GalleryImage8, alt: "Gallery Image 8" },
  { src: GalleryImage9, alt: "Gallery Image 9" },
  { src: GalleryImage10, alt: "Gallery Image 10" },
  { src: GalleryImage1, alt: "Gallery Image 1" },
];

const Gallery2 = ({className}) => {
    return (
        <section className={`gallery-section-six ${className || ''}`}>
            <div className="large-container">
                <h3 className="title">Follow @domain.com</h3>
                <div className="gallery-carousel-two">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={10}
                        loop={true}
                        breakpoints={{
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
                              slidesPerView: 6,
                            },
                            1350: {
                              slidesPerView: 10,
                            },
                        }}
                    >
                        {galleryImages.map((image, index) => (
                            <SwiperSlide key={index} className="gallery-block-six">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link to="/gallery">
                                                <img className="w-100" src={image.src} alt={image.alt} />
                                            </Link>
                                            <div className="overlay">
                                                <Link to="/gallery" className="icon">
                                                    <i className="fa fa-expand"></i>
                                                </Link>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Gallery2;
