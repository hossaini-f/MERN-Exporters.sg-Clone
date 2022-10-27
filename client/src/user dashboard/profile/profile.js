import React from 'react';
import Header from '../profile/components/header.profile/header.profile';
import ProfileDetails from '../profile/components/header.profile.details/profile.details';
import ProfileVerification from './components/header.profile.verification/profile.verification';
import SellingProducts from './components/selling.profile/selling.products';
import BuyingLeads from './components/buying.leads/buying.leads';
import CProfile from './components/company.profile/company.profile';
import JCategory from './components/join.category/joined.category';
import Popularity from './components/popularity/popularity';
import SimilarMembers from './components/similar.member/similar.member';
import SimilarMember from './components/similar.member/similar.member';
import FeatureProducts from './components/feature.products/feature.products';

const Profile = () => {
    return (
        <>
        <Header />
        <ProfileDetails/>
        <ProfileVerification/>
        <SellingProducts />
        <BuyingLeads/>
        <CProfile/>
        <JCategory/>
        <Popularity/>
        <SimilarMembers/>
        <FeatureProducts/>
        </>
    )
}
export default Profile;