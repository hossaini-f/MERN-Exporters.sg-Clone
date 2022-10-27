import React from 'react';
import Header from '../components/v1/header/header/header';
import Footer from '../components/v1/footer/footer';
import PrivacyComponents from '../components/v1/privacy statement/privacy.statement';


const PrivacyStatement = () => {
    return(
        <>
        <Header/>
        <PrivacyComponents/>
        <Footer/>
        </>
    )
}
export default PrivacyStatement;