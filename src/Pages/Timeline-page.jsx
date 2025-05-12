import React from 'react';
// import Layout from '../layouts/Layout';
import PageTitle from '../Components/PageTitle';
import Event from '../Sections/Timeline/Event';
import Couple from '../Sections/Timeline/Couple';
import Gallery from '../Sections/Home/Gallery';
import Header from '../Components/Header';

function TimelinePage() {
    return (
        <>
            <div className="page-wrapper">
                {/* <Layout FooterStyle="three"> */}
                    <Header />
                    <PageTitle
                        title="Our Timeline"
                        breadcrumb={[
                            { link: '/', title: 'Home' },
                            { link: '/story', title: 'Our Timeline' },
                        ]}
                    />
                    <Event />
                    <Couple />
                    <Gallery />
                {/* </Layout> */}
            </div>
        </>                
    );
}
export default TimelinePage;