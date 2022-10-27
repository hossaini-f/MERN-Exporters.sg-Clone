import React from 'react';

import './statics/style.css';
import Eye from './statics/images/fp_seenmore.png'
import Target from './statics/images/fp_target.png'
import Result from './statics/images/fp_results.png'


const FeatureYourProducts = () => {
    return (
        <>
        <div id="fp-firts-banner"></div>
        <div id="fp-second-banner">
            <div>What are the benefits?</div>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={Eye} />
                            <div>More Exposures</div>
                            <span>Your products will be shown in relevant categories, directories &amp; related content.</span>
                        </td>
                        <td>
                            <img src={Target} />
                            <div>Targeted Audiences</div>
                            <span>Your products will be shown in relevant contents to highly targeted visitors.</span>
                        </td>
                        <td>
                            <img src={Result} />
                            <div>Detailed Results</div>
                            <span>You get to see how many clicks and enquiries for your featured products.</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="fp-arrow-down"></div>
        <div class="fp-banner">
            <img src={Eye}/>
            <p>More Exposures</p>
            <div id="fp-partis-1"></div>
            <div class="fp-partis-desc">Shown in relevant categories, directories &amp; related content.</div>
        </div>
        <div id="fp-arrow-down"></div>
        <div class="fp-banner" style={{backgroundColor: '#fff8f2'}}>
            <br/><br/>
            <img src={Target}/><br/><br/>
            <p>Targeted Audiences</p>
            <div id="fp-partis-2"></div>
            <div class="fp-partis-desc">Relevant contents to highly targeted visitors.</div>
        </div>
        <div id="fp-arrow-down"></div>
        <div class="fp-banner" style={{backgroundColor: '#fff'}}>
            <br/><br/>
            <img src={Result}/><br/><br/>
            <p>Detailed Results</p>
            <div id="fp-partis-3"></div>
            <div class="fp-partis-desc">View daily performance, track and message visitors for potential sales. </div>
        </div>
        <div id="fp-face"></div>
        <div id="fp-upgrade">
            <div>Ready to Start?</div>
            <p>Upgrade to Exporters Premium to feature <u>ALL</u> your products.</p>
            <div><a>Upgrade Now!</a></div>
        </div>
        </>
    ) 
}

export default FeatureYourProducts;