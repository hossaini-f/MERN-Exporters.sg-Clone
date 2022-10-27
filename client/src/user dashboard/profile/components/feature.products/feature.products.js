import React from 'react';
import './statics/style.css';
import Image from './statics/images/image.jpg';

const FeatureProducts = () => {
    return(
        <>
            <div id="p-feature-products-container">
                <div id="p-feature-products-wrapper">
                    <div class="p-single-feature-proudct">
                        <div>FEATURED</div>
                        <div style={{backgroundImage: "url("+ Image +")"}}></div>
                        <div>DT 990 Edition</div>
                        <div>
                            <span>A channel Limited</span>
                            <span><span class="c">USD</span>$1200</span>
                        </div>
                        <div class="p-single-feature-product-overlay"></div>
                    </div>
                    <div class="p-single-feature-proudct">
                        <div>FEATURED</div>
                        <div style={{backgroundImage: "url("+ Image +")"}}></div>
                        <div>DT 990 Edition</div>
                        <div>
                            <span>A channel Limited</span>
                            <span><span class="c">USD</span>$1200</span>
                        </div>
                        <div class="p-single-feature-product-overlay"></div>
                    </div>
                    <div class="p-single-feature-proudct">
                        <div>FEATURED</div>
                        <div style={{backgroundImage: "url("+ Image +")"}}></div>
                        <div>DT 990 Edition</div>
                        <div>
                            <span>A channel Limited</span>
                            <span><span class="c">USD</span>$1200</span>
                        </div>
                        <div class="p-single-feature-product-overlay"></div>
                    </div>
                    <div class="p-single-feature-proudct">
                        <div>FEATURED</div>
                        <div style={{backgroundImage: "url("+ Image +")"}}></div>
                        <div>DT 990 Edition</div>
                        <div>
                            <span>A channel Limited</span>
                            <span><span class="c">USD</span>$1200</span>
                        </div>
                        <div class="p-single-feature-product-overlay"></div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default FeatureProducts;