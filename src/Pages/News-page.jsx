import React from 'react';
// import Layout from '../layouts/Layout';
import PageTitle from '../Components/PageTitle';
import News from '../Sections/News/NewsGrid';
import Header from '../Components/Header';

function NewsPage() {
    return (
        <>
            <div className="page-wrapper">
                {/* <Layout FooterStyle="three"> */}
                 <Header />
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