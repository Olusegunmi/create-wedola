import React from 'react';
// import Layout from '../layouts/Layout';
import PageTitle from '../Components/PageTitle';
import Story from '../Sections/Story/Story';
import Couple from '../Sections/Story/Couple';
import Gallery from '../Sections/Story/Gallery';
import Header from '../Components/Header';

function StoryPage() {
    return (
        <>
            <div className="page-wrapper">
                {/* <Layout FooterStyle="three"> */}
                   <Header />
                    <PageTitle
                        title="Our Story"
                        breadcrumb={[
                            { link: '/', title: 'Home' },
                            { link: '/story', title: 'Our Story' },
                        ]}
                    />
                    <Story />
                    <Couple />
                    <Gallery />
                {/* </Layout> */}
            </div>
        </>                
    );
}
export default StoryPage;