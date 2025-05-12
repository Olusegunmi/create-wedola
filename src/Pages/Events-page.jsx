import React from 'react';
// import Layout from '../layouts/Layout';
import PageTitle from '../Components/PageTitle';
import Services from '../Sections/Events/Service';
import Clients from '../Sections/Events/Client';
import Header from '../Components/Header';


function Events() {
    return (
        <>
            <div className="page-wrapper">
                {/* <Layout FooterStyle="three"> */}
                   <Header />
                    <PageTitle
                        title="EVENTS"
                        breadcrumb={[
                            { link: '/', title: 'Home' },
                            { link: '/event', title: 'EVENTS' },
                        ]}
                    />
                    <Services />
                    <Clients />
                {/* </Layout> */}
            </div>
        </>
    );
}
export default Events;