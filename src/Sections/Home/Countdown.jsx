import React, { useState, useEffect } from 'react';

function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateTimeLeft = () => {
        const targetDate = new Date('2027-04-22T00:00:00'); 
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
        } else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    useEffect(() => {
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer); 
    }, []);

    return (
        <section className="countdown-section-three p-0">
            <div className="anim-icons">
                <div className="icon-leaves-10"></div>
                <div className="icon-leaves-11"></div>
            </div>
            <div className="small-container">
                <div className="outer-box wow fadeInUp">
                    <div className="time-counter">
                        <div className="time-countdown">
                            <div className="time-box">
                                <span>{timeLeft.days}</span> <small>Days</small>
                            </div>
                            <div className="time-box">
                                <span>{timeLeft.hours}</span> <small>Hours</small>
                            </div>
                            <div className="time-box">
                                <span>{timeLeft.minutes}</span> <small>Minutes</small>
                            </div>
                            <div className="time-box">
                                <span>{timeLeft.seconds}</span> <small>Seconds</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Countdown;
