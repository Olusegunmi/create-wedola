import React from 'react';
// import Layout from '../layouts/Layout';
import PageTitle from '../Components/PageTitle';
import NewsDetails from '../Sections/News/NewsDetails';

function NewsDetailsPage() {
    return (
        <>
            <div className="page-wrapper">
                {/* <Layout FooterStyle="three"> */}
                   <Header />
                    <PageTitle
                        title="Contact Us"
                        breadcrumb={[
                            { link: '/', title: 'Home' },
                            { link: '/contact', title: 'Contact Us' },
                        ]}
                    />
                    <NewsDetails />
                {/* </Layout> */}
            </div>
        </>                
    );
}
export default NewsDetailsPage;