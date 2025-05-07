import React from 'react';
// import Layout from '../layouts/Layout';
import Header from '../Components/Header';
import Services from '../Sections/Home/Services';
import Team from '../Sections/Home/Team';
import Banner from '../Sections/Home/Banner';
import Countdown from '../Sections/Home/Countdown';
import Gallery from '../Sections/Home/Gallery';
import News from '../Sections/Home/News';
import Clients from '../Sections/Home/Clients';
import Story from '../Sections/Home/Story';
import Testimonials from '../Sections/Home/Testimonials';
import Contact from '../Sections/Home/Contact';
import Gallery2 from '../Sections/Home/Gallery2';
import BackToTop from '../Components/BackToTop';
import Footer from '../Components/Footer';

function Home() {

    return (
        <>
            <div className="page-wrapper">
                {/* <Layout HeaderStyle="three" FooterStyle="three">         */}
                    <Header />
                    <Banner />
                    <Services />
                    <Team />
                    <Story />
                    <Countdown />
                    <Gallery />
                    <Testimonials className="pt-0" />
                    <Clients />
                    <Contact />
                    <News />
                    <Gallery2 className="pt-0"/>
                    <BackToTop />
                    <Footer />
                {/* </Layout> */}
            </div>
        </>        
    );
}
export default Home;
