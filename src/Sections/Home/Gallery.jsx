import React from 'react';
import { Link } from 'react-router-dom';
import GalleryImage1 from '../../assets/images/resource/gallery5-1.jpg';
import GalleryImage2 from '../../assets/images/resource/gallery5-2.jpg';
import GalleryImage3 from '../../assets/images/resource/gallery5-3.jpg';
import GalleryImage4 from '../../assets/images/resource/gallery5-4.jpg';
import GalleryImage5 from '../../assets/images/resource/gallery5-5.jpg';
import GalleryImage6 from '../../assets/images/resource/gallery5-6.jpg';
import GalleryImage7 from '../../assets/images/resource/gallery5-7.jpg';
import GalleryImage8 from '../../assets/images/resource/gallery5-8.jpg';

const galleryImages = [
  { src: GalleryImage1, alt: "Image 1", style: "" },
  { src: GalleryImage2, alt: "Image 2", style: "style-two" },
  { src: GalleryImage3, alt: "Image 3", style: "style-three" },
  { src: GalleryImage4, alt: "Image 4", style: "" },
  { src: GalleryImage5, alt: "Image 5", style: "style-two" },
  { src: GalleryImage6, alt: "Image 6", style: "style-three" },
  { src: GalleryImage7, alt: "Image 7", style: "" },
  { src: GalleryImage8, alt: "Image 8", style: "style-two" },
];

const Gallery = () => {
    return (
        <section id="memory" className="gallery-section-five">
            <div className="auto-container">
                <div className="sec-title style-three text-center">
                    <span className="icon icon-green-heart"></span>
                    <span className="sub-title">Sweet Memories</span>
                    <h2>Wedding Gallery</h2>
                </div>
                <div className="row">
                    {galleryImages.map((image, index) => (
                        <div key={index} className={`gallery-block-five ${image.style} col-lg-3 col-md-6 wow fadeInUp`} data-wow-delay={image.delay} >
                            <div className="inner-box">
                                <figure className="image overlay-anim">
                                    <Link to="/gallery" className="lightbox-image" data-fancybox="gallery">
                                        <img src={image.src} alt={image.alt} />
                                    </Link>
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
