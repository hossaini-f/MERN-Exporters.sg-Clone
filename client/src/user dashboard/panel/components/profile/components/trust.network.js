import React, {useState} from 'react';
import './statics/style.css';
import TUR from './statics/icons/turkey.png';


const EditTrustNetwork = () => {
    const [display, setDisplay] = useState(true);
    return(
        <>
            <div id="back-wrapper-p" class={display ? "show-message" : "hide-message"}></div>
            <div id="pro-container-g" class={display ? "show-message" : "hide-message"}>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td><a>Trust Network</a></td>
                            <td><div onClick={() =>{setDisplay(false)}}>X</div></td>
                        </tr>
                    </tbody>
                </table>
                <div id="trust-network-fa1">
                    <div>Members that you trust and will recommend.</div>
                    <div id="tnet-fa2">
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <div>
                                <div><a class="a-link-p">EKINOKS MEDIKAL DIS TICARET LTD STI</a></div>
                                <div></div>
                            </div>
                            <div>
                                <div>
                                    <img src={TUR} alt=""/>
                                    <span class="h45-txt" style={{fontSize:"14px"}}> TURKEY</span>
                                </div>
                                <div class="h45-txt" style={{fontSize:"14px"}}>2 Apr</div>
                            </div>
                        </div>
                        <div>
                            <div>Review</div>
                            <div>Remove</div>
                        </div>
                    </div>
                    <div id="tnet-fa2">
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <div>
                                <div><a class="a-link-p">EKINOKS MEDIKAL DIS TICARET LTD STI</a></div>
                                <div></div>
                            </div>
                            <div>
                                <div>
                                    <img src={TUR} alt=""/>
                                    <span class="h45-txt" style={{fontSize:"14px"}}> TURKEY</span>
                                </div>
                                <div class="h45-txt" style={{fontSize:"14px"}}>2 Apr</div>
                            </div>
                        </div>
                        <div>
                            <div>Review</div>
                            <div>Remove</div>
                        </div>
                    </div>
                </div>
                <div id="tips-trnet">
                To add, go to the member's profile, and click <b>Add Trust Network</b>.<br/>
                Invite your business partners to join Exporters.SG and add them to your Trust Networks. 
                </div>
            </div>
        </>
    )
}
export default EditTrustNetwork;