import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';

function Footer() {
    return (

        <footer className="main-footer footer-style-three">
            <div className="icon-leaves-12"></div>
            <div className="icon-leaves-13"></div>
            <div className="icon-bubbles"></div>
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="footer-widget about-widget">
                                <div className="widget-content">
                                {/* <div className="logo"><Link to="/"><img src={logo} alt="Wendola" /></Link></div> */}
                                <div className="text">Semper libero, sit amet blandit vel, rhoncus <br /> ven enatis luctus pulvinar, hendrerit id, lore <br/> m. Semp er libero, sit amet blandit vel.</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="footer-widget contact-widget">
                                <h6 className="widget-title">Contact Information</h6>
                                <div className="widget-content">
                                    <ul className="contact-list-three light">
                                        <li><i className="icon far fa-envelope" /><Link to="/">username@domain.com</Link></li>
                                        <li><i className="icon far fa-mobile" /><Link to="/">+(123) 456 - 7890 - 456 - 7890</Link></li>
                                        <li><i className="icon fa fa-map-marker-alt" /><Link to="/">Street New York</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="footer-widget subscribe-widget">
                                <h6 className="widget-title">Subscribe Newsletter</h6>
                                <div className="widgets-content">
                                    <div className="text">Receive fresh blog content and invites to our webinars.</div>
                                    <div className="newsletter-form-two">
                                        <form method="get" action="/">
                                            <div className="form-group">
                                                <input type="email" name="email" className="email" placeholder="Email Address"/>
                                                <button type="button" className="theme-btn"><i className="far fa-envelope"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="outer-container">
                        <div className="copyright-text">Copyright © Vendola kodesolution . All rights reserved.</div>
                        <div className="icons-box">
                            <ul className="social-icon-one">
                                <li><Link to="/"><i className="icon fab fa-facebook-f" /></Link></li>
                                <li><Link to="/"><i className="icon fab fa-google" /></Link></li>
                                <li><Link to="/"><i className="icon fab fa-twitter" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
