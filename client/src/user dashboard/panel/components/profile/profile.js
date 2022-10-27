import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import {logout} from '../../../../actions/v1/auth';
import './statics/style.css';
import Profile from './statics/icons/profile.png';
import VF from './statics/icons/vf.png';
import Bank from './statics/icons/bank.png';
import Trust from './statics/icons/trust.png';
import Review from './statics/icons/reviews.png';
import Award from './statics/icons/award.png';
import Logo from './statics/icons/homeLogo.png';
import Unknown from './statics/icons/unknown.png';

import EditProfilePhoto from './components/edit.photo';
import EditBasicInfo from './components/basic.info';
import EditAdvanceInfo from './components/advance.info';
import EditInstantMessage from './components/instant.msg';
import EditTrustNetwork from './components/trust.network';

import {getBasicInfo, getAdvanceInfo, getInstantMessaging, getAccount, updateEmailSubs} from '../../../../actions/v1/admin.profile';

const UserProfile = () => {
    const [bToggle, setBToggle] = useState(false);
    const [aToggle, setAToggle] = useState(false);
    const [iToggle, setIToggle] = useState(false);
    const [rToggle, setRToggle] = useState(false);
    const [acToggle, setAcToggle] = useState(false);

    const [editPhoto, setEditPhoto] = useState(false);
    const [editBasicInfo, setEditBasicInfo] = useState(false);
    const [editAdvanceInfo, setEditAdvanceInfo] = useState(false);
    const [editInstantMessage, setEditInstantMessage] = useState(false);
    const [editTrustNetwork, setEditTrustNetwork] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    // Get Member Id
    const profileId = JSON.parse(localStorage.getItem('profile')).result.id;
    
    const fetchData = useSelector((state) => state.Profile);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout(history));
    }
    
    const updateSubscription = (e) => {
        e.preventDefault();
        dispatch(updateEmailSubs(profileId));
    }

    useEffect(() => {
        dispatch(getBasicInfo(profileId));
        dispatch(getAdvanceInfo(profileId));
        dispatch(getInstantMessaging(profileId));
        dispatch(getAccount(profileId));
    }, [])

    return(
        <>
        <div id="f-profile-container">
            <div id="f-profile-wrapper">
                <div id="f-profile-btns">
                    <div>Profile</div>
                    <div>
                        <div><i class="fa fa-eye"></i> &nbsp;Views</div>
                        <div><i class="fa fa-signal"></i> &nbsp;Stats</div>
                        <div onClick={handleLogout}><i class="fa fa-sign-out"></i> &nbsp;Logout</div>
                    </div>
                </div> 
                {fetchData.advanceInfo && fetchData.basicInfo 
                && fetchData.advanceInfo.advance.logo
                && fetchData.advanceInfo.advance
                && fetchData.basicInfo.member
                    ?
                    null
                    :
                <div id="f-profile-completion">
                    <div>
                        <span>Your profile completion score:</span>
                        <div>
                            {fetchData.advanceInfo && fetchData.advanceInfo.advance.logo
                                ? "60%" 
                                : "33%"
                            }
                        </div>
                    </div>
                    <div>
                        <span>Improve your profile by following the recommendations in the section below:</span>
                        <div>
                            <div>
                                <a>Upload company logo 
                                {fetchData.advanceInfo && fetchData.advanceInfo.advance.logo ? "(100% completed)" : "(0% completed)"}</a>
                            </div>
                            <div>
                                <a>Complete Basic Profile 
                                {fetchData.basicInfo && fetchData.basicInfo.member ? "(100% completed)" : "(0% completed)"}
                                </a>
                            </div>
                            <div>
                                <a>Complete Advance Profile 
                                {fetchData.advanceInfo && fetchData.advanceInfo.advance ? "(100% completed)" : "(0% completed)"}
                                </a>
                            </div>
                            <div>
                                <a>Join minimum 3 categories (33% completed)</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                }
                <div id="profile-container-232">
                    <div id="profile-div1">
                        <div>
                            <div class="profile-h51">Your Company Logo</div>
                            <div class="btn-edit-p" onClick={() => setEditPhoto(!editPhoto)}><i class="fa fa-edit"></i> Edit</div>
                        </div>
                        <div style={{display:"flex", alignItems:"center"}}>
                           
                            
                            {fetchData.advanceInfo && fetchData.advanceInfo.advance.logo
                                ?
                                <img src={fetchData.advanceInfo.advance.logo} type="image/*" width="154px"/>
                                :
                                <img src={Profile} type="image/*" width="154px"/>
                            }
                            
                            
                        </div>
                    </div>
                    {/* 1 Profile Basic */}
                    <div class="member-profile-cont">
                        <div class="profile-h1" onClick={() => setBToggle(!bToggle)}>Basic Information</div>
                        <div class={bToggle ? "show-toggle txt-more-info" : "hide-toggle"}>
                            <div>
                                <span class="profile-hde90">Company:</span><br/>
                                <span class="profile-d90">{fetchData.basicInfo && fetchData.basicInfo.member.company}</span><br style={{marginBottom:"10px"}}/>
                               
                                <span class="profile-hde90">Contact Name:</span><br/>
                                <span class="profile-d90">{fetchData.basicInfo && fetchData.basicInfo.member.name}</span><br style={{marginBottom:"10px"}}/>
                               
                                <span class="profile-hde90">Business Type:</span><br/>
                                <span class="profile-d90">{fetchData.basicInfo && fetchData.basicInfo.member.business_type}</span><br style={{marginBottom:"10px"}}/>
                               
                                <span class="profile-hde90">Business Description:</span><br/>
                                <span class="profile-d90">{fetchData.basicInfo && fetchData.basicInfo.member.business_description}</span><br style={{marginBottom:"10px"}}/>
                            </div>
                            <div>
                                <span class="profile-hde90">Address:</span><br/>
                                <span class="profile-d90">{fetchData.basicInfo && fetchData.basicInfo.member.address}</span><br style={{marginBottom:"10px"}}/>
                               
                                <span class="profile-hde90">Tel:</span><br/>
                                <span class="profile-d90">{fetchData.basicInfo && fetchData.basicInfo.member.phone}</span><br style={{marginBottom:"10px"}}/>
                               
                                <span class="profile-hde90">Fax:</span><br/>
                                <span class="profile-d90">{fetchData.basicInfo && fetchData.basicInfo.member.fax}</span><br/>
                               
                                <span class="profile-hde90">Mobile:</span><br/>
                                <span class="profile-d90">{fetchData.basicInfo && fetchData.basicInfo.member.mobile}</span><br/>
                                
                                <span class="profile-hde90">Website:</span><br/>
                                <span class="profile-d90">{fetchData.basicInfo && fetchData.basicInfo.member.website}</span><br/>
                            </div>
                            <div>
                                <div class="btn-edit-p" onClick={() => setEditBasicInfo(!editBasicInfo)}><i class="fa fa-edit"></i> Edit</div>
                            </div>
                        </div>
                    </div>
                    {/* 2 Advance Information */}
                    <div>
                        <div class="profile-h1" onClick={() => setAToggle(!aToggle)}>Advance Information</div>
                        <div class={aToggle ? "show-toggle txt-more-info" : "hide-toggle"}>
                            <div>
                                <span class="profile-hde90">Year Established:</span><br/>
                                <span class="profile-d90">{fetchData.advanceInfo && fetchData.advanceInfo.advance.year_established}</span><br style={{marginBottom:"10px"}}/>
                               
                                <span class="profile-hde90">No. of employees:</span><br/>
                                <span class="profile-d90">{fetchData.advanceInfo && fetchData.advanceInfo.advance.no_employees}</span><br style={{marginBottom:"10px"}}/>
                               
                                <span class="profile-hde90">Annual Sales Turnover:</span><br/>
                                <span class="profile-d90">{fetchData.advanceInfo && fetchData.advanceInfo.advance.sales_turnover}</span><br style={{marginBottom:"10px"}}/>
                               
                                <span class="profile-hde90">Operational Address:</span><br/>
                                <span class="profile-d90">{fetchData.advanceInfo && fetchData.advanceInfo.advance.operational_add}</span><br style={{marginBottom:"10px"}}/>
                            </div>
                            <div>
                                <span class="profile-hde90">Current Top Trading Countries:</span><br/>
                                <span class="profile-d90">
                                    {fetchData.advanceInfo && fetchData.advanceInfo.advance.trading_company1} &nbsp;
                                    {fetchData.advanceInfo && fetchData.advanceInfo.advance.trading_company2} &nbsp;
                                    {fetchData.advanceInfo && fetchData.advanceInfo.advance.trading_company3} &nbsp;
                                </span><br style={{marginBottom:"10px"}}/>
                               
                                <span class="profile-hde90">Countries Interested:</span><br/>
                                <span class="profile-d90">
                                    {fetchData.advanceInfo && fetchData.advanceInfo.advance.interested_company1} &nbsp;
                                    {fetchData.advanceInfo && fetchData.advanceInfo.advance.interested_company2} &nbsp;
                                    {fetchData.advanceInfo && fetchData.advanceInfo.advance.interested_company3} &nbsp;
                                </span><br style={{marginBottom:"10px"}}/>
                               
                                <span class="profile-hde90">Preferred Payment Method:</span><br/>
                                <span class="profile-d90">{fetchData.advanceInfo && fetchData.advanceInfo.advance.payment_method}</span><br style={{marginBottom:"10px"}}/>
                               
                                <span class="profile-hde90">Preferred Shipping Terms:</span><br/>
                                <span class="profile-d90">{fetchData.advanceInfo && fetchData.advanceInfo.advance.shipping_terms}</span><br style={{marginBottom:"10px"}}/>
                                
                                <span class="profile-hde90">Business Registration Number:</span><br style={{marginBottom:"10px"}}/>
                                <span class="profile-d90">{fetchData.advanceInfo && fetchData.advanceInfo.advance.business_reg_no}</span><br/>
                            </div>
                            <div>
                                <div class="btn-edit-p" onClick={() => setEditAdvanceInfo(!editAdvanceInfo)}><i class="fa fa-edit"></i> Edit</div>
                            </div>
                        </div>
                    </div>
                    {/* 3 Instant Message */}
                    <div>
                        <div class="profile-h1" onClick={() => setIToggle(!iToggle)}>Instant Messaging</div>
                        <div class={iToggle ? "show-toggle txt-more-info" : "hide-toggle"}>
                            <div style={{width:"400px"}}>
                                { fetchData.instantMessagingInfo &&
                                    fetchData.instantMessagingInfo.instantMessage.map( iMsg => (
                                        <>
                                            <span key={iMsg.id} class="profile-hde90">
                                              {iMsg.type + ":"} 
                                            </span>&nbsp;&nbsp;
                                            <span key={iMsg.id} class="profile-d90">
                                                {iMsg.link !== ""  && iMsg.link }
                                            </span><br style={{marginBottom:"10px"}}/>
                                        </>
                                    ))
                                }
                            </div>
                            <div style={{width:"80px"}}>
                                <div class="btn-edit-p" onClick={() => setEditInstantMessage(!editInstantMessage)}><i class="fa fa-edit"></i> Edit</div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    {/* 4 Rating */}
                    <div>
                        <div class="profile-h1" onClick={() => setRToggle(!rToggle)}>Rating</div>
                        <div id="rating-2" class={rToggle ? "show-toggle" : "hide-toggle"}>
                            <div class="rate-btn-t">
                                <div>You have 0 trust points.</div>
                                <div class="btn-edit-p"><i class="fa fa-eye"></i> View</div>
                            </div>
                            <div id="rate-single-t">
                                <div>
                                    <img src={VF} />
                                </div>
                                <div>
                                    <span>Authentication &amp; Verification</span><br/>
                                    <span style={{fontSize:"14px",color:"#565656"}}>Not Verified</span><br style={{marginBottom:"15px"}}/>
                                    <div class="btn-edit-p" style={{width:"35px"}}>Verify</div>
                                </div>
                            </div>
                            <div id="rate-single-t">
                                <div>
                                    <img src={Logo} width="49px" style={{backgroundColor:"#fcc597",borderRadius:"50%"}}/>
                                </div>
                                <div>
                                    <span>Membership</span><br/>
                                    <span style={{fontSize:"14px",color:"#565656"}}>Basic Membership</span><br style={{marginBottom:"15px"}}/>
                                    <div class="btn-edit-p" style={{width:"54px"}}>Upgrade</div>
                                </div>
                            </div>
                            <div id="rate-single-t">
                                <div>
                                    <img src={Bank} />
                                </div>
                                <div>
                                    <span>Bank Information</span><br/>
                                    <span style={{fontSize:"14px",color:"#565656"}}>No Informatoin Provided.</span><br style={{marginBottom:"15px"}}/>
                                </div>
                            </div>
                            <div id="rate-single-t">
                                <div>
                                    <img src={Award} />
                                </div>
                                <div>
                                    <span>Awards &amp; Certifications</span><br/>
                                    <span style={{fontSize:"14px",color:"#565656"}}>No certificates or awards available.</span><br style={{marginBottom:"15px"}}/>
                                </div>
                            </div>
                            <div id="rate-single-t">
                                <div>
                                    <img src={Trust} />
                                </div>
                                <div>
                                    <span>Trust Networks</span><br/>
                                    <span style={{fontSize:"14px",color:"#565656"}}>No authenticated member added your company into their Trust Network.</span><br style={{marginBottom:"15px"}}/>
                                </div>
                            </div>
                            <div id="rate-single-t">
                                <div>
                                    <img src={Review} />
                                </div>
                                <div>
                                    <span>Reviews</span><br/>
                                    <span style={{fontSize:"14px",color:"#565656"}}>No Reviews Found.</span><br style={{marginBottom:"15px"}}/>
                                    <div class="btn-edit-p" style={{width:"54px"}}>Invite</div>
                                </div>
                            </div>
                            <div id="achievments-fzkd">
                                <div>Achievements:</div>
                                <div>
                                    <div>
                                        <img src={Unknown} />
                                        <div class="h-more90">Approved</div>
                                    </div>
                                    <div>
                                        <img src={Unknown} />
                                        <div class="h-more90">Ranked</div>
                                    </div>
                                    <div>
                                        <img src={Unknown} />
                                        <div class="h-more90">Popular</div>
                                    </div>
                                    <div>
                                        <img src={Unknown} />
                                        <div class="h-more90">Active</div>
                                    </div>
                                    <div>
                                        <img src={Unknown} />
                                        <div class="h-more90">Responsive</div>
                                    </div>
                                    <div>
                                        <img src={Unknown} />
                                        <div class="h-more90">Profile</div>
                                    </div>
                                </div>
                                <div class="rate-btn-t" style={{borderTop:"1px solid #d3d3d3",paddingTop:"10px"}}> 
                                    <div style={{fontSize:"14px"}}>
                                        Trust Network &amp; Popularity<br/>
                                        Show Your Trust Network &amp; Popularity to Everyone.
                                    </div>
                                    <div class="toggle-swt">
                                        <input type="checkbox" />
                                    </div>
                                </div>
                                <div class="rate-btn-t" style={{borderTop:"1px solid #d3d3d3",paddingTop:"10px"}}> 
                                    <div>Manage your Trust Network.</div>
                                    <div class="btn-edit-p" onClick={() => setEditTrustNetwork(!editTrustNetwork)}><i class="fa fa-edit"></i> Edit</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* 5 Account */}
                    <div>
                        <div class="profile-h1" onClick={() => setAcToggle(!acToggle)}>Account</div>
                        <div class={acToggle ? "show-toggle" : "hide-toggle"}>
                            <div class="rate-btn-t" style={{borderTop:"1px solid #d3d3d3",padding:"14px 0px"}}>
                                <div style={{fontSize:"14px"}}>
                                    <span style={{color:"#888"}}>Membership</span><br/>
                                    <span>{fetchData.accountInfo && fetchData.accountInfo.account.mem_type}</span>
                                </div>
                                <div class="btn-edit-p">Upgrade</div>
                            </div>
                            <div class="rate-btn-t" style={{borderTop:"1px solid #d3d3d3",padding:"14px 0px"}}>
                                <div style={{fontSize:"14px"}}>
                                    <span style={{color:"#888"}}>Billing</span><br/>
                                    <span>Invoice and service orders.</span>
                                </div>
                                <div class="btn-edit-p"><i class="fa fa-eye"></i> View</div>
                            </div>
                            <div class="rate-btn-t" style={{borderTop:"1px solid #d3d3d3",padding:"14px 0px"}}>
                                <div style={{fontSize:"14px"}}>
                                    <span style={{color:"#888"}}>Email</span><br/>
                                    <span>{fetchData.accountInfo && fetchData.accountInfo.account.email}</span>
                                </div>
                                <div class="btn-edit-p"><i class="fa fa-edit"></i> Edit</div>
                            </div>
                            <div class="rate-btn-t" style={{borderTop:"1px solid #d3d3d3",padding:"14px 0px"}}>
                                <div style={{fontSize:"14px"}}>
                                    <span style={{color:"#888"}}>Password</span><br/>
                                    <span>**********</span>
                                </div>
                                <div class="btn-edit-p"><i class="fa fa-edit"></i> Edit</div>
                            </div>
                            <div class="rate-btn-t" style={{borderTop:"1px solid #d3d3d3",padding:"14px 0px"}}>
                                <div style={{fontSize:"14px"}}>
                                    <span style={{color:"#888"}}>Notification</span><br/>
                                    <span>Sends email notifications when a member sends you a message.</span>
                                </div>
                                <div class="toggle-swt">
                                {fetchData.accountInfo !== null && fetchData.accountInfo.account.msg_notification 
                                ?
                                    <input type="checkbox" onClick={updateSubscription} checked/>   
                                :
                                    <input type="checkbox" onClick={updateSubscription} />
                                }
                                </div>
                            </div>
                            <div class="rate-btn-t" style={{borderTop:"1px solid #d3d3d3",padding:"14px 0px"}}>
                                <div style={{fontSize:"14px"}}>
                                    <span style={{color:"#888"}}>Email Subscriptions</span><br/>
                                    <span>Trade network, Exporters' Despatch and alert newsletter subscriptions.</span>
                                </div>
                                <div class="btn-edit-p"><i class="fa fa-edit"></i> Edit</div>
                            </div>
                        </div>
                    </div>
                    {/* 6 Contact Us */}
                    <div>
                        <Link to="/contact-us" style={{textDecoration:"none",color:"#888"}}>
                            <div class="profile-h1">Contact Us</div>
                        </Link>
                    </div>
                    {/* 7 Terms and services */}
                    <div>
                        <Link to="/terms-of-services" style={{textDecoration:"none",color:"#888"}}>
                            <div class="profile-h1">Terms of Service</div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
        {/* Edit Photo */}
        {editPhoto && <EditProfilePhoto />}
        {editBasicInfo && <EditBasicInfo />}
        {editAdvanceInfo && <EditAdvanceInfo />}
        {editInstantMessage && <EditInstantMessage />}
        {editTrustNetwork && <EditTrustNetwork />}
        </>
    )
}
export default UserProfile;