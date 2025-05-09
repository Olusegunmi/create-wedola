// import React, { useState } from 'react';
// import ModalVideo from 'react-modal-video';
// import contactImage from '../../assets/images/resource/contact1-1.jpg';

// function ContactSection({ className }) {
//     const [isOpen, setOpen] = useState(false);

//     return (
//         <section className={`contact-section ${className || ''}`}>
//             <div className="auto-container">
//                 <div className="row">
//                     {/* Form Column */}
//                     <div className="form-column col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
//                         <div className="inner-column">
//                             <div className="icon-leave bounce-x"></div>
//                             {/* Contact Form */}
//                             <div className="contact-form-one wow fadeInRight mt-0">
//                                 <h6 className="title">Will you attend?</h6>
//                                 <form method="get" action="/" id="contact-form">
//                                     <div className="row">
//                                         <div className="form-group col-lg-6 col-md-6 col-sm-6">
//                                             <div className="radio-box">
//                                                 <label className="custom-radio-box-two">
//                                                     Accept with pleasure
//                                                     <input type="radio" name="radio" />
//                                                     <span className="checkmark"></span>
//                                                 </label>
//                                             </div>
//                                         </div>
//                                         <div className="form-group col-lg-6 col-md-6 col-sm-6">
//                                             <div className="radio-box">
//                                                 <label className="custom-radio-box-two">
//                                                     Decline with regret
//                                                     <input type="radio" name="radio" />
//                                                     <span className="checkmark"></span>
//                                                 </label>
//                                             </div>
//                                         </div>
//                                         <div className="form-group col-lg-12">
//                                             <div className="input-outer">
//                                                 <input type="text" name="name" placeholder="Complete Name" required />
//                                             </div>
//                                         </div>
//                                         <div className="form-group col-lg-12">
//                                             <div className="input-outer">
//                                                 <input type="email" name="email" placeholder="Email Address" required />
//                                             </div>
//                                         </div>
//                                         <div className="form-group col-lg-12">
//                                             <div className="input-outer">
//                                                 <input type="text" name="number" placeholder="Number of Guests" required />
//                                             </div>
//                                         </div>
//                                         <div className="form-group col-lg-12">
//                                             <div className="input-outer">
//                                                 <textarea name="message" placeholder="Notes" required></textarea>
//                                             </div>
//                                         </div>
//                                         <div className="form-group col-lg-12">
//                                             <button className="theme-btn btn-style-one" type="submit" name="submit-form">
//                                                 <span className="btn-title">Submit Now</span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Image Column */}
//                     <div className="video-column col-lg-6 wow fadeInLeft">
//                         <div className="sec-title mt-0 mb-0">
//                             <span className="sub-title">The Wedding Day</span>
//                             <h2>We're getting married!</h2>
//                             <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
//                         </div>
//                         <div className="inner-column pt-50">
//                             <div className="video-box">
//                                 <figure className="image">
//                                     <img src={contactImage} alt="Contact" />
//                                 </figure>
//                                 <a onClick={() => setOpen(true)} className="play-btn">
//                                     <i className="icon fa fa-play" aria-hidden="true"></i>
//                                 </a>
//                                 <div className="icon-leaves-27 rotate-x"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
//         </section>
//     );
// }

// export default ContactSection;
