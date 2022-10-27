import React from 'react';
import './statics/style.css';
import Tick from './statics/images/tick.png';
import Target from './statics/images/target.png';
import Eye from './statics/images/seenmore.png';
import Result from './statics/images/results.png';

const BannerAds = () => {
    return(
        <div class="banner-ads-wrapper">
            <div id="banner-ads-title">
                <p>
                Target Your Customers with<br/> attractive and engaging Banner Ads
                </p>
            </div>
            <div class="banner-ads-main-container">
                <p>What are the benefits?</p>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div><img src={Tick} />Reach out to new customers</div>
                                <span>Target new customers relevant to<br/> your business. </span>

                            </td>
                            <td>
                                <div><img src={Tick} />Display your banner ads in relevant contents.</div>
                                <span>Run your banner ads in highly<br/> targeted contents including our<br/> email newsletters.</span>
                            </td>
                            <td>
                                <div><img src={Tick} />Unlimited pageviews and clicks</div>
                                <span>Flat monthly rate and you can<br/> stop at any time. </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="banner-ads-main-container HiW">
                <p>How it works</p>
                <table>
                    <tbody>
                        <tr>
                            <td><img src={Eye} />
                                <div> 1. Select your target audience</div>
                                <span>Choose from over 600 product categories to target your<br/> audience.</span>

                            </td>
                            <td><img src={Target} />
                                <div>2. Run your banner ads</div>
                                <span>Your ads will be displayed in<br/> selected categories and contents<br/> relevant to your target audience.</span>
                            </td>
                            <td><img src={Result} />
                                <div>3. Measure and manage your ads</div>
                                <span>You get to see detailed results of<br/> your banner ads.</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="banner-ads-main-container">
                <p>Pricing and Availability</p>
                <div id="banner-ads-btn">
                    <a>Contact Us</a>
                </div>

            </div>
        </div>
    )
}
export default BannerAds;