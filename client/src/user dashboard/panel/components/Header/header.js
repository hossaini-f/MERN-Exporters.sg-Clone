import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import './statics/style.css';
import Logo from './statics/images/homeLogo.png';
const HeaderNav = (props) => {
    const [ show, setShow ] = useState(false);
    const navActive = props.navChild;
    
    const fetchData = useSelector((state)=> state.Profile);
    const [profile, setProfile] = useState({logo: "none"});
    useEffect(() => {
    if(fetchData.advanceInfo){
            setProfile({...profile, logo: fetchData.advanceInfo.advance.logo});
        }
    });
    

    return(
        <>
            <div id="user-nav">
                <div id="user-navbar">
                    <div onClick={() => setShow(!show)}>
                        <i class="fa fa-bars"></i>
                    </div>
                    <div>
                        <img src={Logo} width="40px" style={{marginTop:"-5px"}}/>
                    </div>
                    <ul class= { show ? "x-show" : "x-hide" }>
                        <li><Link to="/" >
                        <img src={Logo} width="50px" style={{marginBottom:"-17px"}}/> </Link></li>
                        <li ><Link to="/user/feeds" class={navActive === "feed" && "active-nav-item" }>Feed</Link></li>
                        <li ><Link to="/user/inbox" class={navActive === "inbox" && "active-nav-item" }>Inbox</Link></li>
                        <li ><Link to="/user/buying" class={navActive === "buying" && "active-nav-item" }>Buying</Link></li>
                        <li ><Link to="/user/selling" class={navActive === "selling" && "active-nav-item" }>Selling</Link></li>
                        <li><a>Upgrade</a></li>
                    </ul>
                </div>
                <div id="user-profile-n">
                    <Link to="/user/member-profile" class={navActive === "profile" && "active-nav-item" }>
                        <div>
                            { profile.logo !== "none" &&
                            <img src={profile.logo} width="30px" alt="" />
                                 
                             }
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default HeaderNav;