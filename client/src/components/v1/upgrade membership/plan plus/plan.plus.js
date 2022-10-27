import React from 'react';

import './statics/style.css';
import UserImage from './statics/images/image.jpg';
import Tick from './statics/images/tick.png';
import Logo from './statics/images/logo.png';
import Auth from './statics/images/av_l.png';
import Bank from './statics/images/bank_l.png';
import Review from './statics/images/reviews_l.png';
import Star from './statics/images/star_l.png';
import Trust from './statics/images/trust_l.png';
import Plus from './statics/images/ep_paid_l.png';
import Certify from './statics/images/cert_l.png';

const UserPlanPlus = () => {
    return(
        <div class="plan-plus-wrapper">
            <div id="plan-plus-top-btn">
                <div><a>About Exporters Plus</a></div>
                <div><a>Pricing and Plans</a></div>
                <div><a>Testimonial</a></div>
                <div><a>Ask a Question</a></div>
            </div>
            <div id="plan-plus-title">
                <p>
                Expand Your Global Business with<br/>Exporters Plus membership
                </p>
                <p><span>US$69</span>&nbsp;&nbsp;<span>per month</span></p>
                <p>
                    Hundreds of thousands businesses use Exporters.SG to source and sell products<u>globally</u>. 
                </p>
            </div>
            <div class="plan-plus-main-container">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div><img src={UserImage} /></div>
                                <span>
                                    "We have increased our sales by 30%, established many strong ties with buyers from over 5 continents."
                                    <br/><a>Australasian PC Distributors</a><br/> Australia
                                </span>

                            </td>
                            <td>
                                <div><img src={UserImage} /></div>
                                <span>
                                    "We have increased our sales by 30%, established many strong ties with buyers from over 5 continents."
                                    <br/><a>Australasian PC Distributors</a><br/> Australia
                                </span>

                            </td>
                            <td>
                                <div><img src={UserImage} /></div>
                                <span>
                                    "We have increased our sales by 30%, established many strong ties with buyers from over 5 continents."
                                    <br/><a>Australasian PC Distributors</a><br/> Australia
                                </span>

                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="plan-plus-user">
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                    <div class="plan-plus-single-user">
                        <img src={UserImage} />
                    </div>
                </div>   
                <div id="plans-pricing-btn">
                    <a>See Pricing and Plans</a>
                </div>
                <table class="plan-plus-ads">
                    <tbod>
                        <tr>
                            <td>
                                <span><img src={Tick}/> <b>Build Trust &amp;<br/> Credibility</b></span>
                                <br />
                                <span>Exporters.SG helps you established<br/> your company credibility. </span>
                            </td>
                            <td>
                                <span><img src={Tick}/> <b>Use Powerful Trade Tools</b></span>
                                <br />
                                <span>We provide advance trade tools to<br/> help you expand your business<br/> proactively. </span>
                            </td>
                            <td>
                                <span><img src={Tick}/> <b>Enjoy Effective Marketing</b></span>
                                <br />
                                <span>Enjoy better rankings in<br/> Exporters.SG, targeted ads and<br/> more. </span>
                            </td>
                        </tr>
                    </tbod>
                </table>
                <div id="plan-plus-title">Top question from global buyers: "Is this company credible?"</div>
                <span id="plan-plus-desc">Using Trust PointsŽ, we help you build your credibility by improving your company profile in Exporters.SG: 
                </span>
                <div class="plan-plus-template">
                    <div class="plan-plus-left">
                        <table><tr></tr>
                            <tr>
                                <td>
                                    <div><img src={Logo}/></div>
                                    <div><b>Exporters Plus Frame</b><br/>
                                        highlights your business
                                        logo in Exporters.SG.
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table><tr></tr>
                            <tr>
                                <td>
                                    <div><img src={Auth}/></div>
                                    <div><b>Get Authenticated</b><br/>
                                    by our independent<br/>
                                    credit rating partners.
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table><tr></tr>
                            <tr>
                                <td>
                                    <div><img src={Bank}/></div>
                                    <div><b>Get Authenticated</b><br/>
                                    by our independent<br/>
                                    credit rating partners.
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table><tr></tr>
                            <tr>
                                <td>
                                    <div><img src={Review}/></div>
                                    <div><b>Get Authenticated</b><br/>
                                    by our independent<br/>
                                    credit rating partners.
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="plan-plus-center"></div>
                    <div class="plan-plus-right">
                        <table><tr></tr>
                            <tr>
                                <td>
                                    <div><img src={Star}/></div>
                                    <div><b>Ratings</b><br/>
                                        shows how good you are<br/>
                                        as a trading partner.
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table><tr></tr>
                            <tr>
                                <td>
                                    <div><img src={Trust}/></div>
                                    <div><b>Build Trust Networks</b><br/>
                                    of members who trust<br/>
                                    and will recommend<br/>
                                    you to others.
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table><tr></tr>
                            <tr>
                                <td>
                                    <div><img src={Plus}/></div>
                                    <div><b>Earn Trust Points</b><br/>
                                    to improve your Ratings.
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table><tr></tr>
                            <tr>
                                <td>
                                    <div><img src={Certify}/></div>
                                    <div><b>Submit Awards &amp;<br/>
                                            Certifications</b><br/>
                                            to showcase your<br/>
                                            business achievements.
                                    
                                    </div>
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>
                {/* Mobile Template */}
                <div class="plan-plus-mobile-template">
                    <table>
                        <tbody><tr></tr>
                            <tr>
                                <td>
                                    <div><img src={Logo}/></div>
                                    <div><b>Exporters Plus Frame</b><br/> highlights your business logo in Exporters.SG.</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div><img src={Auth}/></div>
                                    <div><b>Get Authenticated</b><br/>by our independent credit rating partners.</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div><img src={Plus}/></div>
                                    <div><b>Earn Trust Points </b><br/>to improve your Ratings.</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div><img src={Star}/></div>
                                    <div><b>Ratings</b><br/> shows how good you are as a trading partner.</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div><img src={Certify}/></div>
                                    <div><b>Submit Awards & Certifications</b><br/>to showcase your business achievements. </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div><img src={Trust}/></div>
                                    <div><b>Build Trust Networks</b><br/> of members who trust and will recommend you to others.</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div><img src={Review}/></div>
                                    <div><b>Receive Reviews</b><br/>from your trading partners.</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div><img src={Bank}/></div>
                                    <div><b>Submit Bank Info</b><br/>endorsed by your bank.</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* End */}
                
                <div id="plan-plus-comment">"After getting our company authenticated in Exporters.SG, 
                    we started getting more inquiries and responses for our products."<br/>
                    <a href="" >ACEONE,</a> Hong Kong
                </div>
                <div id="plan-plus-title">Enjoy powerful trade tools to expand your global business:</div>
                <table class="plan-plus-trade">
                    <tbody>
                        <tr>
                            <td>
                                <img src={Tick} /><b>Instant Business Builder</b><br/>
                                <span>Get buyer contacts from our global members database. </span>
                            </td>
                            <td>
                                <img src={Tick} /><b>Advance Messaging Features</b><br/>
                                <span>Send messages with file attachments, print contacts and<br/> send mass mailings</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={Tick} /><b> More Space For Products</b><br/>
                                <span>Post Up to 500 Products in your Showroom</span>
                            </td>
                            <td>
                                <img src={Tick} /><b>Bulk Product Upload</b><br/>
                                <span>Add products into Exporters.SG marketplace easily using<br/> an MS Excel file </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={Tick} /><b>Post Product Pictures</b><br/>
                                <span>Add pictures for your products instantly </span>
                            </td>
                            <td>
                                <img src={Tick} /><b> e-Catalog for Showroom</b><br/>
                                <span>Convert your product info into pdf file for easy download </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={Tick} /><b>	Send Products to Buyers</b><br/>
                                <span>Send your product info to buyers in 2 clicks </span>
                            </td>
                            <td>
                                <img src={Tick} /><b>Receive Buyer Details</b><br/>
                                <span>View buyer details like product details, order information<br/> and more - directly in your mailbox </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={Tick} /><b>Access Market Intelligence</b><br/>
                                <span>Research market prices, price range and market supply </span>
                            </td>
                            <td>
                                <img src={Tick} /><b>View Competing Quotations</b><br/>
                                <span>See what other suppliers are quoting for buying leads </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={Tick} /><b>See Who Visited Your Profile &amp; Showroom</b><br/>
                                <span>Track and contact your visitors for potential sales </span>
                            </td>
                            <td>
                                <img src={Tick} /><b>More Space For Contact List</b><br/>
                                <span>Store up to 500 contacts  </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={Tick} /><b>Access Advance Profile Information</b><br/>
                                <span>See more in-dept information in member profiles, up to 25<br/> a day, 150 a month.  </span>
                            </td>
                            <td>
                                <img src={Tick} /><b>Drive Quality Traffic to Your Website</b><br/>
                                <span>Add your website link into your profile to drive traffic to<br/> your website </span>
                            </td>
                        </tr>
                    </tbody>

                </table>
                
                <div id="plan-plus-comment">"We tried using other B2B marketplaces, and we found Exporters.SG to be the most user-friendly with serious buyers and suppliers." <br/>
                    <a href="" >Ramsons Corporation (Japan) Ltd.</a>, Japan
                </div>
                <div id="plan-plus-title">Promote your product and company effectively:</div>
                <table class="plan-plus-trade">
                    <tbody>
                        <tr>
                            <td>
                                <img src={Tick} /><b>Priority Product Listing</b><br/>
                                <span>Enjoy more exposures for your products to targeted buyers </span>
                            </td>
                            <td>
                                <img src={Tick} /><b>Better Company Profile Listing</b><br/>
                                <span>Enjoy better ranking in our search results and category<br/> listings </span>
                            </td>
                        </tr>
                    </tbody>
                </table><br/>
                <hr size="1" color="#efefef"/>
                <div id="plan-plus-title" style={{marginTop:"20px"}}>Recommended by over 80% of Exporters Plus Members</div>
                <div id="plan-plus-comment" style={{marginTop:"7px",marginBottom:"20px"}}>In an in-house survey, 84% of our Exporters Plus members say they will recommend Exporters.SG to their business partners and<br/> friends. Start experiencing success today.
                    <a href="" >Read what our members say. </a>
                </div>
                <div id="plans-pricing-btn">
                    <a>See Pricing and Plans</a>
                </div>
            </div>
        </div>
    )
}
export default UserPlanPlus;