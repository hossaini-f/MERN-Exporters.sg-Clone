import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './statics/style.css';


const SignInAlert = (props) => {
    const [show, setShow] = useState(true);
    const hideAlert = () => {
        setShow(false);
    }
    
    return (
        <>
        <div class={show ? "wrapper-div" : "hide-alert"}></div>
        <div class={show ? "content-div-c" : "hide-alert"}>
            <div>
                <div class="H2">Sign In Required</div>
                <div>
                    <span class="T1" onClick={()=>{hideAlert();props.onClick()}}>X</span>
                </div>
            </div>
            <div>
                <p class="T1">Please sign into your account first.</p>
                <Link to="/signin">Sign in</Link>
            </div>
        </div>
        </>
    )
}
export default SignInAlert;