import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, Redirect } from 'react-router-dom';
import crypto from 'crypto-js';
import queryString from 'query-string';
import './statics/style.css';
import Image from './statics/images/image.jpg';
import {getSingleBuyinglead} from '../../../../../actions/v1/buying.products';
import moment from 'moment';

const SendQuotationToBuyingLeads = () => {
    
    const [buying, setBuying] = useState([]);
    const [allBuying, setAllBuying] = useState([]);
    const dispatch = useDispatch();
    const [buyingLead, setBuyingLead] = useState([]);
    // Parsings URL Parameters
    const { search } = useLocation();
    const { _b } = queryString.parse(search);//Destructure the search string
    const hashValue = _b.replace(/\s/g, "");// to remove withspaces in url parameter
    const bytes = crypto.AES.decrypt(hashValue.toString(), '#(F9A0G*AJ0)[@3$');
    const productId = Number(bytes.toString(crypto.enc.Utf8));

    
    
    useEffect(()=>{
            dispatch(getSingleBuyinglead(productId));
    },[])


    const fetchData = useSelector((state) => state.Buying);

    useEffect(()=>{
        if(fetchData.singleBuyingLead != null && fetchData.singleBuyingLead.buying){
            setBuying(fetchData.singleBuyingLead.buying);
        }else{
            setBuying("")
        }
        if(fetchData.singleBuyingLead != null && fetchData.singleBuyingLead.allBuyingSide){
            setAllBuying(fetchData.singleBuyingLead.allBuyingSide);
        }else{
            setAllBuying("")
        }
    },[])
    

    return(
        <>
        <div class="bl-quote-wrapper">
            <div class="bl-quote-right-wrapper">
                <div class="bl-quote-wrapper-left">
                    <div class="bl-quote-links">
                        <Link to="/">Home</Link>&nbsp;<i class="fa fa-angle-right"></i>
                        <a>Buying Leads</a>&nbsp;<i class="fa fa-angle-right"></i>
                        <a>{buying.length > 0 && buying[0].product_desc}</a>
                    </div>
                    <div class="bl-quote-title">Buying {buying.length > 0 && buying[0].product_desc}</div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Date Post:</td>
                                <td>{buying.length > 0 && moment(buying[0].createdAt).format("DD MMMM")}</td>
                            </tr>
                            {/* <tr>
                                <td>Category::</td>
                                <td><a>Category of Product</a></td>
                            </tr> */}
                            <tr>
                                <td>Purchase Type::</td>
                                <td>{buying.length > 0 && buying[0].purchase_type}</td>
                            </tr>
                            <tr>
                                <td>Order Quantity:</td>
                                <td>{buying.length > 0 && buying[0].quantity}</td>
                            </tr>
                            <tr>
                                <td>Target price per unit:</td>
                                <td>{buying.length > 0 && buying[0].price_per_unit}</td>
                            </tr>
                            <tr>
                                <td>Payment Method:</td>
                                <td>{buying.length > 0 && buying[0].payment_method}</td>
                            </tr>
                            <tr>
                                <td>Delivery Location:</td>
                                <td><a>{buying.length > 0 && buying[0].country}</a></td>
                            </tr>
                            <tr>
                                <td>Delivery Time:</td>
                                <td>{buying.length > 0 && buying[0].delivery_time} upon confirmation</td>
                            </tr>
                            <tr>
                                <td>Shipping Terms:</td>
                                <td><a>{buying.length > 0 && buying[0].shipping_terms}</a></td>
                            </tr>
                            <tr>
                                <td>Additional Information:</td>
                                <td>{buying.length > 0 && buying[0].additional_info != "" ? buying[0].additional_info : "None"}</td>
                            </tr>
                            <tr>
                                <td>Keywords:</td>
                                <td><a>{buying.length > 0 && buying[0].product_desc} </a></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="bl-quote-button">
                        <a>Send Quotation</a>
                    </div>
                </div>
                <div class="bl-quote-wrapper-left">
                    <div id="bl-quote-subs-title">Receive Buying Leads Alerts for <u>{buying.length > 0 && buying[0].product_desc}</u> </div>
                    <p id="bl-qoute-subs-desc">Subscribe and receive latest buying leads from buyers regularly.</p>
                    <div class="bl-quote-form-subs">
                        <form>
                            <label>Email: </label>
                            <input type="text" />
                            <button type="button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="bl-quote-wrapper-right">
                <div>Related Buying Leads</div>
                <div>
                    <ul>
                        {allBuying.length > 0 && allBuying != "" ?
                            allBuying.map((buy)=> (

                                <li>Buy <Link to={{pathname:"/send-quotation-bl", search:"?_b="+  buy.id }}>
                                        {buy.product_desc} 
                                        </Link> {buy.country}
                                </li>
                            ))
                        :
                        <p style={{fontFamily:"verdana",fontSize:"14px"}}>No related Buying Lead found.</p>
                        }
                    </ul>
                </div>
                {/* <div><a>More</a></div> */}
            </div>
        </div>
        <div class="bl-quote-bottom-container">
            <div class="bl-quote-featured-p">
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td class="bl-quote-right-sidebar-container">
                                <a href="" rel="noflow" target="_blank">
                                    <div class="bl-quote-right-sidebar-wrapper">
                                        <div class="bl-quote-rightsidebar-label">FEATURED</div>
                                        <div class="bl-quote-rightsidebar-pic" style={{backgroundImage: "url("+ Image +")"}} >
                                            <div class="bl-quote-rightsidebar-overlay"></div>
                                        </div>
                                        <div class="bl-quote-rightsidebar-tag">swisse health supplement</div>
                                    </div>
                                </a>
                            </td>
                        </tr>    
                    </tbody> 
                </table>
            </div>
            <div class="bl-quote-featured-p">
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td class="bl-quote-right-sidebar-container">
                                <a href="" rel="noflow" target="_blank">
                                    <div class="bl-quote-right-sidebar-wrapper">
                                        <div class="bl-quote-rightsidebar-label">FEATURED</div>
                                        <div class="bl-quote-rightsidebar-pic" style={{backgroundImage: "url("+ Image +")"}}>
                                            <div class="bl-quote-rightsidebar-overlay"></div>
                                        </div>
                                        <div class="bl-quote-rightsidebar-tag">swisse health supplement</div>
                                    </div>
                                </a>
                            </td>
                        </tr>    
                    </tbody> 
                </table>
            </div>
            <div class="bl-quote-featured-p">
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td class="bl-quote-right-sidebar-container">
                                <a href="" rel="noflow" target="_blank">
                                    <div class="bl-quote-right-sidebar-wrapper">
                                        <div class="bl-quote-rightsidebar-label">FEATURED</div>
                                        <div class="bl-quote-rightsidebar-pic" style={{backgroundImage: "url("+ Image +")"}}>
                                            <div class="bl-quote-rightsidebar-overlay"></div>
                                        </div>
                                        <div class="bl-quote-rightsidebar-tag">swisse health supplement</div>
                                    </div>
                                </a>
                            </td>
                        </tr>    
                    </tbody> 
                </table>
            </div>
            <div class="bl-quote-featured-p">
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td class="bl-quote-right-sidebar-container">
                                <a href="" rel="noflow" target="_blank">
                                    <div class="bl-quote-right-sidebar-wrapper">
                                        <div class="bl-quote-rightsidebar-label">FEATURED</div>
                                        <div class="bl-quote-rightsidebar-pic" style={{backgroundImage: "url("+ Image +")"}}>
                                            <div class="bl-quote-rightsidebar-overlay"></div>
                                        </div>
                                        <div class="bl-quote-rightsidebar-tag">swisse health supplement</div>
                                    </div>
                                </a>
                            </td>
                        </tr>    
                    </tbody> 
                </table>
            </div>
        </div>
        </>
    )
}
export default SendQuotationToBuyingLeads;