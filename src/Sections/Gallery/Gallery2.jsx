import React from 'react';
import { Link } from 'react-router-dom';

import GalleryImg7 from '../../assets/images/resource/gallery3-1.jpg';
import GalleryImg8 from '../../assets/images/resource/gallery3-2.jpg';
import GalleryImg9 from '../../assets/images/resource/gallery3-3.jpg';
import GalleryImg10 from '../../assets/images/resource/gallery3-4.jpg';
import GalleryImg11 from '../../assets/images/resource/gallery3-5.jpg';
import GalleryImg12 from '../../assets/images/resource/gallery3-6.jpg';

const leftColumnImages = [
  { img: GalleryImg7, alt: "Image 7" },
  { img: GalleryImg8, alt: "Image 8" },
  { img: GalleryImg9, alt: "Image 9" },
];

const rightColumnImages = [
  { img: GalleryImg10, alt: "Image 10" },
  { img: GalleryImg11, alt: "Image 11" },
  { img: GalleryImg12, alt: "Image 12" },
];

const Gallery2 = () => {
    return (

        <section className="gallery-section-three">
            <div className="bg bg-pattern-5 bounce-y" />
            <div className="auto-container">
                <div className="row">
                    <div className="left-column col-lg-6 wow fadeInLeft">
                        <div className="row">
                            {leftColumnImages.map((image, index) => (
                                <div className={`gallery-block-three ${index === 2 ? 'col-lg-12' : 'col-lg-6'} col-md-6 col-sm-6`} key={index}>
                                    <div className="inner-box">
                                        <figure className="image overlay-anim">
                                            <Link to="/" className="lightbox-image" data-fancybox="gallery">
                                                <img src={image.img} alt={image.alt} />
                                            </Link>
                                        </figure>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right-column col-lg-6 wow fadeInRight">
                        <div className="row">
                            {rightColumnImages.map((image, index) => (
                                <div className={`gallery-block-three ${index === 0 ? 'col-lg-12' : 'col-lg-6'} col-md-6 col-sm-6`} key={index}>
                                    <div className="inner-box">
                                        <figure className="image overlay-anim">
                                            <Link to="/" className="lightbox-image" data-fancybox="gallery">
                                                <img src={image.img} alt={image.alt} />
                                            </Link>
                                        </figure>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery2;
