import React from 'react';
import Nav from '../../components/v1/header/navbar/nav';
import Footer from '../../components/v1/footer/footer';
import SigninForm from '../../components/v1/form/signin/signinForm';

const SignIn = () =>{
    return (
        <>
        <Nav />
        <SigninForm />
        <Footer />
        </>
        
    )
}
export default SignIn;