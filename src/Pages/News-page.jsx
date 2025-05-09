import React from 'react';
// import Layout from '../layouts/Layout';
import PageTitle from '../Components/PageTitle';
import News from '../Sections/News/NewsGrid';

function NewsPage() {
    return (
        <>
            <div className="page-wrapper">
                {/* <Layout FooterStyle="three"> */}
                    <PageTitle
                        title="News Grid"
                        breadcrumb={[
                            { link: '/', title: 'Home' },
                            { link: '/news', title: 'News' },
                        ]}
                    />
                    <News/>
                {/* </Layout> */}
            </div>
        </>                
    );
}
export default NewsPage;