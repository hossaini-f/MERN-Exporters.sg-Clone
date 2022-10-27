import React from 'react';
import Header from '../components/Header/header';
import Selling from '../components/selling/selling';

const UserFeed = () => {
    return(
        <>
            <Header navChild={"selling"}/>
            <Selling/>
        </>
    )
}
export default UserFeed;