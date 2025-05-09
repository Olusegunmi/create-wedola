import React from 'react';
// import Layout from '../layouts/Layout';
import PageTitle from '../Components/PageTitle';
import Clients from '../Sections/RSVP/Client.jsx';
// import Contact from '../Sections/RSVP/Contact.jsx';
// import CallToAction from '../Sections/Home/CallToAction.jsx';

function RSVP() {
    return (
        <>
            <div className="page-wrapper">
                {/* <Layout FooterStyle="three"> */}
                    <PageTitle
                        title="RSVP"
                        breadcrumb={[
                            { link: '/', title: 'Home' },
                            { link: '/rsvp', title: 'RSVP' },
                        ]}
                    />
                    {/* <Contact /> */}
                    {/* <CallToAction /> */}
                    <Clients />
                {/* </Layout> */}
            </div>
        </>                
    );
}
export default RSVP;