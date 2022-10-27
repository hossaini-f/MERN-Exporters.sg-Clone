import React from 'react';
import './statics/style.css';
import Image from './statics/images/cover.jpg';
import Rate from './statics/images/rate.png';
import Permium from './statics/images/per.png';

const SimilarMember = () => {
    return (
        <>
            <div id="similar-member-container">
                <div id="s-member-wrapper">
                    <div>Similar Top Rated Members</div>
                    <div>
                        <div class="single-s-member">
                            <div style={{backgroundImage: "url("+ Image +")"}}>
                            </div>
                            <div>AC Electronic LTD.</div>
                            <div>
                                <img src={Rate} width="70px" />
                                <img src={Permium} width="70px"/>
                            </div>
                            <div class="p-single-member-overlay"></div>
                        </div>
                        <div class="single-s-member">
                            <div style={{backgroundImage: "url("+ Image +")"}}>
                            </div>
                            <div>AC Electronic LTD.</div>
                            <div>
                                <img src={Rate} width="70px" />
                                <img src={Permium} width="70px"/>
                            </div>
                            <div class="p-single-member-overlay"></div>
                        </div>
                        <div class="single-s-member">
                            <div style={{backgroundImage: "url("+ Image +")"}}>
                            </div>
                            <div>AC Electronic LTD.</div>
                            <div>
                                <img src={Rate} width="70px" />
                                <img src={Permium} width="70px"/>
                            </div>
                            <div class="p-single-member-overlay"></div>
                        </div>
                        <div class="single-s-member">
                            <div style={{backgroundImage: "url("+ Image +")"}}>
                            </div>
                            <div>AC Electronic LTD.</div>
                            <div>
                                <img src={Rate} width="70px" />
                                <img src={Permium} width="70px"/>
                            </div>
                            <div class="p-single-member-overlay"></div>
                        </div>
                        <div class="single-s-member">
                            <div style={{backgroundImage: "url("+ Image +")"}}>
                            </div>
                            <div>AC Electronic LTD.</div>
                            <div>
                                <img src={Rate} width="70px" />
                                <img src={Permium} width="70px"/>
                            </div>
                            <div class="p-single-member-overlay"></div>
                        </div>
                        <div class="single-s-member">
                            <div style={{backgroundImage: "url("+ Image +")"}}>
                            </div>
                            <div>AC Electronic LTD.</div>
                            <div>
                                <img src={Rate} width="70px" />
                                <img src={Permium} width="70px"/>
                            </div>
                            <div class="p-single-member-overlay"></div>
                        </div>

                    </div>
                    <div>
                        <a>See More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SimilarMember;