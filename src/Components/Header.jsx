import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollPosition from "../lib/useScrollPosition";
import MainLogoBlack from '../assets/images/logo.png';
import MainLogoWhite from '../assets/images/logo.png';
import Stickylogo from '../assets/images/logo-4.png';
import HiddenBarLogo from '../assets/images/logo-4.png';
import Mobilelogo from '../assets/images/logo.png';
import Navigation from './Navigation.jsx';
import MobileMenu from './MobileMenu.jsx';

function Header({ className = '' }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);
    const [isHiddenBarVisible, setHiddenBarVisible] = useState(false);
    const isSticky = useScrollPosition(100); 

    useEffect(() => {
        const checkDarkMode = () => setDarkMode(document.body.classList.contains('dark-mode'));
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.classList.toggle('mobile-menu-visible', isMobileMenuOpen);
        return () => document.body.classList.remove('mobile-menu-visible');
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    const toggleHiddenBar = () => {
        setHiddenBarVisible(prev => !prev);
        document.body.classList.toggle('active-hidden-bar');
    };

    useEffect(() => {
        return () => document.body.classList.remove('active-hidden-bar');
    }, []);

    return (
        <header className={`main-header header-style-three ${className}`}>
            <div className="header-lower">
                <div className="auto-container">
                    <div className="main-box">
                        <div className="logo">
                            <Link to="/">
                                <img src={isDarkMode ? MainLogoWhite : MainLogoBlack} alt="Wendola" title="Wendola" />
                            </Link>
                        </div>
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <Navigation />
                            </nav>
                        </div>
                        <div className="outer-box">
                            <button className="ui-btn ui-btn toggle-hidden-bar" onClick={toggleHiddenBar}>
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                            </button>
                            <ul className="social-icon-one">
                                <li><Link to="/"><i className="icon fab fa-facebook-f" /></Link></li>
                                <li><Link to="/"><i className="icon fab fa-google-plus" /></Link></li>
                                <li><Link to="/"><i className="icon fab fa-twitter" /></Link></li>
                            </ul>
                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <span className="icon lnr-icon-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden-bar-back-drop" onClick={toggleHiddenBar} />

            <div className="hidden-bar">
                <div className="inner-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <Link to="/"><img src={HiddenBarLogo} alt="Hidden Bar Logo" /></Link>
                        </div>
                        <div className="close-btn" onClick={toggleHiddenBar}>
                            <i className="icon fa fa-times" />
                        </div>
                    </div>
                    <div className="text-box">
                        <h4 className="title">Transforming your ideas into digital reality</h4>
                        <div className="text">
                            Sed ut perspiciatis unde omnis natus error voluptatem sanctum doloremque laudantium, totam rem aperiam, eaque ipsa quae ab nllo inventore veritatis quasi architecto beatae vitae.
                        </div>
                    </div>
                    <ul className="contact-list-one">
                        <li>
                            <i className="icon lnr-icon-phone-handset" />
                            <span className="title">Call Now</span>
                            <div className="text"><Link to="/">+92 (8800) - 98670</Link></div>
                        </li>
                        <li>
                            <i className="icon lnr-icon-envelope1" />
                            <span className="title">Send Email</span>
                            <div className="text"><Link to="/">help@company.com</Link></div>
                        </li>
                        <li>
                            <i className="icon lnr-icon-map-marker" />
                            <span className="title">Address</span>
                            <div className="text">66 Broklyant, New York India 3269</div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="/"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="/"><i className="fab fa-pinterest" /></Link></li>
                        <li><Link to="/"><i className="fab fa-instagram" /></Link></li>
                    </ul>
                </div>
            </div>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="menu-backdrop" onClick={closeMobileMenu} />
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <Link to="/"><img src={Mobilelogo} alt="Mobile Logo" /></Link>
                        </div>
                        <div className="close-btn" onClick={closeMobileMenu}>
                            <i className="icon fa fa-times" />
                        </div>
                    </div>
                    <MobileMenu />
                    <ul className="contact-list-one light">
                        <li>
                            <i className="icon lnr-icon-phone-handset" />
                            <span className="title">Call Now</span>
                            <div className="text"><Link to="/">+92 (8800) - 98670</Link></div>
                        </li>
                        <li>
                            <i className="icon lnr-icon-envelope1" />
                            <span className="title">Send Email</span>
                            <div className="text"><Link to="/">help@company.com</Link></div>
                        </li>
                        <li>
                            <i className="icon lnr-icon-map-marker" />
                            <span className="title">Address</span>
                            <div className="text">66 Broklyant, New York India 3269</div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="/"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="/"><i className="fab fa-pinterest" /></Link></li>
                        <li><Link to="/"><i className="fab fa-instagram" /></Link></li>
                    </ul>
                </nav>
            </div>

            <div className={`sticky-header ${isSticky ? "fixed-header" : ""} animated slideInDown' : ''}`}>
                <div className="auto-container">
                    <div className="inner-container">
                        <Link to="/" className="logo">
                            <img src={Stickylogo} alt="Sticky Logo" />
                        </Link>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <Navigation />
                            </nav>
                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <span className="icon lnr-icon-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
