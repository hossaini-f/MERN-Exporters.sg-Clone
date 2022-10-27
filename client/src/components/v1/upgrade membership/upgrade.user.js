import React from 'react';
import './statics/style.css';
import Tick from './statics/images/tick.png';
import UserFrame from './statics/images/ep.png';
import UserImage from './statics/images/image.jpg';

const UpgradeUser = () => {
    return (
        <div class="upgrade-wrapper">
            <div id="upgrade-title">
                <p>
                    Expand Your Global Business with<br/> Exporters.SG
                </p>
                <p>
                    Hundreds of thousands businesses use Exporters.SG to source and sell products<u>globally</u>. 
                </p>
            </div>
            <div class="upgrade-main-container">
                <p>What are the benefits?</p>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div><img src={Tick} />Build Trust & Credibility</div>
                                <span>Exporters.SG helps you<br/>established your company credibility. </span>

                            </td>
                            <td>
                                <div><img src={Tick} />Use Powerful Trade Tools</div>
                                <span>We provide advance trade tools to help you expand your business proactively. </span>
                            </td>
                            <td>
                                <div><img src={Tick} />Enjoy Effective Marketing</div>
                                <span>Enjoy better rankings in Exporters.SG, targeted ads and more. </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="upgrade-comment">"After getting our company authenticated in Exporters.SG, 
                    we started getting more inquiries and responses for our products."<br/>
                    <a href="" >ACEONE, Hong Kong</a>
                </div>
                <div id="upgrade-plan-title">Choose the Right Plan to Expand Your Business</div>
                <div class="upgrade-plan">
                    <div class="upgrade-plans">
                        <p>Exporters Plus</p>
                        <p class="upgrade-plan-desc">Jumpstart your business with great features and build your profile</p>
                        <p><span class="plan-price">US$69</span>/<span class="plan-period">month</span></p>
                        <div id="plans-plus-btn"><a>See Pricing Plans</a></div>
                        <hr class="hr-line-break" />
                        <div class="plan-features">
                            <p><img src={Tick} width="20" height="20" />Get authenticated &amp; verifed</p>
                            <p><img src={Tick} width="20" height="20" />Instant Business Builder</p>
                            <p><img src={Tick} width="20" height="20" />More Space For Products</p>
                            <p><img src={Tick} width="20" height="20" />More Space For Contact List</p>  
                            <p><img src={Tick} width="20" height="20" />Join more categories   
                            </p><p><img src={Tick} width="20" height="20" />Email Product Listings to Buyers</p>
                            <p><img src={Tick} width="20" height="20" />Access Market Intelligence</p>
                            <p><img src={Tick} width="20" height="20" />Know Your Profile &amp; Showroom Visitors</p>
                            <p><img src={Tick} width="20" height="20" />Access Advance Profile Information</p>
                            <p><img src={Tick} width="20" height="20" />Advance Messaging Features</p>
                            <p><img src={Tick} width="20" height="20" />Bulk Product Upload</p>
                            <p><img src={Tick} width="20" height="20" />PDF download for Showroom</p>
                            <p><img src={Tick} width="20" height="20" />View Competing Quotations</p>
                            <p><img src={Tick} width="20" height="20" />Drive Quality Traffic to Your Website</p>
                            <p><a class="A2" href="plus_featuresdac5.html?view=details">Learn more</a></p>

                        </div>
                    </div>
                    <div class="upgrade-plans">
                        <p>Exporters Premium</p>
                        <p class="upgrade-plan-desc">Exclusive features with comprehensive advertising</p>
                        <p><span class="plan-price">US$69</span>/<span class="plan-period">month</span></p>
                        <div id="plans-permium-btn"><a>See Pricing Plans</a></div>
                        <hr class="hr-line-break" />
                        <div class="plan-features">
                            <p><img src={Tick} width="20" height="20" /><strong>Everything in Exporters Plus</strong></p>
                            <p><img src={Tick} width="20" height="20" />Feature <u>all</u> your products, buying leads and company profile</p>
                            <p><img src={Tick} width="20" height="20" />More Space For Products</p>
                            <p><img src={Tick} width="20" height="20" />More Space For Contact List</p>
                            <p><img src={Tick} width="20" height="20" />Join more categories</p>   
                            <p><img src={Tick} width="20" height="20" />Receive Account Report and Optimization</p>
                            <p><img src={Tick} width="20" height="20" />More Trust Points &amp; Ranking</p>
                            <p><img src={Tick} width="20" height="20" />Priority Support</p>
                            <p><img src={Tick} width="20" height="20" />Broadcast Message By Category</p>
                            <p><a href="">Learn more</a></p>
                        </div>
                    </div>
                </div>   
                
                <div id="upgrade-comment">
                    "We tried using other B2B marketplaces, 
                    and we found Exporters.SG to be the most user-friendly with serious buyers and suppliers."
                    <a href="" >Ramsons Corporation (Japan) Ltd., Japan</a>
                </div>
                <div id="upgrade-plan-title">Why thousands of businesses choose Exporters.SG</div>   
                <table class="upgrade-table-testimonial">
                    <tbod>
                        <tr>
                            <td>
                                <span class="T2"><b>Connect to thousands of global businesses</b></span>
                                <br />
                                <span class="T2">Over 600 product categories in 200+ countries.</span>

                            </td>
                            <td>
                                <span class="T2"><b>Find better trading partners</b></span>
                                <br />
                                <span class="T2">Build your business credibility and trade with good long-term business partners using Trust Points.</span>  

                            </td>
                            <td>
                                <span class="T2"><b>Powerful trade tools</b></span>
                                <br />
                                <span class="T2">Promote your business and products using effective trade tools.</span>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="T2"><b>Easy and simple to use</b></span>
                                <br />
                                <span class="T2">Set up your account and start connecting to other businesses in minutes.</span>

                            </td>
                            <td>
                                <span class="T2"><b>Receive timely updates and trade information</b></span>
                                <br />
                                <span class="T2">Receive daily trade alerts and newsletters on best product offers and buying leads directly in your email inbox.</span>

                            </td>
                            <td>
                                <span class="T2"><b>Priority Support</b></span>
                                <br />
                                <span class="T2">We guide you to make best use of Exporters.SG.</span>

                            </td>
                        </tr>
                    </tbod>
                </table>
                <div id="upgrade-plan-title">Recommended by nearly 90% of Paying Members</div>
                <span id="upgrade-survey-desc">
                    In an in-house survey, 87% of our paying members say they will 
                    recommend Exporters.SG to their business partners and friends.
                    Start experiencing success today. 
                </span>
                <div class="upgrade-testimonial-user">
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                    <div class="testimonial-single-user" style={{backgroundImage: "url("+UserFrame+")"}}>
                        <img src={UserImage} />
                    </div>
                </div>   
            </div>
        </div>
    )
}
export default UpgradeUser;