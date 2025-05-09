import React from 'react';
import { Link } from 'react-router-dom';
import EventImage1 from '../../assets/images/resource/event2-2.jpg';
import EventImage2 from '../../assets/images/resource/event2-4.jpg';
import EventImage3 from '../../assets/images/resource/event2-3.jpg';
import EventImage4 from '../../assets/images/resource/event2-1.jpg';

const events = [
  {
    date: '12 November',
    image: EventImage1,
    title: 'First Meetup',
    time: 'AT 2020',
    description: 'From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion.',
    alt: 'First Meetup',
    delay: '0ms',
    style: ''
  },
  {
    date: '01 January',
    image: EventImage2,
    title: 'First Date',
    time: 'AT 2021',
    description: 'From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion.',
    alt: 'First Date',
    delay: '200ms',
    style: 'style-two'
  },
  {
    date: '10 Feb',
    image: EventImage3,
    title: 'Engagement',
    time: 'AT 2021',
    description: 'From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion.',
    alt: 'Engagement',
    delay: '400ms',
    style: ''
  },
  {
    date: '14 Feb',
    image: EventImage4,
    title: 'Wedding',
    time: 'AT 2:00 PM',
    description: 'From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion.',
    alt: 'Wedding',
    delay: '0ms',
    style: 'style-two'
  }
];


function EventSection() {
    return (
        <section className="event-section-two">
            <div className="anim-icons full-width">
                <div className="icon-flowers-6 bounce-y"></div>
                <div className="icon-leaves-5 bounce-x"></div>
                <div className="icon-leaves-6 bounce-x"></div>
            </div>
            <div className="auto-container">
                <div className="sec-title text-center style-two">
                    <span className="sub-title">Wedding First Meet to Wedding</span>
                    <h2>Timeline</h2>
                </div>
                <div className="row">
                    {events.map((event, index) => (
                        <div className={`event-block-two wow fadeInRight ${event.style}`} data-wow-delay={event.delay} key={index}>
                            <div className="inner-box">
                                <div className="date-column">
                                    <div className="date-box">
                                        <div className="date"><span>{event.date.split(' ')[0]}</span> {event.date.split(' ')[1]}</div>
                                        <div className="icon-flower-6"></div>
                                        <div className="icon-flower-7"></div>
                                    </div>
                                </div>
                                <div className="image-column">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link to="/event" className="lightbox-image">
                                                <img src={event.image} alt={event.alt} />
                                            </Link>
                                        </figure>
                                    </div>
                                </div>
                                <div className="content-column">
                                    <div className="content-box">
                                        <div className="time"> <i className="icon far fa-clock"></i> <p>{event.time}</p></div>
                                        <h4 className="title"><Link to="/event">{event.title}</Link></h4>
                                        <div className="text"> {event.description} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EventSection;
