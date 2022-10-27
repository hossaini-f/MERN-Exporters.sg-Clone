import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './statics/style.css';
import Image from './statics/images/image.jpg';
import BuyingLead from './statics/images/buyinglead.png';
import Flag from './statics/images/germany.png';

import {homeFeaturedSellingProducts} from '../../../../actions/v1/public.content';

const SideBar = () => {
    const dispatch = useDispatch();
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const fetchData = useSelector((state) => state.HomePage);
   
    useEffect(()=>{
        dispatch(homeFeaturedSellingProducts());
    },[]);
   
    useEffect(()=> {
        if(fetchData.featuredProducts){
            setFeaturedProducts(fetchData.featuredProducts.featuredProducts)
        }else{
            setFeaturedProducts('none')
        }
    });

    return (
        
        <div class="bc-right-sidebar">
            {/* Featured Products */}
            {featuredProducts.length > 0 && featuredProducts !== 'none'
            ?
            featuredProducts.map((product)=>(

            
            <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr>
                        <td class="bc-right-sidebar-container">
                            <a href="" rel="noflow" target="_blank">
                                <div class="bc-right-sidebar-wrapper">
                                    <div class="bc-rightsidebar-label">FEATURED</div>
                                    <div class="bc-rightsidebar-pic" style={{backgroundImage: "url("+`'${product.image}'`+")"}}>
                                        <div class="bc-rightsidebar-overlay"></div>
                                    </div>
                                    <div class="bc-rightsidebar-tag">{product.model_desc.length > 20 ? product.model_desc.substring(0, 30) + ".." : product.model_desc}</div>
                                    <table width="270px" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td align="left"><div class="bc-tag">{product.company.length > 20 ? product.company.substring(0, 20) + ".." : product.company}</div></td>
                                                <td align="right"><div class="bc-price"><span class="bc-currency">USD</span> ${product.price}</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </a>
                        </td>
                    </tr>    
                </tbody> 
            </table>
            ))
            :
                null
            }
            {/* End Featured Products */}
            {/* Buying Leads */}
            {/* <a target="_self" href="" class="bl-wrapper">
                <div class="bl-container">
                    <div class="bl-label">FEATURED</div>
                    <table style={{marginTop: '15px'}} cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td valign="top">
                                    <div class="bl-image" style={{backgroundImage: "url("+ BuyingLead +")"}}>
                                        <div class="bl-overlay"></div>
                                    </div>
                                </td>
                                <td valign="top">
                                    <div class="bl-tag">Canon 303 Toner</div>   
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td valign="bottom" align="left"><div class="bl-info">15 Jan</div></td>
                                <td valign="bottom" nowrap="true" align="right"><div class="bl-info">500 UNITS</div></td>
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
                                                <td valign="center" ><img src={Flag} style={{paddingLeft:'5px',marginBottom:'-1px'}} title="UNITED STATES" alt="" width="20" height="12" border="0"/></td>
                                                <td valign="center"><div class="bl-info">Germany</div></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td align="right">
                                    <div class="bl-enquiry">Reply</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </a>
           */}
            {/* End Buying Leads */}
        </div>
    )
}
export default SideBar;