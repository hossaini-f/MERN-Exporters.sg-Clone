import React from 'react';
import Header from '../../components/v1/header/header/header';
import Footer from '../../components/v1/footer/footer';
import UserPlanPremium from '../../components/v1/upgrade membership/plan premium/plan.premium';

const PlanPlus = () => {
    return(
        <>
        <Header />
        <UserPlanPremium/>
        <Footer/>
        </>
    )
}
export default PlanPlus;