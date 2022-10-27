import React from 'react';
import Header from '../components/v1/header/navbar/nav';
import Footer from '../components/v1/footer/footer'; 
import GetQouteForm from '../components/v1/form/getQuotes/getQuote';

const GetQuotation = () => {
    return (
        <>
            <Header />
            <GetQouteForm />
            <Footer />
        </>
        
    )
}

export default GetQuotation;