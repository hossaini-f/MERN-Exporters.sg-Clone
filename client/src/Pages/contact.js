import React from 'react';
import Nav from '../components/v1/header/navbar/nav';
import Footer from '../components/v1/footer/footer';
import ContactUsForm from '../components/v1/form/contact.us/contact.us';

const ContactUs = () => {
    return(
        <>
        <Nav/>
        <ContactUsForm />
        <Footer />
        </>
    )  
}
export default ContactUs;