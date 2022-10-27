import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import Flags from "react-country-flag";
import queryString from 'query-string';
import crypto from 'crypto-js';
import Header from '../header/header';
import SideBar from '../sidebar/sidebar';
import './statics/style.css';
import Image from './statics/images/image.jpg';
import Flage from './statics/images/flage.png';
import Mark from './statics/images/mark.png';
import Rate from './statics/images/rate.png';
import Auth from './statics/images/av.png';
import Premium from './statics/images/border.png';
import Buy from './statics/images/buy.png';
import SearchProduct from '../search.products/search';
import Countries from './countries';
import SignInAlert from '../../alerts/signIn.alert';
import moment from 'moment';
import MessageBox from '../../../../user dashboard/panel/components/inbox/message';
import AddBuying from '../../../../user dashboard/panel/components/buying/addBuyingLead';
import AuthGetQuote from '../sub.pages/authGetQuote/auth.getquote';
import {getItems, getItemsForCountry} from '../../../../actions/v1/public.content';
import {addNewContact, getEmail} from '../../../../actions/v1/inbox';


const Products = () =>{
    const [isChecked1, setIsChecked1] = useState(true);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [title, setTitle] = useState('products');
    const [showDetails, setShowDetails] = useState(true);
    const [showAddBuyingLead, setShowAddBuyingLead] = useState(false);
    const [getQuote, setGetQuote] = useState(false);
    const [getQuoteTitle, setGetQuoteTitle] = useState('');
    const [memberId, setMemberId] = useState(0);
    const [minOrder, setMinOrder] = useState(0);
    const [deliveryCountry, setDeliveryCountry] = useState('');
    const [cateId, setCateId] = useState(0);
    const [userEmail, setUserEmail] = useState('');
    const [filterCountry, setFilterCountry] = useState('');
    const dispatch = useDispatch();

    const isAuth = JSON.parse(localStorage.getItem('profile'));
    useEffect(()=>{
        if(isAuth){
            dispatch(getEmail(isAuth.result.id))
        }
    },[]);

    const fetchEmail = useSelector((state) => state.Inbox)
    
    useEffect(()=>{

        if(fetchEmail.mail !== "none" && fetchEmail.mail.Email[0].email){
            setUserEmail(fetchEmail.mail.Email[0].email)
        }
    })

    const [showAlert, setShowAlert] = useState(false) 

    const isSelected1 = () => {
            setTitle('products');
            setIsChecked1(true);
            setIsChecked2(false);
            setIsChecked3(false);
    }
    const isSelected2 = () => {
            setTitle('members');
            setIsChecked2(true);
            setIsChecked1(false);
            setIsChecked3(false);
    }
    const isSelected3 = () => {
            setTitle('buying leads');
            setIsChecked3(true);
            setIsChecked1(false);
            setIsChecked2(false);
    }

    const [member, setMember] = useState([]);
    const [buying, setBuying] = useState([]);
    const [selling, setSelling] = useState([]);
    const [contactList, setContactList] = useState([]);
    const fetchData = useSelector((state) => state.Public);
    // Parsings URL Parameters
    const { search } = useLocation();
    const { type,_c } = queryString.parse(search);//Destructure the search string
    const _t = type.replace(/\s/g, "");// to remove withspaces in url parameter

    /**
     * [_c] => varialble to serch for category
     * [_t] => variable to search for [member, products or buyingleads]
     */
    
    useEffect(()=>{
        if(_t === 'members'){
            isSelected2();
        }else if(_t === 'products'){
            isSelected1()
        }else if(_t === 'buyingleads'){
            isSelected3()
        }
    },[])

    // Fetching Data when Category Changed
    useEffect(()=>{
        if(filterCountry === "All" || filterCountry === ""){
            dispatch(getItems(_c, title));
        }else{
            dispatch(getItemsForCountry(_c, title, filterCountry));
        }
    },[_c]);
    
    // Fetching Data when Types Changed
    useEffect(()=>{
        if(filterCountry === "All" || filterCountry === ""){
            dispatch(getItems(_c, title));
        }else{
            dispatch(getItemsForCountry(_c, title, filterCountry));
        }
    },[title]);

    useEffect(()=>{
        if(fetchData.browseItems && fetchData.browseItems.type === 'members'){
            setMember(fetchData.browseItems.data);
            setContactList(fetchData.browseItems.contact);
        }else{
            setMember('')
        }

        if(fetchData.browseItems && fetchData.browseItems.type === 'buyingleads'){
            setBuying(fetchData.browseItems.data);
        }else{
            setBuying('') 
        }

        if(fetchData.browseItems && fetchData.browseItems.type === 'selling'){
            setSelling(fetchData.browseItems.data);
        }else{
            setSelling('')
        }
    });

    // Add to Contact List
    const addContact = (receiverId) => {
        if(isAuth){
            if(isAuth.result.id === receiverId){
                return alert("You can not add your self.");
            }
            dispatch(addNewContact(isAuth.result.id, receiverId));
            dispatch(getItems(_c, title));
            setContactList(fetchData.browseItems.contact);
            
        }else{
            console.log("")
        }
    }
    const [showMessage, setShowMessage] = useState(false);
    const [userId, setUserId] = useState(0);

    // Filter Products, Member and BuyingLeads by Country
    const filterByCountry = () => {
        if(filterCountry === "All"){
            dispatch(getItems(_c, title));
        }else{
            dispatch(getItemsForCountry(_c, title, filterCountry))
        }
    }
    useEffect(()=>{
        filterByCountry();
    },[filterCountry])
    
    return(
        <>
        {/* <SearchProduct /> */}
        <Header category={_c} title={title}/>
        <div class="filter-category-products">
            <div class="filter-category-products-left">
                <div class="filter-category-products-btn">
                    <div class="pc-tabs">
                        <input type="radio" class="link-checked" id="products" name="bc_group" value='1' checked={isChecked1}/>
                        <label for="products">
                            <a onClick={isSelected1}>Products</a>
                        </label>
                        <input type="radio" class="link-checked" id="members" name="bc_group" value='2'  checked={isChecked2}/>
                        <label for="members">
                            <a onClick={isSelected2}>Members</a>
                        </label>
                        <input type="radio" class="link-checked" id="buyingleads" name="bc_group" value='3'  checked={isChecked3}/>
                        <label for="buyingleads">
                            <a onClick={isSelected3}>Buying Leads</a>
                        </label>
                    </div>
                    <div class="filter-country">
                        <Countries onChange={(e) => setFilterCountry(e.target.value)} />
                    </div>
                </div>
                <div class="visited-links">
                    <Link to="/">Home</Link>&nbsp; <i class="fa fa-angle-right"></i>&nbsp;
                    <a>{title}</a>&nbsp; <i class="fa fa-angle-right"></i>&nbsp;
                    <a>{_c}</a>
                </div>
                <div class="searched-result">
                    
                        {title === 'members'?
                           <> <p>{member.length}&nbsp;  {title} found in <b>{_c}</b> <span></span></p></> 
                         :
                          null
                        }
                        {title === 'products'?
                           <> <p>{selling.length}&nbsp;  {title} found in <b>{_c}</b> <span></span></p></> 
                         :
                          null
                        }
                        {title === 'buying leads'?
                           <> <p>{buying.length}&nbsp;  {title} found in <b>{_c}</b> <span></span></p></> 
                         :
                          null
                        } 
                </div>
                {/* <div class="feature-products-ads">
                    <a>Feature your products here.</a>
                </div> */}

                {/* Start Products */}
                { title === "products" && selling.length > 0 && selling !== '' ?
                    
                    selling.map((sell)=>(

                        <div class="filter-category-products-container">
                            {/* [showDetails] used for make shadow the product */}
                            <div class={ showDetails === sell.productId ? "filter-category-products-wrapper" : "" }>
                                <Link to={{pathname:"/single-product-info", search:"?_p="+  crypto.AES.encrypt(JSON.stringify(sell.productId), '#(F9A0G*AJ0)[@3$').toString() }} >
                                    <table  height="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src={sell.image} width="130px" height="110px" />
                                                    <div class="fc-rightsidebar-label">FEATURED</div>
                                                </td>
                                                <td width="100%" valign="top">
                                                    <div class="filter-category-products-title">{sell.model_desc}</div>
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td width="100%" valign="bottom" align="left">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                <Flags countryCode={sell.country.substring(0, 2)} style={{fontSize:"20px"}}/>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="filter-category-products-country">{sell.country}</div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td width="100px" valign="bottom" nowrap="true" align="right">
                                                                    <div class="filter-category-products-price"><span style={{fontSize:"12px"}}>US</span>${sell.price}</div>
                                                                    <div class="filter-category-products-deliver">{sell.shipping_terms}</div>

                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Link>
                                <table class="filter-category-products-table-2" width="100%" style={{marginTop:"3px"}} cellspacing="0" cellpadding="0" border="0">
                                    <tr>
                                        <td width="67%">
                                            <div class="filter-category-prodcts-company">{sell.company}</div>
                                            <div class="filter-category-products-rating" style={{color:"#fff", visibility:"hidden"}}>l</div>
                                                
                                        </td>
                                        <td>
                                            <div class="filter-category-readmore" onClick={(e) => setShowDetails(sell.productId)}>More</div>
                                        </td>
                                        <td>
                                            <div class="filter-category-getquote">
                                                {isAuth ?
                                                <p onClick={()=>{setGetQuote(true); setCateId(sell.cat_id); setDeliveryCountry(sell.country); setMinOrder(sell.min_order); setMemberId(sell.id);setGetQuoteTitle(sell.model_desc)}}>Get Quotation</p>
                                                :
                                                <Link to={{pathname:"/ask-quotation", search:"?_p="+  crypto.AES.encrypt(JSON.stringify(sell.productId), '#(F9A0G*AJ0)[@3$').toString() }} >Get Quotation</Link>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class={ showDetails === sell.productId ? 'f-c-p-show-details': "f-c-p-hide-details"}>
                                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td colspan="2" valign="top" height="100%">
                                                <div class="filter-category-products-details">
                                                    <div class="f-c-p-close" onClick={(e) => setShowDetails(0)}>X</div>
                                                    <span class="f-c-p-info">
                                                        {sell.additional_info}
                                                    </span>
                                                </div>
                                                <div style={{paddingLeft:'10px'}}>
                                                    <a>
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                    <Flags countryCode={sell.country.substring(0, 2)} style={{fontSize:"20px"}}/>
                                                                    </td>
                                                                    <td>
                                                                        <div class="filter-category-products-country"> {sell.country}</div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{borderTop:'1px solid #cccccc',height:'20px',padding:'5px 0px 5px 5px'}}> 
                                                <div style={{height:'20px'}}>
                                                    <span class="f-c-p-tag-title">Tags:</span>
                                                    <a class="f-c-p-tags">{sell.keyword1}</a>&nbsp;
                                                    <a class="f-c-p-tags">{sell.keyword2}</a>&nbsp;
                                                    <a class="f-c-p-tags">{sell.keyword3}</a>&nbsp;
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                ))
                :
                null
                }
                {/* Members Section */}
                { title === "members" && member.length > 0 && member != '' ?
                    
                    member.map((m)=>(
                    
                    <div class="filter-category-products-container">
                        <div class={ showDetails === m.id ? "filter-category-products-wrapper" : "" }>
                            <a href="">
                                <table  height="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div style={{marginLeft:"5px",backgroundPosition:"center cetner",  height:'100px', backgroundRepeat:"no-repeat"}}>
                                                    <img src={m.logo} width="90px" height="90px"  style={{border:"1px solid orange",marginTop:"3px",borderRadius:'5px'}}/>
                                                </div>
                                            </td>
                                            <td width="100%" valign="top">
                                                <div class="filter-category-products-title">
                                                    {m.company}<br/>
                                                    <span style={{fontSize:'12px'}}>{m.business_type}</span>
                                                </div>
                                                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td width="100%" valign="bottom" align="left">
                                                                <table>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                            <Flags countryCode={m.country.substring(0, 2)} style={{fontSize:"20px"}}/>
                                                                            </td>
                                                                            <td>
                                                                                <div class="filter-category-products-country">{m.country}</div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td width="100px" valign="bottom" nowrap="true" align="right">
                                                                <div class="filter-category-products-price">
                                                                    {/* <img src={Auth} />&nbsp;<img src={Auth} />&nbsp;<img src={Auth} />&nbsp;<img src={Auth} /> */}
                                                                </div>
                                                                <div class="filter-category-products-deliver">
                                                                    {/* <img src={Rate} /> */}
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </a>
                             <table class="filter-category-products-table-2" width="100%" style={{marginTop:"3px"}} cellspacing="0" cellpadding="0" border="0">
                                <tr height="40px">
                                        {isAuth 
                                        ?
                                        <>
                                            {contactList.length > 0 ? 
                                                contactList.map((c)=> (
                                                    <>
                                                    {c.receiver_id === m.id ?
                                                        <td width="5%" style={{backgroundColor:"#eee"}}>
                                                            <div class="filter-category-readmore">&nbsp;&nbsp;&nbsp;&nbsp; Added &nbsp;&nbsp;</div>
                                                        </td>
                                                        :
                                                        <td width="5%">
                                                            <div class="filter-category-readmore" onClick={()=> {addContact(m.id)}}>Add Contact</div>
                                                        </td>
                                                        }
                                                    </>
                                                ))
                                                :
                                                <td width="5%">
                                                    <div class="filter-category-readmore" onClick={()=> {addContact(m.id)}}>Add Contact</div>
                                                </td>

                                            }
                                            
                                        </>
                                        :
                                            <td width="5%">
                                                <div class="filter-category-readmore" onClick={()=> setShowAlert(true)}>Add Contact</div>
                                            </td>
                                        }
                                    <td width="60%">
                                        <div class="filter-category-readmore" onClick={(e) => setShowDetails(m.id)}>More</div>
                                    </td>
                                    <td>
                                        <div class="filter-category-getquote">
                                            {isAuth ? 
                                                <div onClick={()=>{setUserId(m.id);setShowMessage(true)}}>Send Message</div>
                                                :
                                                <div onClick={()=> setShowAlert(true)}>Send Message</div>
                                            }
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class={ showDetails === m.id ? 'f-c-p-show-details': "f-c-p-hide-details"}>
                            <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr>
                                        <td colspan="2" valign="top" height="100%">
                                            <div class="filter-category-products-details">
                                                <div class="f-c-p-close" onClick={(e) => setShowDetails(0)}>X</div>
                                                <span class="f-c-p-info">
                                                    {m.business_description}
                                                </span>
                                            </div>
                                            <div style={{paddingLeft:'10px'}}>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                            <Flags countryCode={m.country.substring(0, 2)} style={{fontSize:"20px"}}/>
                                                            </td>
                                                            <td>
                                                                <div class="filter-category-products-country"> {m.country}</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td style={{borderTop:'1px solid #cccccc',height:'20px',padding:'5px 0px 5px 5px'}}> 
                                            <div style={{height:'20px'}}>
                                                <span class="f-c-p-tag-title">Tags:</span>
                                                <a class="f-c-p-tags">tags</a>&nbsp;
                                                <a class="f-c-p-tags">tags</a>&nbsp;
                                                <a class="f-c-p-tags">tags</a>&nbsp;
                                                <a class="f-c-p-tags">tags</a>&nbsp;
                                            </div>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))
                :
                    null
                }
                {/* End Member Section */}
                
                {/* Buying Leads */}
                { title === "buying leads" && buying.length > 0 && buying != '' ?
                    buying.map((buy)=>(
                    
                        <div class="filter-category-products-container">
                            <div class={ showDetails === buy.id ? "filter-category-products-wrapper" : "" }>
                                <Link to={{pathname:"/send-quotation-bl", search:"?_b="+  crypto.AES.encrypt(JSON.stringify(buy.id), '#(F9A0G*AJ0)[@3$') }}>
                                    <table  height="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div style={{marginLeft:"5px"}}>
                                                        <img src={Buy} width="100px" height="100px" />
                                                    </div>
                                                </td>
                                                <td width="100%" valign="top">
                                                    <div class="filter-category-products-title">{buy.product_desc}</div>
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td width="100%" valign="bottom" align="left">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                <Flags countryCode={buy.delivery_location.substring(0, 2)} style={{fontSize:"20px"}}/>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="filter-category-products-country">{buy.delivery_location}</div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td width="100px" valign="bottom" nowrap="true" align="right">
                                                                    <div class="filter-category-products-deliver">
                                                                        {moment(buy.createdAt).format("MMM D")} <br/> {buy.quantity} {buy.unit}
                                                                    </div>
                                                                    {/* <div class="filter-category-products-price" style={{fontSize:"14px"}}>
                                                                        Be the First to reply!
                                                                    </div> */}

                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Link>
                                <table class="filter-category-products-table-2" width="100%" style={{marginTop:"3px"}} cellspacing="0" cellpadding="0" border="0">
                                    <tr height="40px">
                                        <td width="90%" onClick={(e) => setShowDetails(buy.id)}>
                                            <div class="filter-category-readmore">More</div>
                                        </td>
                                        <td id="f-c-reply-btn">
                                            <div class="filter-category-getquote">
                                                <Link to={{pathname:"/send-quotation-bl", search:"?_b="+  crypto.AES.encrypt(JSON.stringify(buy.id), '#(F9A0G*AJ0)[@3$').toString() }}>Reply</Link>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class={ showDetails === buy.id ? 'f-c-p-show-details': "f-c-p-hide-details"}>
                                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td colspan="2" valign="top" height="100%">
                                                <div class="filter-category-products-details">
                                                    <div class="f-c-p-close" onClick={(e) => setShowDetails(0)}>X</div>
                                                    <span class="f-c-p-info">
                                                        {buy.additional_info}
                                                    </span>
                                                </div>
                                                <div style={{paddingLeft:'10px'}}>
                                                    <a>
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                    <Flags countryCode={buy.delivery_location.substring(0, 2)} style={{fontSize:"20px"}}/>
                                                                    </td>
                                                                    <td>
                                                                        <div class="filter-category-products-country"> {buy.delivery_location}</div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <td style={{borderTop:'1px solid #cccccc',height:'20px',padding:'5px 0px 5px 5px'}}> 
                                                <div style={{height:'20px'}}>
                                                    <span class="f-c-p-tag-title">Tags:</span>
                                                    <a class="f-c-p-tags">tags</a>&nbsp;
                                                    <a class="f-c-p-tags">tags</a>&nbsp;
                                                    <a class="f-c-p-tags">tags</a>&nbsp;
                                                    <a class="f-c-p-tags">tags</a>&nbsp;
                                                </div>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))
                    :
                    null
            }
                {/* End Buying Leads */}
            </div>
            {/* Side Bar */}
            <div class="filter-category-products-right">
                <SideBar/>
            </div>
            {/* End Side Bar */}
        </div>
        {title === 'products' &&
        
        <div class="f-c-p-get-quote">
            <div class="f-c-p-quote-inner-div">
                <div id="f-c-p-mobile-hide">
                    <img src={Mark} width="50px" />
                </div>
                <div id="f-c-p-form-wrapper">
                    <div id="f-c-p-g-title">Get Quotations</div>
                    <div id="f-c-p-g-title-des">Fast and efficient way to source products</div>
                    <div id="f-c-p-form">
                        <form>
                            <div>
                                <label>Product Model/Description</label><br/>
                                <textarea rows="4">{_c}</textarea>
                            </div>
                            <div>
                                <label>Order Quantity</label><br/>
                                <input type="text" placeholder="10"/> <span>Units</span>
                            </div>
                            <div id="f-c-p-button">
                                {isAuth ?
                                 <button type="button" onClick={()=> setShowAddBuyingLead(true)}>Next</button>
                                 :
                                 <button type="button" onClick={()=> setShowAlert(true)}>Next</button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div id="f-c-p-counter">
                    <div id="f-c-p-counts">---</div>
                    <div id="f-c-p-active">Active</div>
                    <div id="f-c-p-sellers">Sellers</div>
                </div> */}
            </div>  
        </div>
        }
        <div class="f-p-c-subscribe">
            <div class="f-p-c-subscribe-inner-div">
                <div id="f-c-p-mobile-hide">
                    <img src={Mark} width="50px" />
                </div>
                <div id="f-c-p-form-wrapper">
                    <div id="f-c-p-g-title">Receive Product Alerts for <span><b><u>{_c}</u></b></span></div>
                    <div id="f-c-p-g-title-des">Subscribe and receive latest product updates from our sellers regularly.</div>
                    <div id="f-c-p-form-subscribe">
                        <form>
                            <div>
                                <label>Email:</label>
                                <input type="text" value={userEmail}/>
                            </div>
                            <div id="f-c-p-subscribe-button">
                                <button type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
         {!isAuth && showAlert && <SignInAlert onClick={()=> setShowAlert(false)} />} 
        {isAuth && showMessage && userId > 0 && <MessageBox id={userId} onClick={() => setShowMessage(!showMessage)}/>}
        {showAddBuyingLead && <AddBuying title={_c} onClick={() => setShowAddBuyingLead(!showAddBuyingLead)} />} 
        {getQuote && deliveryCountry != "" && getQuoteTitle != "" && minOrder > 0 && <AuthGetQuote id={memberId} catId={cateId} order={minOrder} country={deliveryCountry} title={getQuoteTitle} category={_c} onClick={() => setGetQuote(!getQuote)}/>}
        </>
    )
}
export default Products;