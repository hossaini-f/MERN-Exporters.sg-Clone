import React,{useState, useEffect} from 'react';
import Flags from "react-country-flag";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './statics/style.css';
import AddProduct from './statics/images/post.png';
import Auth from './statics/images/auth.png';
import BuyingLead from './statics/images/buyingleads.png';
import Icon from './statics/images/logoBW.png';
import Flage from './statics/images/flage.png';
import Image from './statics/images/image.jpg';
import Rate from './statics/images/rate.png';
import BuyingLeadsIcon from './statics/images/bl.png';
import Loader from '../../../../components/v1/loader/loader';
import moment from 'moment';

import {getFeedsBuyingLeads, 
        getMemberCategory,
        getFeedsSellings,
        getFeedsMember
        } from '../../../../actions/v1/feeds';

const Feed = () => {
    const [isChecked1, setIsChecked1] = useState(true);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    
    const isSelected1 = (e) => {
        e.preventDefault();
            setIsChecked1(true);
            setIsChecked2(false);
            setIsChecked3(false);
            setIsChecked4(false);
    }
    const isSelected2 = (e) => {
        e.preventDefault();
            setIsChecked2(true);
            setIsChecked1(false);
            setIsChecked3(false);
            setIsChecked4(false);
    }
    const isSelected3 = (e) => {
        e.preventDefault();
            setIsChecked3(true);
            setIsChecked1(false);
            setIsChecked2(false);
            setIsChecked4(false);
    }
    const isSelected4 = (e) => {
        e.preventDefault();
            setIsChecked4(true);
            setIsChecked1(false);
            setIsChecked2(false);
            setIsChecked3(false);
    }
    // Fetching Data 
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    
    const fetchData = useSelector((state) => state.Feeds);
    const profileId = JSON.parse(localStorage.getItem('profile')).result.id;
    
    const [buyingLeads, setBuyingLeads] = useState([]);
    const [category, setCategory] = useState([]);
    const [sellings, setSellings] = useState([]);
    const [member, setMember] = useState([]);

    useEffect(() => {
        setLoading(true)
        // Fetching Buying Leads
        dispatch(getFeedsBuyingLeads(profileId));
        // Fetching Selling Products
        dispatch(getFeedsSellings(profileId));
        // Fetching Member Categories
        dispatch(getMemberCategory(profileId))
        // Fetching Members
        dispatch(getFeedsMember(profileId));
    },[]);

    useEffect(() => {
        if(fetchData.feedsBuyingLeads){
            setBuyingLeads(fetchData.feedsBuyingLeads.feedsBuying);
            setLoading(false)
        }else{
            setBuyingLeads('none');
        }

        if(fetchData.feedsCategory){
            setCategory(fetchData.feedsCategory.memberCategories);
            setLoading(false);
        }else{
            setCategory('none')
        }

        if(fetchData.feedsSelling){
            setSellings(fetchData.feedsSelling.feedsSellings);
            setLoading(false);
        }else{
            setSellings('none')
        }

        if(fetchData.feedsMember){
            setMember(fetchData.feedsMember.feedMembers);
            setLoading(false);
        }else{
            setMember('none');
        }
    })
    return(
        <>
            <div id="feed-container">
                <div id="feed-top-container">
                    <span>Feeds</span>
                    <div>
                        <form>
                            <input type="text" placeholder="Search..."/>
                            <button><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div id="feed-top-links">
                    <div>
                        <Link to="/user/buying" style={{textDecoration:'none'}}>
                            <img src={BuyingLead} alt="Good"/>
                            <div>
                                <span><b>Post Buying Leads</b></span><br/>
                                <span>
                                    Get quotations from thousand of suppliers - fast and free.
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/user/selling" style={{textDecoration:'none'}}>
                            <img src={AddProduct} alt="Good"/>
                            <div>
                                <span><b>Add Products</b></span><br/>
                                <span>
                                    Promote your products to<br/> thousands of buyers worldwide.
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <a>
                            <img src={Auth} alt="Good"/>
                            <div>
                                <span><b>Get Authenticated &amp; Verified</b></span><br/>
                                <span>
                                    5 reasons why your account should be authenticated.
                                </span>
                            </div>
                        </a>
                    </div>
                    {/* Mobile-sec */}
                    <div>
                        <a>
                            <img src={BuyingLead} alt="Good"/>
                            <div>
                                <span>Post Buying Leads</span>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a>
                            <img src={AddProduct} alt="Good"/>
                            <div>
                                <span>Add Products</span>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a>
                            <img src={Auth} alt="Good"/>
                            <div>
                                <span>Get A&amp;V</span>
                            </div>
                        </a>
                    </div>
                </div>
                {/* Filters */}
                <div id="f-filter-buttons">
                    <div class="feed-filter-btns">
                        <input type="radio" class="link-checked" id="buyingleads" name="bc_group" value='1'  checked={isChecked1}/>
                        <label for="buyingleads"><a onClick={isSelected1}>All</a></label>
                        <input type="radio" class="link-checked" id="buyingleads" name="bc_group" value='2'  checked={isChecked2}/>
                        <label for="buyingleads"><a onClick={isSelected2}>Buying Leads</a></label>
                        <input type="radio" class="link-checked" id="members" name="bc_group" value='3'  checked={isChecked3}/>
                        <label for="members"><a onClick={isSelected3}>Members</a></label>
                        <input type="radio" class="link-checked" id="products" name="bc_group" value='4' checked={isChecked4}/>
                        <label for="products"><a onClick={isSelected4}>Products</a></label>
                    </div>
                    <div id="f-btns-wrapper">
                        <select>
                            {category.length > 0 && category !== 'none'
                            ?
                                <option>All ({category.length}) Category</option>
                            :
                                <option>All (0) Category</option>
                            }
                            {category.length > 0 && category !== 'none'
                             ?  
                                category.map((c) => (
                                    <option>{c.category}</option>
                                    
                                ))
                             :
                                null
                             }
                        </select>
                        <div id="feed-mc-btn">
                            <Link to="/user/manage-category">Manage Category</Link>
                        </div>
                    </div>
                </div>
                {loading && <div class="loader-j"><Loader /></div>}
                {/* BuyingLeads */}
                    
                <div class={ isChecked1 || isChecked2 ? "feeds-buyingleads-container feedsShow" : "feedsHide"}>
                    <div class="feedsbuyingleads-title">
                        {buyingLeads.length > 0 && buyingLeads !== "none" ? moment(buyingLeads[0].createdAt).fromNow() : null}
                    </div>
                        {buyingLeads.length > 0 && buyingLeads !== "none"
                            ?
                            buyingLeads.map((buy) => (
                                <>
                            {buy.featured !== "Yes" &&
                            <div class="feeds-single-bl" style={{marginBottom:"4px"}}>
                                
                                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td class="feeds-table-container">
                                                <a>
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{paddingRight:"5px"}} width="50px" valign="top">
                                                                    <div style={{backgroundImage:"url("+Icon+")", backgroundPosition:"top left",backgroundRepeat:"no-repeat",backgroundSize:"50px",width:"50px", height:"50px"}}></div>
                                                                </td>
                                                                <td>
                                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="left">
                                                                                    <span class="feed-table-txt1" style={{color:"#00a321"}}>
                                                                                        <b>Buying Leads</b>
                                                                                    </span>
                                                                                </td>
                                                                                <td style={{paddingRight:"10px"}} width="60px" align="right">
                                                                                    <span class="feed-table-txt1">{moment(buy.createdAt).format("D MMM")}</span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="2" valign="top" align="left">
                                                                                    <span class="feed-table-txt1">{buy.category}</span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="feed-bl-bottom-container" width="100%">
                                                <a style={{textDecoration:"none"}}>
                                                    <table style={{padding:"0px", minHeight:"40px", borderBottom:"1px solid #D3D3D3"}} width="100%" cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{paddingLeft:"10px"}} valign="middle">
                                                                    <span class="feed-table-txt1" style={{marginRight:"7px"}}>Buying</span>
                                                                    <span class="feed-table-txt2">{buy.product_desc}</span>
                                                                </td>
                                                                <td style={{paddingRight:"5px"}} valign="middle" align="right">
                                                                    <span class="feed-table-txt2">{buy.delivery_location}</span>
                                                                </td>
                                                                <td style={{paddingRight:"10px"}} width="20px" valign="middle">
                                                                    <Flags countryCode={buy.delivery_location.substring(0, 2)} style={{fontSize:"20px"}}/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </a>
                                            </td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            }
                            </>
                            ))
                            :
                                null
                        }
                </div>
                        
                {/* Featured Products Sellings */}
                <div class="feedshide-scroll" class={ isChecked1 || isChecked4 ? "feedsShow" : "feedsHide"}>
                    <div id="feeds-feature-p">
                        {sellings.length > 0 && sellings !== 'none'
                            ?
                            sellings.slice(0,4).map((sell) => (
                                <>
                                <div class="f-single-feature-proudct">
                                    <div>FEATURED</div>
                                    <div>
                                        <img src={sell.image} alt="" width="230px" height="176px"/>
                                    </div>
                                    <div>{sell.model_desc}</div>
                                    <div>
                                        <span>{sell.additional_info.substring(0, 10)+"..."}</span>
                                        <span><span class="fc">USD</span>${sell.price}</span>
                                    </div>
                                    <div class="f-single-feature-product-overlay"></div>
                                </div>
                                </>
                            ))
                            :
                            null
                        }
                        
                    </div>
                </div>
                {/* Featured Products */}
                {/* <div style={{height:"240px",overflow:"hidden"}}>
                    <div class="feedshide-scroll">
                        <div id="feeds-feature-m">
                            <div class="fepre-single-member">
                                <div>FEATURED</div>
                                <div style={{backgroundImage: "url("+ Image +")"}}></div>
                                <div>DT 990 Edition</div>
                                <div style={{backgroundImage:"url("+ Rate +")"}}>
                                    <span >Rating</span>
                                </div>
                                <div class="fepre-single-member-overlay"></div>
                            </div>
                            <div class="fepre-single-member">
                                <div>FEATURED</div>
                                <div style={{backgroundImage: "url("+ Image +")"}}></div>
                                <div>DT 990 Edition</div>
                                <div style={{backgroundImage:"url("+ Rate +")"}}>
                                    <span >Rating</span>
                                </div>
                                <div class="fepre-single-member-overlay"></div>
                            </div>
                            <div class="fepre-single-member">
                                <div>FEATURED</div>
                                <div style={{backgroundImage: "url("+ Image +")"}}></div>
                                <div>DT 990 Edition</div>
                                <div style={{backgroundImage:"url("+ Rate +")"}}>
                                    <span >Rating</span>
                                </div>
                                <div class="fepre-single-member-overlay"></div>
                            </div>
                            <div class="fepre-single-member">
                                <div>FEATURED</div>
                                <div style={{backgroundImage: "url("+ Image +")"}}></div>
                                <div>DT 990 Edition</div>
                                <div style={{backgroundImage:"url("+ Rate +")"}}>
                                    <span >Rating</span>
                                </div>
                                <div class="fepre-single-member-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div class={ isChecked1 || isChecked3 ? "feeds-buyingleads-container feedsShow" : "feedsHide"}>
                    <div class="feedsbuyingleads-title"></div>
                        {member.length > 0 && member !== "none"
                            ?
                            member.map((m) => (
                                <>
                            
                            <div class="feeds-single-bl" style={{marginBottom:"4px"}}>
                                
                                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td class="feeds-table-container">
                                                <a>
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{paddingRight:"5px"}} width="50px" valign="top">
                                                                    <div style={{backgroundImage:"url("+Icon+")", backgroundPosition:"top left",backgroundRepeat:"no-repeat",backgroundSize:"50px",width:"50px", height:"50px"}}></div>
                                                                </td>
                                                                <td>
                                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="left">
                                                                                    <span class="feed-table-txt1" style={{color:"#2ca3c1"}}>
                                                                                        <b>Member</b>
                                                                                    </span>
                                                                                </td>
                                                                                <td style={{paddingRight:"10px"}} width="60px" align="right">
                                                                                    <span class="feed-table-txt1">{moment(m.createdAt).format("D MMM")}</span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="2" valign="top" align="left">
                                                                                    <span class="feed-table-txt1">{m.category}</span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="feed-bl-bottom-container" width="100%">
                                                <a style={{textDecoration:"none"}}>
                                                    <table style={{padding:"0px", minHeight:"40px", borderBottom:"1px solid #D3D3D3"}} width="100%" cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{paddingLeft:"10px"}} valign="middle">
                                                                    <span class="feed-table-txt2">{m.company}</span>
                                                                </td>
                                                                <td style={{paddingRight:"5px"}} valign="middle" align="right">
                                                                    <span class="feed-table-txt2">{m.country}</span>
                                                                </td>
                                                                <td style={{paddingRight:"10px"}} width="20px" valign="middle">
                                                                    <Flags countryCode={m.country.substring(0, 2)} style={{fontSize:"20px"}}/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </a>
                                            </td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            </>
                            ))
                            :
                                null
                        }
                </div>
                {/* BuyingLeads -> Featured */}
                <div style={{height:"240px", overflow:"hidden"}} class={ isChecked1 || isChecked2 ? "feedsShow" : "feedsHide"}>
                    <div class="feedshide-scroll">
                        <div id="feeds-buyinglead-container">
                        {buyingLeads.length > 0 && buyingLeads !== "none"
                            ?
                            buyingLeads.slice(0,4).map((buy, index) => (
                            <>
                                {buy.featured !== "No" &&
                                    
                                    <a target="self" href="" class="bl-wrapper">
                                        <div class="bl-container feeds-bl-c">
                                            <div class="bl-label">FEATURED</div>
                                            <table style={{marginTop: '15px'}} cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td valign="top">
                                                            <div class="bl-image" style={{backgroundImage: "url("+ BuyingLeadsIcon +")"}}>
                                                                <div class="bl-overlay"></div>
                                                            </div>
                                                        </td>
                                                        <td valign="top">
                                                            <div class="bl-tag">{buy.product_desc.length > 10 ? buy.product_desc.substring(0, 20) + ".." : buy.product_desc}</div>   
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td valign="bottom" align="left"><div class="bl-info">{moment(buy.createdAt).format("MMM D")}</div></td>
                                                        <td valign="bottom" nowrap="true" align="right"><div class="bl-info">{buy.quantity} <span style={{textTransform:"uppercase"}}>{buy.unit}</span></div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td valign="top" align="left">
                                                            <table height="30px" cellspacing="0" cellpadding="0" border="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td valign="center" >
                                                                            <Flags countryCode={buy.delivery_location.substring(0, 2)} style={{marginLeft:"5px",fontSize:"20px"}}/>
                                                                        
                                                                        </td>
                                                                        <td valign="center"><div class="bl-info">{buy.delivery_location}</div></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td align="right">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </a>
                                    
                                }
                            </>
                            ))
                            :
                            null
                        }
                            
                        </div>
                    </div>
                </div>
                { member !== 'none' || sellings !== 'none' || buyingLeads !== 'none'
                    ?
                        <div id="feeds-loadmore-btn">
                            <a href="">Load More</a>
                        </div>
                    :
                        null
                }
            </div>
        </>
    )
}
export default Feed;