import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import {logout} from '../../../../actions/v1/auth';
import '../statics/navbar/style.css';
import MobileLogo from '../statics/navbar/images/logo_mobile.png';
import Arrow from '../statics/navbar/images/action.gif';
import Menu from '../statics/navbar/images/menu.png';
import navFeeds from '../statics/navbar/icon/navFeed.png';
import navInbox from '../statics/navbar/icon/navInbox.png';
import navSetting from '../statics/navbar/icon/navSettings.png';
import Feeds from '../statics/navbar/icon/feeds.png';
import Buying from '../statics/navbar/icon/buy.png';
import Selling from '../statics/navbar/icon/sell.png';
import Profile from '../statics/navbar/icon/profile.png';
import Rating from '../statics/navbar/icon/rating.png';
import Account from '../statics/navbar/icon/account.png';
import Category from '../statics/navbar/icon/category.png';
import Help from '../statics/navbar/icon/help.png';
import Support from '../statics/navbar/icon/support.png';
import Logout from '../statics/navbar/icon/logout.png';
import Logo from '../statics/navbar/images/meLogo.png';

const Nav = () => {

       const [activeClass, setActiveClass] = useState(false);
       const dispatch = useDispatch();
       const history = useHistory();
       const profile = localStorage.getItem("profile");
      
       const handleLogout = (e) => {
            e.preventDefault();
            dispatch(logout(history));
       }

    return(
        <div class="top-nav">
            <header>
                <div class="menu-toggle" onClick={ () => setActiveClass(!activeClass)}><i class="fa fa-bars" aria-hidden="true"></i></div>
                <Link to="/"><div class="logo"> <img src={Logo} width="160px" alt="Logo"/></div></Link>
                <nav class={activeClass ? 'active' : ''}>
                    <ul>
                        <li class='sub-menu'><a href="#">Buyers <img src={Arrow} style={{width:"12px"}}/></a>
                            <ul>
                                <li>
                                    {profile
                                    ?
                                        <Link to="/user/buying">Get Quotations</Link>
                                    :
                                        <Link to="/get-quotation">Get Quotations</Link>
                                    }
                                </li>
                                <li><Link to="user/buying-orders">View Orders</Link></li>
                                <li><Link to="/browse-categories">Browse Categories</Link></li>
                                <li><a>Buers Guide</a></li>
                            </ul>
                        </li>
                        <li class="sub-menu"><a>Sellers <img src={Arrow} style={{width:"12px"}}/></a>
                            <ul>
                                <li><Link to="/user/selling">Sell Products</Link></li>
                                <li><a>Find Buyers</a></li>
                                <li><Link to="user/selling-orders">View Orders</Link></li>
                                <li><a>Sellers Guide</a></li>
                                <li><Link to="/featured-products">Featured Products</Link></li>
                                <li><Link to="/upgrade-membership">Upgrade Membership</Link></li>
                            </ul>
                        </li>
                        { profile && (
                        <>
                            <li class="sub-menu"><a>
                                <img src={navFeeds} style={{width:"40px",marginTop:"7px"}}/> 
                                <img src={Arrow} style={{width:"12px",marginBottom:"12px"}}/></a>
                                <ul>
                                    <li><Link to="/user/feeds"><img src={Feeds} style={{float:"left",paddingRight:"5px",width:"20px",marginTop:"6px"}}/> Feeds</Link></li>
                                    <li><Link to="/user/buying"><img src={Buying} style={{float:"left",paddingRight:"5px",width:"20px",marginTop:"6px"}}/>Buying</Link></li>
                                    <li><Link to="/user/selling"><img src={Selling} style={{float:"left",paddingRight:"5px",width:"20px",marginTop:"6px"}}/>Selling</Link></li>
                                </ul>
                            </li>
                            <li id="join-now"><Link to="/user/inbox"><img src={navInbox} style={{float:"left",paddingLeft:"7px",paddingRight:"7px",width:"31px",marginTop:"12px"}}/></Link></li>
                            <li class="sub-menu"><a><img src={navSetting}/> <img src={Arrow} style={{width:"12px",marginBottom:"9px"}}/></a>
                                <ul>
                                    <li><Link to="/user/member-profile"><img src={Profile} style={{float:"left",paddingRight:"5px",width:"20px",marginTop:"6px"}}/> Profile</Link></li>
                                    <li><Link to="/user/member-profile"><img src={Rating} style={{float:"left",paddingRight:"5px",width:"20px",marginTop:"6px"}}/> Rating</Link></li>
                                    <li><Link to="/user/member-profile"><img src={Account} style={{float:"left",paddingRight:"5px",width:"20px",marginTop:"6px"}}/> Account</Link></li>
                                    <li><Link to="/user/member-profile"><img src={navInbox} style={{float:"left",paddingRight:"5px",width:"20px",marginTop:"6px"}}/> Email Subscriptions</Link></li>
                                    <li><Link to="/user/manage-category"><img src={Category} style={{float:"left",paddingRight:"5px",width:"20px",marginTop:"6px"}}/> Manage Categories</Link></li>
                                    <li><a><img src={Help} style={{float:"left",paddingRight:"5px",width:"20px",marginTop:"6px"}}/> Help</a></li>
                                    <li><Link tpo="/contact-us"><img src={Support} style={{float:"left",paddingRight:"5px",width:"20px",marginTop:"6px"}}/> Contact Us</Link></li>
                                    <li><a onClick={handleLogout}><img src={Logout} style={{float:"left",paddingRight:"5px",width:"20px",marginTop:"6px"}}/> Logout</a></li>
                                </ul>
                            </li>
                        </>
                        ) 
                        }
                        {!profile && (
                            <>
                        <li id="join-now"><Link to="/signup">Join Now</Link></li>
                        <li id="sign-in"><Link to="/signin" >Sign In</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Nav;