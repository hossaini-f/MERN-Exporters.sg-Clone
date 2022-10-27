import React from 'react';
import Nav from '../components/v1/header/navbar/nav';
import Footer from '../components/v1/footer/footer';
import UFeaturedProducts from '../components/v1/feature your products/feature.your.products';

const UserFeaturedProducts = () => {
    return (
        <>
            <Nav />
            <UFeaturedProducts />
            <Footer />
        </>
    ) 
}
export default UserFeaturedProducts;