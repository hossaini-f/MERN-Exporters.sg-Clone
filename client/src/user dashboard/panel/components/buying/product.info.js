import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import './statics/style.css';
import EmailSubs from './statics/icons/sub.jpg';
import moment from 'moment';

const Info = (props) => {
    const id = props.id;
    const [tab, setTab] = useState("details");
    const [showTabs, setShowTabs] = useState(true);
    const fetchData = useSelector((state) => id ? state.Buying.allBuyingLead.buyingLead.find((p) => p.id === id) : null);
    
    return (
        <>
        {showTabs && 
        <>
        <div class="bl-100-wrapper"></div>
        <div class="bl-100-container">
            <table cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr>
                        <td>Buying Leads Detail</td>
                        <td><div onClick={() => setShowTabs(false)}>X</div></td>
                    </tr>
                </tbody>
            </table>
            <div class="bl-100p-details">
                <div id="bl-100p-tabs">
                    <div onClick={() => setTab("details")} class={tab === "details" ? "bl-100active" : "bl-100inactive"}>Details</div>
                    <div onClick={() => setTab("quotation")} class={tab === "quotation" ? "bl-100active": "bl-100inactive"}>Quotaion Alert</div>
                </div>
                {tab === "details" 
                    ?(
                        
                        <div id="bl-tab-details">
                            <div>
                                <span class="bldetail-h1">Product Required:</span><br/>
                                <span class="bldetail-h2" style={{fontSize:"16px"}}>
                                    <b>{fetchData.product_desc}</b>&nbsp;
                                    in <span class="col">Anticonvulsants</span> on {moment(fetchData.createdAt).format("D MMM")}</span> 
                            </div>
                            <div id="more-bl-d">
                                <div>
                                    <span class="bldetail-h1">Target Price (Per Unit):</span><br/>
                                    <span class="bldetail-h2"><b>US${fetchData.price_per_unit}</b></span>
                                </div>
                                <div>
                                    <span class="bldetail-h1">Order Quantity:</span><br/>
                                    <span class="bldetail-h2"><b>{fetchData.quantity} {fetchData.unit} {fetchData.purchase_type}</b></span>
                                </div>
                                <div>
                                    <span class="bldetail-h1">Delivery Location:</span><br/>
                                    <span class="bldetail-h2 col"><b>{fetchData.delivery_location}</b></span>
                                </div>
                                <div>
                                    <span class="bldetail-h1">Date Posted:</span><br/>
                                    <span class="bldetail-h2"><b>{moment(fetchData.createdAt).format("D MMM")}</b></span>
                                </div>
                            </div><br style={{marginBottom:"15px"}}/>
                            <div>
                                <span class="bldetail-h1">Payment/Shipment:</span><br/>
                                <span class="bldetail-h2"><b>{fetchData.payment_method}, Ship by <span class="col">{fetchData.shipping_terms}</span>, Delivery {fetchData.delivery_time} upon confirmation</b></span> 
                            </div>
                        </div>

                    )
                    :(
                        
                        <div id="bl-tab-details" style={{overflowY:"scroll",height:"200px"}}>
                            <span id="bl-1-dir">
                                These are quotations previously received from other suppliers. 
                                Use these information to adjust your price to make your offer more competitive. 
                            </span>
                            <div id="bl-e-dir">
                                <img src={EmailSubs} alt="" />
                                <a>Receive Quotation Email Alert</a>
                            </div>
                        </div>
                    )
                }

            </div>
            {/* <div class="ap-info">Your account <a>must be approved</a> before you can send quotation.</div> */}
        </div>
        </>
            }
        </>
    )
}
export default Info;