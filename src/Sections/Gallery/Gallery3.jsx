import React from 'react';
import { Link } from 'react-router-dom';

import ClientImg1 from '../../assets/images/clients/1.png';
import ClientImg2 from '../../assets/images/clients/2.png';
import ClientImg3 from '../../assets/images/clients/3.png';
import ClientImg4 from '../../assets/images/clients/4.png';
import ClientImg5 from '../../assets/images/clients/5.png';
import ClientImg6 from '../../assets/images/clients/6.png';

const clientImages = [
  { img: ClientImg1, alt: "Client 1", link: "/gift" },
  { img: ClientImg2, alt: "Client 2", link: "/gift" },
  { img: ClientImg3, alt: "Client 3", link: "/gift" },
  { img: ClientImg4, alt: "Client 4", link: "/gift" },
  { img: ClientImg5, alt: "Client 5", link: "/gift" },
  { img: ClientImg6, alt: "Client 6", link: "/gift" },
];

const ClientsSection = () => {
    return (

        <section className="clients-section">
            <div className="bg bg-pattern-8" />
            <div className="auto-container">
                <div className="row">
                    <div className="title-column col-xxl-4 wow fadeInLeft">
                        <div className="inner-column">
                            <div className="sec-title mb-0">
                                <span className="sub-title">thank you for giving</span>
                                <h2>Valuable Partners</h2>
                                <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
                            </div>
                        </div>
                    </div>
                    <div className="images-column col-xxl-8 wow fadeInRight" data-wow-delay="300ms">
                        <div className="inner-column">
                            <div className="sponsors-outer">
                                <div className="row">
                                    {clientImages.map((client, index) => (
                                        <div className="client-block col-lg-4 col-md-6" key={index}>
                                            <figure className="image">
                                                <Link to={client.link}>
                                                    <img src={client.img} alt={client.alt} />
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
