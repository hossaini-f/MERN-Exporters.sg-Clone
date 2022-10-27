import React from 'react';
import Nav from '../../components/v1/header/navbar/nav';
import Footer from '../../components/v1/footer/footer';
import Member from '../../user dashboard/profile/profile';

const MemberProfile = () => {
    return(
        <>
            <Nav />
            <Member />
            <Footer />
        </>
    )
}
export default MemberProfile;