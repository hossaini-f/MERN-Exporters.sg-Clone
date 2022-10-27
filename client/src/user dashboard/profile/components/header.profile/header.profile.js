import React from 'react';
import MemberProfile from '../../../../Pages/members/member.profile';
import './statics/style.css';
import ImageFrame from './statics/images/image_frame.png';
import Rate from './statics/images/rate.png';

const ProfileHeader = () => {
    return(
        <>
        <div class="profile-visited-link">
            <div>
                <a>Home</a><i class="fa fa-angle-right"></i>
                <a>Members</a><i class="fa fa-angle-right"></i>
                <a>Some One</a>
            </div>
        </div>
        <div class="profile-header-container">
            <table width="100%" height="180px" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr>
                        <td valign="bottom" align="center">
                            <div id="profile-about">
                                <table height="180px" cellspacing="0" cellpadding="0" border="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td style={{paddingTop:"9px"}} valign="bottom">
                                                <div id="profile-image">
                                                    <img src={ImageFrame}/>
                                                    <img/>
                                                </div>
                                            </td>
                                            <td style={{minHeight:"20px"}} width="100%">
                                                <table height="180px" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{height:"110px", paddingLeft:"10px",paddingBottom:"10px"}} valign="bottom">
                                                                <span id="profile-company">Some one in here can say someting</span><br/>
                                                                <table width="100%" height="70px" cellspacing="0" cellpadding="0" border="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td valign="bottom">
                                                                              <span class="profile-de"><b>About Us</b></span><br/>
                                                                              <span class="profile-de">A Major Consumer Electronics Import/Export company based in Singapore dealing in all key brands </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table style={{paddingLeft:"10px",paddingTop:"5px"}} cellspacing="0" cellpadding="0" border="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td valign="bottom">
                                                                                <img src={Rate}/>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td valign="top">
                                                                                <span id="m-s">Member since <b>December 2015</b></span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div style={{float:"right",marginTop:"-45px"}}>
                                                                    <table height="48px" cellspacing="0" cellpadding="0" border="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="100px">
                                                                                    <a id="profile-send-msg-btn">Send Message</a>
                                                                                </td>
                                                                                <td width="100px">
                                                                                    <a id="profile-send-order-btn">Place Order</a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="profile-mobile">
            <div>
                <img src={ImageFrame}/>
            </div>
            <div>
                <span>Good</span><br/>
                <img src={Rate}/>
                <span id="p-m-des">Member Since <b> December 2105</b></span>
            </div>
        </div>
        <div id="profile-mobile-desc">
            <table width="100%">
                <tbody>
                    <tr>
                        <td>
                            <span id="m-a-h">About Us</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span id="m-a-d">
                                A Major Consumer Electronics Import/Export company based in Singapore dealing in all key brands 
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <div>
                                <a id="profile-send-msg-mbtn">Send Message</a>
                                <a id="profile-send-order-mbtn">Place Order</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
            
        </>
    )
}
export default ProfileHeader;