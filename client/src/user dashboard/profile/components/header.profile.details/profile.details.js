import React, { useState } from 'react';
import './statics/style.css';
import Bank from './statics/images/bank.png';
import Auth from './statics/images/av.png';
import Info from './statics/images/info_icon.png';
import Rate from './statics/images/rate.png';

const ProfileDetails = () => {
    const [ show, setShow ] = useState(false);

    return(
        <>
            <div id="profile-details-container">
                <div class="p-details-wrapper">
                    <div class="p-details-icon" style={{backgroundImage: "url("+ Bank +")"}}></div>
                    <div class="p-details-txt">No Bank Info Provided</div>
                </div>
                <div class="p-details-wrapper">
                    <div class="p-details-icon" style={{backgroundImage: "url("+ Bank +")"}}></div>
                    <div class="p-details-txt">No Bank Info Provided</div>
                </div>
                <div class="p-details-wrapper">
                    <div class="p-details-icon" style={{backgroundImage: "url("+ Bank +")"}}></div>
                    <div class="p-details-txt">No Bank Info Provided</div>
                </div>
                <div class="p-details-wrapper">
                    <div class="p-details-icon" style={{backgroundImage: "url("+ Bank +")"}}></div>
                    <div class="p-details-txt">No Bank Info Provided</div>
                </div>
                <div class="p-details-wrapper">
                    <div class="p-details-icon" style={{backgroundImage: "url("+ Bank +")"}}></div>
                    <div class="p-details-txt">No Bank Info Provided</div>
                </div>
                <div class="p-details-wrapper">
                    <div class="p-details-icon" style={{backgroundImage: "url("+ Bank +")"}}></div>
                    <div class="p-details-txt">No Bank Info Provided</div>
                </div>
                <div id="p-details-dbtn-c">
                    <div id="p-details-dbtn" onClick={() => setShow(!show)}>Details</div>
                </div>
            </div>
            <div class={ show ? "p-details-show-details toggle-active-p" : "p-details-show-details"}>
                <div class="show-details-ele">
                    <div class="p-ele-info">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td valign="middle">
                                         <img src={Auth} />
                                    </td>
                                    <td valign="middle">
                                        <span>Authentication & Verification</span>
                                    </td>
                                    <td valign="middle">
                                        <img src={Info} />
                                    </td>
                                    <td width="29%"></td>
                                    <td valign="middle">
                                        <span>0 Points</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="p-d-ul-text">
                            <ul>
                                <li>
                                    <span>This member is not authenticated and verified as of 2/28/2021.</span>
                                </li>
                                <li>
                                    <a>Learn More</a><br/><br/><br/>
                                </li>
                                <li>
                                    <span>
                                        <a>Sign in</a> <span>to view more details.</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="p-ele-info">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td valign="middle">
                                         <img src={Auth} />
                                    </td>
                                    <td valign="middle">
                                        <span>Trusted Networks </span><img src={Info} style={{marginBottom:"-5px"}} />
                                    </td>
                                    <td valign="middle">
                                        
                                    </td>
                                    <td width="60%" align="right" valign="middle">
                                        <span>0 Points</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="p-d-ul-text">
                            <ul>
                                <li>
                                    <span>
                                        <a>Sign in</a> <span>to view more details.</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="p-ele-info" style={{float:"right",marginRight:"9px"}}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td valign="middle">
                                         <img src={Auth} />
                                    </td>
                                    <td valign="middle">
                                         <span>Membership </span><img src={Info} style={{marginBottom:"-5px"}} />
                                    </td>
                                    <td valign="middle">
                                        
                                    </td>
                                    <td width="66%" align="right" valign="middle">
                                        <span>17 Points</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="p-d-ul-text">
                            <ul>
                                <li>
                                    <span>
                                        <span>Member since November 2005.</span>
                                    </span><br/>
                                    <span>
                                        <a>Exporters' Plus member</a> <span> for 6 year(s).</span>
                                    </span><br/>
                                    <span>
                                        <a>Exporters' Premium member</a> <span> for 6 year(s).</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="p-ele-info">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td valign="middle">
                                         <img src={Auth} />
                                    </td>
                                    <td valign="middle">
                                        <span>Bank Information </span><img src={Info} style={{marginBottom:"-5px"}} />
                                    </td>
                                    <td valign="middle">
                                        
                                    </td>
                                    <td width="60%" align="right" valign="middle">
                                        <span>0 Points</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="p-d-ul-text">
                            <ul>
                                <li>
                                    <span>
                                        Bank information not provided.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="p-ele-info" style={{float:"right",marginRight:"9px"}}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td valign="middle">
                                         <img src={Auth} />
                                    </td>
                                    <td valign="middle">
                                        <span>Awards and Certifications </span><img src={Info} style={{marginBottom:"-5px"}} />
                                    </td>
                                    <td valign="middle">
                                        
                                    </td>
                                    <td width="46%" align="right" valign="middle">
                                        <span>0 Points</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="p-d-ul-text">
                            <ul>
                                <li>
                                    <span>
                                        No certificates or awards available. 
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="p-ele-info">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td valign="middle">
                                         <img src={Auth} />
                                    </td>
                                    <td valign="middle">
                                        <span>Reviews </span><img src={Info} style={{marginBottom:"-5px"}} />
                                    </td>
                                    <td valign="middle">
                                        
                                    </td>
                                    <td width="75%" align="right" valign="middle">
                                        <span>0 Points</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="p-d-ul-text">
                            <ul>
                                <li>
                                    <span>
                                        <a>3 Reviews received</a>
                                    </span><br/>
                                    <span>
                                        Overall Rating:
                                    </span><br/><br/><br/>
                                </li>
                                <li>
                                    <a id="write-review-btn">Write a Review</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="total-rate-c">
                        <table width="100%" cellSpacing="0" cellSpacing="0" border="0">
                            <tbody >
                                <tr>
                                    <td width="50%" align="right">Total Points: </td>
                                    <td align="left">&nbsp;&nbsp;21 Points</td>
                                </tr>
                                <tr>
                                    <td width="50%" align="right">Rating: </td>
                                    <td align="left">&nbsp; <img src={Rate}/> &nbsp;&nbsp;<a>(How Rating works)</a></td>
                                </tr>
                                <tr>
                                    <td width="50%" align="right">Ranking: </td>
                                    <td align="left">&nbsp;&nbsp;<span style={{color:"#7a31d5"}}>Not Ranked yet</span>&nbsp;&nbsp;<a>(View Top 100 rated members)</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="p-disc">
                        <p>
                            <b>Disclaimer:</b> The above information is provided for reference only.
                            Exporters.SG shall not be liable for any loss arising or resulting 
                            from reliance on this profile or arising or resulting from error or 
                            omission in preparing this profile.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileDetails;