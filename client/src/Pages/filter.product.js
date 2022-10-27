import React from 'react';
import Header from '../components/v1/header/header/header';
import Footer from '../components/v1/footer/footer';
import FilterProducts from '../components/v1/filter.category/products/filter.products';

const FilteredPorducts = () => {
    return (
        <>
            <Header />
            <FilterProducts/>
            <Footer/>
        </>
    )
}
export default FilteredPorducts;