import React from 'react';
// import Layout from '../layouts/Layout';
import PageTitle from '../Components/PageTitle';
import Gallery from '../Sections/Gallery/Gallery';
import Gallery2 from '../Sections/Gallery/Gallery2';
import Gallery3 from '../Sections/Home/Gallery';

function GalleryPage() {
    return (
        <>
            <div className="page-wrapper">
                {/* <Layout FooterStyle="three"> */}
                    <PageTitle
                        title="Our Gallery"
                        breadcrumb={[
                            { link: '/', title: 'Home' },
                            { link: '/gallery', title: 'Gallery' },
                        ]}
                    />
                    <Gallery />
                    <Gallery2 />
                    <Gallery3 />
                {/* </Layout> */}
            </div>
        </>        
    );
}
export default GalleryPage;