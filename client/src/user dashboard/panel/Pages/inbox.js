import React from 'react';
import Header from '../components/Header/header';
import InboxComp from '../components/inbox/inbox.comp';

const Inbox = () => {
    
    return(
        <>
            <Header navChild={"inbox"}/>
            <InboxComp/>
        </>
    )
}
export default Inbox;