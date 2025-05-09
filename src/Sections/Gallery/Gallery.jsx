import React from 'react';
import { Link } from 'react-router-dom';

import GalleryImg1 from '../../assets/images/resource/gallery7-1.jpg';
import GalleryImg2 from '../../assets/images/resource/gallery7-2.jpg';
import GalleryImg3 from '../../assets/images/resource/gallery7-3.jpg';
import GalleryImg4 from '../../assets/images/resource/gallery7-4.jpg';
import GalleryImg5 from '../../assets/images/resource/gallery7-5.jpg';
import GalleryImg6 from '../../assets/images/resource/gallery7-6.jpg';

const galleryImages = [
  { img: GalleryImg1, alt: "Image 1", style: "style-two" },
  { img: GalleryImg2, alt: "Image 2", style: "" },
  { img: GalleryImg3, alt: "Image 3", style: "style-two" },
  { img: GalleryImg4, alt: "Image 4", style: "" },
  { img: GalleryImg5, alt: "Image 5", style: "style-two" },
  { img: GalleryImg6, alt: "Image 6", style: "" },
];

const Gallery = () => {
    return (

        <section className="gallery-section-seven">
            <div className="icon-leaves-21 bounce-y" />
            <div className="icon-leaves-22 bounce-y wow" data-wow-delay="5s" />
            <div className="auto-container">
                <div className="row g-0">
                    {galleryImages.map((image, index) => (
                        <div className={`gallery-block-seven ${image.style} col-lg-4 col-sm-6`} key={index}>
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim">
                                        <Link to="/" className="lightbox-image" data-fancybox="gallery">
                                            <img src={image.img} alt={image.alt} />
                                        </Link>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
