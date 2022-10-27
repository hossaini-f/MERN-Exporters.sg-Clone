import React from 'react';
import Header from '../components/Header/header';
import BroadCast from '../components/inbox/broadcast';

const Inbox = () => {
    return(
        <>
            <Header navChild={"inbox"}/>
            <BroadCast/>
        </>
    )
}
export default Inbox;