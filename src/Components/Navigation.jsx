import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
       
        <ul className="navigation">
            <li className="current dropdown">
                <Link to="/">Home</Link>
                <ul>
                    <li><Link to="/">Home 01</Link></li>
                    <li><Link to="/home-two">Home 02</Link></li>
                    <li><Link to="/home-three">Home 03</Link></li>
                    <li><Link to="/home-four">Home 04</Link></li>
                    <li><Link to="/home-five">Home 05</Link></li>
                    <li className="dropdown"><Link to="/">Invitation</Link>
                        <ul>
                            <li><Link to="/invitation-one">Invitation One</Link></li>
                            <li><Link to="/invitation-two">Invitation Two</Link></li>
                            <li><Link to="/invitation-three">Invitation Three</Link></li>
                            <li><Link to="/invitation-four">Invitation Four</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="/">Single Layouts</Link>
                        <ul>
                            <li><Link to="/home-one-single">Single Page One</Link></li>
                            <li><Link to="/home-two-single">Single Page Two</Link></li>
                            <li><Link to="/home-three-single">Single Page Three</Link></li>
                            <li><Link to="/home-four-single">Single Page Four</Link></li>
                            <li><Link to="/home-five-single">Single Page Five</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="/">Dark Layouts</Link>
                        <ul>
                            <li><Link to="/home-one-dark">Dark Home One</Link></li>
                            <li><Link to="/home-two-dark">Dark Home Two</Link></li>
                            <li><Link to="/home-three-dark">Dark Home Three</Link></li>
                            <li><Link to="/home-four-dark">Dark Home Four</Link></li>
                            <li><Link to="/home-five-dark">Dark Home Five</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to="/">Header Styles</Link>
                        <ul>
                            <li><Link to="/">Header Style One</Link></li>
                            <li><Link to="/home-two">Header Style Two</Link></li>
                            <li><Link to="/home-three">Header Style Three</Link></li>
                            <li><Link to="/home-four">Header Style Four</Link></li>
                            <li><Link to="/home-five">Header Style Five</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><Link to="/story">Story</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/timeline">Timeline</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/rsvp">RSVP</Link></li>
        </ul>

    );
}

export default Navigation;
