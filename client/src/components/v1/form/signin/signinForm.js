import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import cookie from 'js-cookie';
import crypto from 'crypto-js';
import {clearError} from '../../../../actions/v1/auth';
import validate from '../../../../validation/loginForm';
import {signIn} from '../../../../actions/v1/auth';
import Loader from '../../loader/loader';

import './statics/style.css';
import Browser from './statics/images/log.png'
import Help from './statics/images/help.png'

const SignInForm = () => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const serverRes = useSelector((state) => state.Auth);
    const [getCookies, setGetGookies] = useState({username: '', password: ''});
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('profile')) history.push("/user/feeds");
        const uuid = cookie.get("uuid");
        const pwdid = cookie.get("pwdid");
        if(uuid){
            const username = crypto.AES.decrypt(uuid, '909090').toString(crypto.enc.Utf8);
            const password = crypto.AES.decrypt(pwdid, '909090').toString(crypto.enc.Utf8);
            setGetGookies({username: username, password: password});
            setFormData({username: username, password: password});
        }
    },[]);
    
    const initialState = {
        username: '',
        password: ''
    }
    const [formData, setFormData] = useState(initialState);
  
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        dispatch(clearError());
    }
    const submitForm = (e) => {
        e.preventDefault();
        dispatch(signIn(formData, history, remember));
    }
    return (
        <>
        <div class="signin-form-container">
            <div class="sigin-leftsidebar">
                <div class="signin-title">Welcome to Medicinesworld.com</div>
                <p class="signin-desc">Exporters.SG helps you to find better trading partners
                 in 600+ product categories from over 200 countries. </p>
                 <ul class="signin-guides">
                     <li>
                         <b>Access exclusive trade tools and services</b><br/>
                         <span>Receive relevant buying leads and products offers, 
                             sell products, source products & more.</span> 
                     </li>
                     <li>
                         <b>Build your business profile</b><br/>
                         <span>Create your business profile page to promote your business. </span> 
                     </li>
                     <li>
                         <b>Connect to thousands of members</b><br/>
                         <span>With over a million hand reviewed business listings, you can network with businesses in your industry instantly. </span> 
                     </li>
                 </ul>
                 <p class="signin-desc">Sign up a trial account now - <b>it's free!</b></p>
                 <div class="signin-signup-btn"><Link to="/signup" style={{textDecoration:"none"}}>Sign Up Now</Link></div>
            </div>
            <div class="sigin-rightsidebar">
                <div class="signin-protect-info">Protect Your Account</div>
                <p class="">Do ensure your browser address bar is showing the Lock icon and "https://www.medicinesworld.com".</p>
                <div class="browser-image"><img src={Browser}/> </div>
                <a><img src={Help} />Learn more on how to protect your account.</a>
                <div class="signin-section">
                    <div>
                    <p>Member Sign In</p>
                    </div>
                    <div class="signinbtn"><a onClick={() => setIsActive(!isActive)}>Sign In</a></div>
                </div>
            </div>
        </div>
        
        <div class="mobile-show">
            <div class="mobile-show-wrapper">
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td valign="left" width="40%"><div>Not a Member?</div></td>
                            <td valign="left" width="90%"><Link to="/signup"><div class="signin-signup-mobile-btn">Sign Up Now</div></Link></td>
                        </tr>
                    </tbody>
                </table>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td><div id="signin-m"><span>Member Sign In</span></div></td>
                        </tr>
                        <tr>
                            <td><div class="signinbtn"><a onClick={() => setIsActive(!isActive)}>Sign In</a></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>    
        
        <div class={isActive ? 'signin-modal show-signin-form' : 'signin-modal'}></div>

        {
            serverRes.errorMsg !== "none" 
            && <div class={isActive ? "error-modal" : "error-modal-hide"}><span>{serverRes.errorMsg}</span></div>
        }
        <div class={isActive ? 'modal-form show-signin-form' : 'modal-form'}>
         
            <table cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr>
                        <td><span>Member Sign In</span></td>
                        <td><div onClick={() => setIsActive(!isActive)}>X</div></td>
                    </tr>
                </tbody>
            </table>
            
            <div class="signin-form-wrapper">
                <form onSubmit={submitForm}>
                    <table cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <div class="signing-label-u">Email</div>
                                        {getCookies.username
                                        ? <input type="text" name="username" value={getCookies.username} />
                                        : <input type="text" name="username" onChange={handleChange} />
                                        }
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <div class="signing-label-p">Password</div>
                                        {getCookies.password 
                                        ? <input type="password" name="password" value={getCookies.password}/>
                                        : <input type="password" name="password" onChange={handleChange}/>
                                        }
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <div id="cookies-signin">
                                    <div><input type="checkbox" id="cookie"/></div>
                                    <label for="cookie" onClick={() => setRemember(!remember)}>Keep me signed in</label>
                                    <div><a><img src={Help} alt=""/></a></div>
                                </div>   
                            </tr>
                            <tr>
                                <td>
                                    <div><a onClick={submitForm} >Sign In</a></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <hr/>
                                    <div><a>Forgot Password?</a></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        
        </>
    )
}
export default SignInForm;