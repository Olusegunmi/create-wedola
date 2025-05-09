import React from 'react';
import { Link } from 'react-router-dom';
import ClientImage1 from '../../assets/images/clients/1.png';
import ClientImage2 from '../../assets/images/clients/2.png';
import ClientImage3 from '../../assets/images/clients/3.png';
import ClientImage4 from '../../assets/images/clients/4.png';
import ClientImage5 from '../../assets/images/clients/5.png';
import ClientImage6 from '../../assets/images/clients/6.png';

const clientImages = [
  { src: ClientImage1, alt: "Client 1" },
  { src: ClientImage2, alt: "Client 2" },
  { src: ClientImage3, alt: "Client 3" },
  { src: ClientImage4, alt: "Client 4" },
  { src: ClientImage5, alt: "Client 5" },
  { src: ClientImage6, alt: "Client 6" }
];

const ClientsSection = () => {
    return (
        <section className="clients-section">
            <div className="bg bg-pattern-8"></div>
            <div className="auto-container">
                <div className="row"> 
                    {/* Title Column */}
                    <div className="title-column col-xxl-4 wow fadeInLeft">
                        <div className="inner-column">
                            <div className="sec-title mb-0">
                                <span className="sub-title">Thank you for giving</span>
                                <h2>Valuable Partners</h2>
                                <div className="text">
                                    From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Images Column */}
                    <div className="images-column col-xxl-8 wow fadeInRight" data-wow-delay="300ms">
                        <div className="inner-column">
                            <div className="sponsors-outer">
                                <div className="row">
                                    {clientImages.map((client, index) => (
                                        <div className="client-block col-lg-4 col-md-6" key={index}>
                                            <figure className="image">
                                                <Link to="/gift">
                                                    <img src={client.src} alt={client.alt} />
                                                </Link>
                                            </figure>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
