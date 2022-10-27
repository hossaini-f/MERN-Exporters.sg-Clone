import React from 'react';
import Header from '../components/v1/header/header/header';
import Footer from '../components/v1/footer/footer';
import AllCategories from '../components/v1/all categories/categories/all.categories';

const BrowseCategories = () => {
    return (
        <>
            <Header/>
            <AllCategories />
            <Footer/>
        </>
    )
}
export default BrowseCategories;