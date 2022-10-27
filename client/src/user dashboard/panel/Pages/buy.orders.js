import React from 'react';
import Header from '../components/Header/header';
import OrderComp from '../components/shared/buy.order';

const Inbox = () => {
    return(
        <>
            <Header navChild={"buying"}/>
            <OrderComp/>
        </>
    )
}
export default Inbox;