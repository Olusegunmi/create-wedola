import { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from '../assets/images/logo.png';

const MobileMenu = () => {
    // const [isActive, setIsActive] = useState({ status: false, key: "" });
    // const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });

    // const handleClick = (key) => {
    //     setIsActive((prevState) =>
    //         prevState.key === key ? { status: false, key: "" } : { status: true, key }
    //     );
    // };

    // const handleSubClick = (key) => {
    //     setSubIsActive((prevState) =>
    //         prevState.key === key ? { status: false, key: "" } : { status: true, key }
    //     );
    // };

    return (
        <ul className="navigation">
        //     {/* Home Section */}
        //     <li>
        //         <Link to="/">Home</Link>
        
        //         {/* <ul className={isActive.key === "home" ? "d-block" : "d-none"}>
        //             <li><Link to="/">Home 01</Link></li>
        //             <li><Link to="/home-two">Home 02</Link></li>
        //             <li><Link to="/home-three">Home 03</Link></li>
        //             <li><Link to="/home-four">Home 04</Link></li>
        //             <li><Link to="/home-five">Home 05</Link></li>
        //             <li className="dropdown">
        //                 <Link to="/">Invitation</Link>
        //                 <ul className={isSubActive.key === "invitation" ? "d-block" : "d-none"}>
        //                     <li><Link to="/invitation-one">Invitation One</Link></li>
        //                     <li><Link to="/invitation-two">Invitation Two</Link></li>
        //                     <li><Link to="/invitation-three">Invitation Three</Link></li>
        //                     <li><Link to="/invitation-four">Invitation Four</Link></li>
        //                 </ul>
        //                 <div
        //                     className={isSubActive.key === "invitation" ? "dropdown-btn active" : "dropdown-btn"}
        //                     onClick={() => handleSubClick("invitation")}
        //                 >
        //                     <i className="fa fa-angle-down"></i>
        //                 </div>
        //             </li>
        //             <li className="dropdown">
        //                 <Link to="/">Single Page Layouts</Link>
        //                 <ul className={isSubActive.key === "single" ? "d-block" : "d-none"}>
        //                     <li><Link to="/home-one-single">Single Page One</Link></li>
        //                     <li><Link to="/home-two-single">Single Page Two</Link></li>
        //                     <li><Link to="/home-three-single">Single Page Three</Link></li>
        //                     <li><Link to="/home-four-single">Single Page Four</Link></li>
        //                     <li><Link to="/home-five-single">Single Page Five</Link></li>
        //                 </ul>
        //                 <div
        //                     className={isSubActive.key === "single" ? "dropdown-btn active" : "dropdown-btn"}
        //                     onClick={() => handleSubClick("dark")}
        //                 >
        //                     <i className="fa fa-angle-down"></i>
        //                 </div>
        //             </li>
        //             <li className="dropdown">
        //                 <Link to="/">Dark Layouts</Link>
        //                 <ul className={isSubActive.key === "dark" ? "d-block" : "d-none"}>
        //                     <li><Link to="/home-one-dark">Dark Home One</Link></li>
        //                     <li><Link to="/home-two-dark">Dark Home Two</Link></li>
        //                     <li><Link to="/home-three-dark">Dark Home Three</Link></li>
        //                     <li><Link to="/home-four-dark">Dark Home Four</Link></li>
        //                     <li><Link to="/home-five-dark">Dark Home Five</Link></li>
        //                 </ul>
        //                 <div
        //                     className={isSubActive.key === "dark" ? "dropdown-btn active" : "dropdown-btn"}
        //                     onClick={() => handleSubClick("dark")}
        //                 >
        //                     <i className="fa fa-angle-down"></i>
        //                 </div>
        //             </li>
        //         </ul>
        //         <div
        //             className={isActive.key === "home" ? "dropdown-btn active" : "dropdown-btn"}
        //             onClick={() => handleClick("home")}
        //         >
        //             <i className="fa fa-angle-down"></i>
        //         </div> */}
        //     </li>

            {/* Single Links */}
            

            <li><Link to="/story">Story</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li className="logo">
                <Link to="/"><img src={logo2} alt="Wendola" title="Wendola" /></Link>
            </li>
            <li><Link to="/timeline">Timeline</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/rsvp">RSVP</Link></li>
        </ul>
    );
};

export default MobileMenu;
