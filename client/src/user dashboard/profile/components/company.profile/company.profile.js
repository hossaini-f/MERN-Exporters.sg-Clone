import React from 'react';
import './statics/style.css';
import AltProfile from './statics/images/alt_profile.png';

const CompanyProfile = () => {
    return(
        <>
            <div id="cp-container">
                <div id="cp-title">Company Profile</div>
                <div class="cp-wrapper">
                    <div id="cp-info-d">
                        <div>Basic Information</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>
                                            Member Since:
                                        </span><br/>
                                        <span>February 2020</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            Business Type:
                                        </span><br/>
                                        <span>Exporter</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            Location:
                                        </span><br/>
                                        <span>Ireland</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="cp-contact-d">
                        <div>Enhanced Profile</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>
                                            Numbers:
                                        </span><br/>
                                        <a>Show</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            Email:
                                        </span><br/>
                                        <a>Show</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            Website:
                                        </span><br/>
                                        <a>Show</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            View Enhanced Porfile:
                                        </span><br/>
                                        <a>View Enhanced Porfile</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="cp-message-d">
                        <div>Contact Person</div>
                        <div id="cp-m-dw">
                            <div>
                                <img src=""/>   
                            </div>
                            <div>
                                <span>To: <b>Mr. Alex Okt</b></span>
                                <span>
                                    <a>Send Message</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="cp-b-btn">
                        
                            <div><a>Place Order</a></div>
                            <div><a>Send Products</a></div>
                            <div><a>Add Trust Network</a></div>
                            <div><a>Write Review</a></div>
                            <div><a>Block</a></div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompanyProfile;