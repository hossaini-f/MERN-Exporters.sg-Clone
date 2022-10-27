import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReCAPTCHA from "react-google-recaptcha";
import {Link, useLocation} from 'react-router-dom';
import crypto from 'crypto-js';
import moment from 'moment';
import queryString from 'query-string';
import './statics/style.css';
import Auth from './statics/images/auth.png';
import Rate from './statics/images/rate.png';
import Rate_a from './statics/images/rate_a.png';
import { getSingleProductInfo } from '../../../../../actions/v1/public.content';
import {sendGetQuote, getQuoteandCreateAccount} from '../../../../../actions/v1/inbox';
import Countries from './countries';
import DoneAlert from './done.alert';

const ProductInfoQuotation = (props) => {
    const [showAlert, setShowAlert] = useState(false);
    const isAuth = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const [member, setMember] = useState([]);
    const [product, setProduct] = useState([]);
    const [review, setReview] = useState([]);   
    
    // Parsings URL Parameters
    const { search } = useLocation();
    const { _p } = queryString.parse(search);//Destructure the search string
    const hashValue = _p.replace(/\s/g, "");// to remove withspaces in url parameter
    const bytes = crypto.AES.decrypt(hashValue.toString(), '#(F9A0G*AJ0)[@3$');
    const productId = Number(bytes.toString(crypto.enc.Utf8));
   
    // Getting Product Information
    useEffect(()=>{
        dispatch(getSingleProductInfo(productId));
    },[])

    const fetchData = useSelector((state) => state.Public);

    useEffect(()=>{
        // Fetching Product Information
        if(fetchData.singleProductInfo && fetchData.singleProductInfo.product){
            setProduct(fetchData.singleProductInfo.product);
        }else{
            setProduct('none')
        }
        // Fetching Member Information
        if(fetchData.singleProductInfo && fetchData.singleProductInfo.member){
            setMember(fetchData.singleProductInfo.member);
        }else{
            setMember('none')
        }
        // Fetching Member Reviews
        if(fetchData.singleProductInfo && fetchData.singleProductInfo.review){
            setReview(fetchData.singleProductInfo.review);
        }else{
            setReview('none')
        }
    })

    // Submitting Form [Ask for Quotation]
    // 1: If User is Auhtenticated
    const [formData, setFormData] = useState({
        sender: "0",
        receiver: "",
        order: "",
        product: "",
        date: moment().format("DD-MM-YYYY"),
        country: "",
        category: "",
        additional: '',
        buyingLead: 'No',
        joinCategory: 'No'
    });
    
    
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const [checkbox1, setCheckbox1] = useState(true);
    const [checkbox2, setCheckbox2] = useState(true);

    const onChangeCheckbox1 = (e) => {
        if(checkbox1){
            formData.buyingLead = "Yes";
        }else{
            formData.buyingLead = "No";
        }
    }
    const onChangeCheckbox2 = (e) => {
        if(checkbox2){
            formData.joinCategory = "Yes";
        }else{
            formData.joinCategory = "No";
        }
    }
    
    useEffect(()=>{
        formData.sender = isAuth ? isAuth.result.id : "0";
        formData.product = product.length > 0 && product != "none" ? product[0].model_desc : "";
        formData.order = product.length > 0 && product != "none" ? product[0].min_order : "";
        formData.category = product.length > 0 && product != "none" ? product[0].cat_id : "None";
        formData.receiver = member.length > 0 && member != "none" ? member[0].id : "0";
        formData.country = member.length > 0 && member != "none" ? member[0].country : "None";
    },[]);
    const submitFormAuth = (e) => {
        e.preventDefault();
        dispatch(sendGetQuote(formData));
        setShowAlert(true);
    }

    // 2: If User is Not Auhtenticated
    const [isTerms, setIsTerms] = useState(false);
    const [unAuthForm, setUnAuthForm] = useState({
        order: '0',
        additional:"none",
        email:'',
        company:'',
        name:'',
        country:''
    });

    const onChangeUnAuth = (e) => {
        setUnAuthForm({...unAuthForm, [e.target.name]: e.target.value});
    }
    useEffect(()=>{
        unAuthForm.order = product.length > 0 && product != "none" ? product[0].min_order : "";
    },[])
    const submitFormUnAuth = (e) => {
        e.preventDefault();
        if(formData.email != "" && formData.country != "" && formData.name != "" && formData.company != ""){
            dispatch(getQuoteandCreateAccount(unAuthForm));
            setShowAlert(true);
        }else{
            alert("Please Fill the form fields.")
        }
    }
    // Google verification
    const [googleToken, setGoogleToken] = useState("")
    const setVerified = (e) => {
        setGoogleToken(e);
    }

    return(
        <>
        <div class="s-p-wrapper">
            <div class="s-p-left-side">
                <div class="s-p-links">
                    <Link to="/">Home</Link>&nbsp;<i class="fa fa-angle-right"></i>
                    <Link to="#">Members</Link>&nbsp;<i class="fa fa-angle-right"></i>
                    <Link to="#">{member.length > 0 && member != "none" ? member[0].company : ""}</Link>&nbsp;<i class="fa fa-angle-right"></i>
                    <a>{product.length > 0 && product != "none" ? product[0].category : ""}</a>
                </div>
                <div class="s-p-product-name">{product.length > 0 && product != "none" ? product[0].model_desc : ""} </div>
                <div class="s-p-product-details">
                    <div class="s-p-product-pic">
                        <img src={product.length > 0 && product != "none" ? product[0].image : ""} width="250px" height="200px"/>
                    </div>
                    <div class="s-p-user-info">
                        <div id="s-p-product-status">{product.length > 0 && product != "none" ? "US$"+product[0].price : "Price on Enquiry"}</div>
                        <div id="s-p-product-details">
                            Minimum {product.length > 0 && product != "none" ? product[0].min_order + " " + product[0].unit : "-"} per order.
                            (available in {member.length > 0 && member != "none" ? member[0].country : ""})
                        </div>
                        
            
                        {/* <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td><img src={Auth} /></td>
                                    <td><span>Authenticated &amp; verified Seller</span></td>
                                    <td><img src={Auth} /></td>
                                    <td><span>Exporter &amp; Importer</span></td>
                                </tr>
                                <tr>
                                    <td><img src={Auth} /></td>
                                    <td><span>Authenticated &amp; verified Seller</span></td>
                                    <td><img src={Auth} /></td>
                                    <td><span>Exporter &amp; Importer</span></td>
                                </tr>
                                <tr>
                                    <td><img src={Auth} /></td>
                                    <td><span>Authenticated &amp; verified Seller</span></td>
                                    <td><img src={Auth} /></td>
                                    <td><span>Exporter &amp; Importer</span></td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                </div>
                <div class="s-p-product-info-sec">
                    <div id="s-p-info-title">Product Information</div>
                    <hr class="HR"/>
                    <table width="100%" cellSpacing="0" cellPadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>Payment:</td>
                                <td>{product.length > 0 && product != "none" ? product[0].payment_method : ""}</td>
                            </tr>
                            <tr>
                                <td valign="top">Delivery:</td>
                                <td valign="top"> {product.length > 0 && product != "none" ? product[0].delivery_time : ""} from today upon confirmation.<br/>
                                    <a>{product.length > 0 && product != "none" ? product[0].shipping_terms : ""}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Valid till:</td>
                                <td>{product.length > 0 && product != "none" ? moment(product[0].expiry_date).format("DD MMMM YYYY") : ""}</td>
                            </tr>
                            <tr>
                                <td>Listed on:</td>
                                <td>{product.length > 0 && product != "none" ? moment(product[0].createdAt).format("DD MMMM YYYY") : ""} 
                                    {/* <span>1543 <i class="fa fa-eye"></i></span> */}
                                </td>
                            </tr>
                            <tr>
                                <td>SKU:</td>
                                <td>{product.length > 0 && product != "none" ? product[0].sku_no : ""}</td>
                            </tr>
                            <tr>
                                <td>Product ID:</td>
                                <td>{product.length > 0 && product != "none" ? product[0].id : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="s-p-products-related-tags">
                        <span><a>{product.length > 0 && product != "none" ? product[0].keyword1 : ""}</a></span>
                        <span><a>{product.length > 0 && product != "none" ? product[0].keyword2 : ""}</a></span>
                        <span><a>{product.length > 0 && product != "none" ? product[0].keyword3 : ""}</a></span>
                        
                    </div>
                </div>
                <div class="s-p-about-seller">
                    <div id="s-p-info-title">About Seller</div>
                    <hr class="HR"/>
                    <table class="s-p-about-user" cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            <tr>
                                <td valign="top">
                                    <img src={member.length > 0 && member != "none" ? member[0].logo : ""} />
                                </td>
                                <td valign="top">
                                    <a>{member.length > 0 && member != "none" ? member[0].company : ""}</a><br/>
                                    <img src={Rate} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="s-p-about-text">
                    {member.length > 0 && member != "none" ? member[0].business_description : ""} 
                    </div>
                    {/* <table class="s-p-user-auth-pr">
                        <tbody>
                            <tr>
                                <td><img src={Auth}/></td>
                                <td>Authenticated &amp; verified</td>
                                <td><img src={Auth}/></td>
                                <td>Exporter and Importer</td>
                            </tr>
                            <tr>
                                <td><img src={Auth}/></td>
                                <td>Authenticated &amp; verified</td>
                                <td><img src={Auth}/></td>
                                <td>Exporter and Importer</td>
                            </tr>
                            <tr>
                                <td><img src={Auth}/></td>
                                <td>Authenticated &amp; verified</td>
                                <td><img src={Auth}/></td>
                                <td>Exporter and Importer</td>
                            </tr>
                            <tr>
                                <td><img src={Auth}/></td>
                                <td>Authenticated &amp; verified</td>
                                <td><img src={Auth}/></td>
                                <td>Exporter and Importer</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
                <div class="s-p-buyers-review">
                    <table>
                        <tbody>
                            <tr>
                                <td valign="top" width="280px"><div id="s-p-info-title">Buyers' Reviews</div></td>
                                <td valign="top"><img src={Rate_a}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <hr class="HR"/>
                    <table class="s-p-review-table">
                        <tbody>
                            <tr>
                                <td valign="top" width="280px">On Time Delivery:</td>
                                <td valign="middle"><img src={Rate_a}/></td>
                            </tr>
                            <tr>
                                <td valign="top" width="280px">Goods arrived in good condition:</td>
                                <td valign="middle"><img src={Rate_a}/></td>
                            </tr>
                            <tr>
                                <td valign="top" width="280px">Provides Good Support:</td>
                                <td valign="middle"><img src={Rate_a}/></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Review Area */}
                    {review.length> 0 && review != "none" ?
                        review.map((rev)=>(
                        <>
                            <div class="s-p-buyers-comment">
                                <div>Outstanding <img src={Rate_a}/></div>
                                <div id="s-p-single-comment">
                                    <div>
                                        <img src={rev.logo}/>
                                    </div>
                                    <div>
                                        {rev.company}<br/>
                                        <small> on {moment(rev.createdAt).format("DD MMMM YYYY")} - Buyer</small>
                                    </div>
                                </div>
                                <div>"{rev.comments}"</div>
                            </div>
                            <hr class="HR"/>
                        </>
                            ))
                    :
                    <></>
                    }
                 </div>
            </div>
            <div class="s-p-right-side">
                {/* This is Side Bar */}
                    <div class="s-p-right-quote-title">Ask for Quotation</div>
                    <div class="s-p-right-form-container">
                        <form>
                            <div>
                                <label>Order Quantity</label><br/>
                                <input type="text" style={{width:"115px"}} id="input-pl1200" name="order" onChange={isAuth ? onChange : onChangeUnAuth} placeholder={product.length > 0 && product != "none" && product[0].min_order}/> <span>Unit</span>
                            </div>
                            <div>
                                <textarea placeholder="Additional details you would like to include" rows="5" name="additional" onChange={isAuth ? onChange: onChangeUnAuth}>
                                  
                                </textarea>
                            </div>
                            {isAuth ?
                            <div id="div-input-128XX">
                                <input type="checkbox" id="1" onChange={()=>{onChangeCheckbox1();setCheckbox1(!checkbox1)}}/>
                                <label for="1" >Post as a Buying Lead</label><br/>
                                <input type="checkbox" id="2"/>
                                <label for="2">Add seller to Contact List</label><br/>
                                <input type="checkbox" id="3"  onChange={()=>{onChangeCheckbox2();setCheckbox2(!checkbox2)}}/>
                                <label for="3">Join <span style={{color:"#0070d3"}}>{product.length > 0 && product != "none" ? product[0].category : ""}</span> Category</label>
                            </div>
                                :
                                <></>
                            }
                            {isAuth ?<></>
                            :
                            <>
                            <div class="s-p-right-quote-title">Your Company Information</div><br/>
                            <div>
                                <input type="text" placeholder="Email address" name="email" onChange={onChangeUnAuth}/>
                            </div>
                            <div>
                                <input type="text" placeholder="Confirm Email address"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Company Name" name="company" onChange={onChangeUnAuth}/>
                            </div>
                            <div>
                                <input type="text" placeholder="Your Name" name="name" onChange={onChangeUnAuth}/>
                            </div>
                            <div style={{marginBottom:"10px"}}>
                                <Countries onChange={onChangeUnAuth} />
                            </div>
                            
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_VERIFICATION}
                                onChange={(e)=>setVerified(e)}
                            />
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" id="privacy" onChange={()=> setIsTerms(!isTerms)} />
                                            </td>
                                            <td>
                                                <label for="privacy">
                                                An account will be created for you and by continuing, 
                                                you understand that our services are for business purpose
                                                only and you understand and agree to our <Link to="/terms-of-services">Terms of Service</Link>.	
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </>
                            }
                            <div>
                                {isAuth ?
                                    <button class="active-btn32" onClick={(e)=>submitFormAuth(e)}>Send Enquiry</button>
                                 : 
                                    <>
                                         {isTerms && googleToken != "" ?
                                            <button class="active-btn32" onClick={(e)=>submitFormUnAuth(e)}>Send Enquiry</button>
                                        :
                                            <button type="button" class="disabled-btn32">Send Enquiry</button>
                                        }
                                    </>
                                }
                            </div>
                        </form>
                        <div class="s-p-quote-more-seller">
                            <div>More Sellers</div>
                            <div><a><b>10020</b> sellers</a> offering this product.</div>
                        </div>
                        <div class="s-p-quote-more-seller">
                            <div>Selling This</div>
                            <a>Post your product.</a>
                            <div><a><b>14</b> buyers</a> looking for similar product.</div>
                        </div>
                    </div>
                {/* This is Side Bar */}
            </div>
        </div>
        <div class="s-p-seller-similar-products">
            <div id="s-p-s-p-title">Similar Products From This Seller</div>
            <div id="s-p-s-p-wrapper">
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                            <table width="230px" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td align="left"><div class="sp-p-tag">PREVCOM SRL</div></td>
                                                        <td align="right"><div class="sp-p-price"><span class="bc-currency">USD</span> 99.9</div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                            <table width="230px" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td align="left"><div class="sp-p-tag">PREVCOM SRL</div></td>
                                                        <td align="right"><div class="sp-p-price"><span class="bc-currency">USD</span> 99.9</div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                            <table width="230px" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td align="left"><div class="sp-p-tag">PREVCOM SRL</div></td>
                                                        <td align="right"><div class="sp-p-price"><span class="bc-currency">USD</span> 99.9</div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                            <table width="230px" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td align="left"><div class="sp-p-tag">PREVCOM SRL</div></td>
                                                        <td align="right"><div class="sp-p-price"><span class="bc-currency">USD</span> 99.9</div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
            </div>
        </div>
        <div class="s-p-seller-similar-products">
            <div id="s-p-s-p-title">Similar categories you might be interested</div>
            <div id="s-p-s-p-wrapper">
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
            </div>
        </div>
        <div class="s-p-seller-similar-products">
            <div id="s-p-s-p-wrapper" style={{padding:"20px",backgroundColor:"#f8d7ba"}}>
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                        <div class="bc-rightsidebar-label">FEATURED</div>
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                            <table width="230px" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td align="left"><div class="sp-p-tag">PREVCOM SRL</div></td>
                                                        <td align="right"><div class="sp-p-price"><span class="bc-currency">USD</span> 99.9</div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                        <div class="bc-rightsidebar-label">FEATURED</div>
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                            <table width="230px" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td align="left"><div class="sp-p-tag">PREVCOM SRL</div></td>
                                                        <td align="right"><div class="sp-p-price"><span class="bc-currency">USD</span> 99.9</div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                        <div class="bc-rightsidebar-label">FEATURED</div>
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                            <table width="230px" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td align="left"><div class="sp-p-tag">PREVCOM SRL</div></td>
                                                        <td align="right"><div class="sp-p-price"><span class="bc-currency">USD</span> 99.9</div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
                <div class="s-p-bottom-featured-p">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td class="s-p-bottom-container">
                                    <a href="" rel="noflow" target="_blank">
                                        <div class="s-p-bottom-wrapper">
                                        <div class="bc-rightsidebar-label">FEATURED</div>
                                            <div class="s-p-bottom-pic">
                                                <div class="s-p-bottom-overlay"></div>
                                            </div>
                                            <div class="bc-rightsidebar-tag">swisse health supplement</div>
                                            <table width="230px" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td align="left"><div class="sp-p-tag">PREVCOM SRL</div></td>
                                                        <td align="right"><div class="sp-p-price"><span class="bc-currency">USD</span> 99.9</div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </a>
                                </td>
                            </tr>    
                        </tbody> 
                    </table>
                </div>
            </div>
        </div>
        {showAlert && <DoneAlert onClick={()=> setShowAlert(false)} />}
        </>
    )
}
export default ProductInfoQuotation;