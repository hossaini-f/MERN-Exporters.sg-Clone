import React from 'react';
import Header from '../components/Header/header';
import Buying from '../components/buying/buying';

const UserFeed = () => {
    return(
        <>
            <Header navChild={"buying"}/>
            <Buying/>
        </>
    )
}
export default UserFeed;