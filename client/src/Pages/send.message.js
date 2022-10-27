import React from 'react';
import Nav from '../components/v1/header/navbar/nav';
import Footer from '../components/v1/footer/footer';
import SendMessageForm from '../components/v1/form/sendMessage/send.message';

const SendMessage = () => {
    return(
        <>
            <Nav/>
            <SendMessageForm/>
            <Footer/>
        </>
    )
}
export default SendMessage;