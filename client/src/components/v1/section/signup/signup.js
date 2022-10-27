import React from 'react';
import {Link} from 'react-router-dom';
import './statics/style.css';

const Signup = () => {
    return (
        <div class="sec-signup" align="center">
            <span>Sign up a trial account now - it's free!</span>
            <br />
            <br />
            <Link to="/signup" class="sec-signup-btn">Sign Up Now</Link>
        </div>			
    )
}

export default Signup;