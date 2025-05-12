import React from 'react';
// import Layout from '../layouts/Layout';
import PageTitle from '../Components/PageTitle';
import EventDetails from '../Sections/Events/EventDetails';

function EventDetailsPage() {
    return (
        <>
            <div className="page-wrapper">
                {/* <Layout FooterStyle="three"> */}
                    <PageTitle
                        title="EVENT DETAILS"
                        breadcrumb={[
                            { link: '/', title: 'Home' },
                            { link: '/event', title: 'Event' },
                        ]}
                    />
                    <EventDetails />
                {/* </Layout> */}
            </div>
        </>        
    );
}
export default EventDetailsPage;