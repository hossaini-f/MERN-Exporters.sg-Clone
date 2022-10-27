import React from 'react';
import Header from '../components/Header/header';
import OrderComp from '../components/shared/sell.order';

const Inbox = () => {
    return(
        <>
            <Header navChild={"selling"}/>
            <OrderComp/>
        </>
    )
}
export default Inbox;