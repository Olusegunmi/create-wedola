import React from 'react';
import BackgroundImage from '../../assets/images/background/1.jpg';

function CallToAction({ className }) {
    return (
        <section id="contact" className={`call-to-action ${className || ''}`}>
            <div className="bg bg-image" style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
            <div className="icon-flowers"></div>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="content-box wow fadeInUp">
                        <i className="icon flaticon-marriage"></i>
                        <h2 className="title">Happy Wedding Day!!! <br /> Can't Wait to Watch You Marry </h2>
                        <div className="text">PLEASE RSVP BY NOVEMBER THE 14TH, LET US KNOW YOU'RE COMING! </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
