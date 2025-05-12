import React from 'react';
import { Link } from 'react-router-dom';
import ServiceImage1 from '../../assets/images/resource/service1-1.jpg';
import ServiceImage2 from '../../assets/images/resource/service1-2.jpg';
import ServiceImage3 from '../../assets/images/resource/service1-3.jpg';

const services = [
  {
    image: ServiceImage1,
    title: "The Reception",
    date: "December 23, 2025 - Sunday",
    time: "2:00 PM – 3:30 PM",
    address: "Ironic Town gnette, 19 West 21st Str. NY",
    phone: "+1 843-853-1810",
    icon: "flaticon-wedding-arch",
    link: "/event"
  },
  {
    image: ServiceImage2,
    title: "The Ceremony",
    date: "December 23, 2025 - Sunday",
    time: "2:00 PM – 3:30 PM",
    address: "Ironic Town gnette, 19 West 21st Str. NY",
    phone: "+1 843-853-1810",
    icon: "flaticon-marriage",
    link: "/event"
  },
  {
    image: ServiceImage3,
    title: "Music Party",
    date: "December 23, 2025 - Sunday",
    time: "2:00 PM – 3:30 PM",
    address: "Ironic Town gnette, 19 West 21st Str. NY",
    phone: "+1 843-853-1810",
    icon: "flaticon-musical-notes",
    link: "/event"
  }
];

function Service() {
    return (
        <section className="services-section">
            <div className="auto-container">
                
                <div className="row">
                  {services.map((service, index) => (
                    <div className={`services-block col-lg-4 wow fadeInUp`} data-wow-delay={`${index * 300}ms`} key={index}>
                      <div className="inner-box">
                        <div className="frame"></div>
                        <div className="image-box">
                          <figure className="image">
                            <img src={service.image} alt={service.title} />
                          </figure>
                          <span className="icon-shape"></span>
                          <i className={`icon ${service.icon}`}></i>
                        </div>
                        <div className="content-box">
                          <h6 className="title">
                            <Link to={service.link}>{service.title}</Link>
                          </h6>
                          <div className="date">{service.date}</div>
                          <div className="time">{service.time}</div>
                          <span className="icon-divider-3"></span>
                          <div className="address">{service.address}</div>
                          <Link to={`tel:${service.phone}`} className="phone">{service.phone}</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </section>
    );
}

export default Service;
