import React from 'react';
import Nav from '../components/v1/header/navbar/nav';
import AskQuotationForm from '../components/v1/form/askQuote/ask.quote';
import Footer from '../components/v1/footer/footer';


const AskForQuotation = () => {
    return(
        <>
            <Nav />
            <AskQuotationForm />
            <Footer />
        </>
    )
}
export default AskForQuotation;