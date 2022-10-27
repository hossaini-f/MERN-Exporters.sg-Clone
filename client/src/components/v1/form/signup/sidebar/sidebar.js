import React from 'react';
import './statics/style.css';
import Tick from './statics/images/tick.png';

const RightSideBar = () => {
    return(
            <div id="signup-right-sidebar" style={{paddingTop:'75px'}}>
                <span class="signup-desc">
                    <div class="signup-rightsidebar-wrapper">
                        <table style={{padding:'10px'}} width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="signup-h4">Thousands of businesses <br />use Medicinesworld.com <br />to source and sell globally.</span>
                                        <hr class="hr-line" />
                                    </td>
                                </tr>
            
                                <tr>
                                    <td>
                                    
                                        <span class="signup-rightsidebar-ticks">
                                            <div class="" style={{padding:'0px'}}>
                                                <table width="100%" cellspacing="0" cellpadding="5" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td valign="top">
                                                                <table cellspacing="0" cellpadding="3" border="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td valign="top">
                                                                                <img src={Tick} width="20px" />
                                                                            </td>
                                                                            <td>
                                                                                <b>Access exclusive trade tools &amp; services</b>
                                                                            </td>
                                                                        </tr>          
                                                                        <tr>
                                                                            <td valign="top">
                                                                                <img src={Tick} width="20px" />
                                                                            </td>
                                                                            <td>
                                                                                <b>Build  your business profile</b>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td valign="top">
                                                                                <img src={Tick} width="20px" />
                                                                            </td>
                                                                            <td>
                                                                                <b>Connect to thousands of members</b>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>     
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td valign="top">
                                                                <hr class="hr-line" />
                                                                "We have increased our sales by 30%, established many strong ties with buyers from over 5 continents."
                                                                <br /><br />
                                                                <a class="signup-rightsidebar-link" target="_blank" href="">Australasian PC Distributors</a>, Australia                 
                                                                <hr class="hr-line"/>"After getting our company authenticated in Exporters.SG, we started getting more inquiries and responses for our products."
                                                                <br/><br/>
                                                                <a class="signup-rightsidebar-link" target="_blank" href="">ACEONE</a>, Hong Kong                 
                                                                <hr class="hr-line" />"Within weeks, we received high quality inquiries from Exporters.SG, and we got a very good customer"
                                                                <br /><br />
                                                                <a class="signup-rightsidebar-link" target="_blank" href="">Boswin Electronic Ltd</a>, China  
                                                                <hr class="hr-line" /><a class="signup-rightsidebar-link" href="">Read more</a> 
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </span>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </span> 
            </div> 
    )
}
export default RightSideBar;