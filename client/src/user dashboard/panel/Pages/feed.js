import React from 'react';
import Header from '../components/Header/header';
import Feeds from '../components/feeds/user.feed';

const UserFeed = () => {
    return(
        <>
            <Header navChild={"feed"}/>
            <Feeds/>
        </>
    )
}
export default UserFeed;