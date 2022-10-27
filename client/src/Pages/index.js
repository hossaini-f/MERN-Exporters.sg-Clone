import React from 'react';

import Header from '../components/v1/header/header/header';
import Footer from '../components/v1/footer/footer';
import Signup from '../components/v1/section/signup/signup';
import Testimonial from '../components/v1/section/testimonial/testimonial';
import Slider from '../components/v1/section/slider/slides';
import PopularCategories from '../components/v1/section/categories/popular.category';
import Promote from '../components/v1/section/promote/promote';
import FeaturedProducts from '../components/v1/section/featured Products/featured.products';

const HomePage = () => {
    return (
        <>
            <Header />
            <FeaturedProducts />
            <Promote />
            <PopularCategories />
            <Slider />
            <Testimonial />
            <Signup/>
            <Footer/>
        </>
    )
}
export default HomePage;