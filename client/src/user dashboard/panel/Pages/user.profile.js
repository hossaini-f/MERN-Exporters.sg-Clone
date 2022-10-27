import React from 'react';
import Header from '../components/Header/header';
import Profile from '../components/profile/profile';

const UserProfile = () => {
    return(
        <>
            <Header navChild={"profile"}/>
            <Profile/>
        </>
    )
}
export default UserProfile;