import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import SideBar from '../sidebar/right.sidebar';
import FeaturedMembers from '../featured members/featured.members';
import LatestProducts from '../latest products/latest.products';

import './statics/style.css';
import Logo from './statics/images/image.jpg';
import Rate from './statics/images/rate_5.png';

import {homeFeaturedSellingProducts} from '../../../../actions/v1/public.content';

const FeaturedProducts = () => {

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
        <div id="INDEX_OUTER_CONTAINER">
            <div id="INDEX_INNER_CONTAINER">

                <div id="INDEX_ADS_TOP"></div>
                <div id="INDEX_CONTENT_MAIN">
                    <div class="HOMEPAGE_CONTENT_MAIN_SECTION_TITLE">Featured Products</div>  
                        {/*start Featured Products */}
                         <div class="FEATURED_PRODUCT_MAIN_ADS">
                            <div class="FEATURED_PRODUCT_MAIN_SCROLLER_BORDER">
                                <div class="FEATURED_PRODUCT_MAIN_SCROLLER">
                                    <div class="FEATURED_PRODUCT_MAIN_CONTAINER">
                                {featuredProducts.length > 0 && featuredProducts !== 'none'
                                    ?
                                        featuredProducts.map((fp) => (

                                        <div class="FEATURED_PRODUCT_MAIN_ITEM">
                                            <Link to="/single-product-info" href="" target="_blank" rel="nofollow">
                                                <div class="FEATURED_PRODUCT_MAIN_BORDER">
                                                <div class="FEATURED_PRODUCT_MAIN_PIC" title="JACKFRUIT">
                                                <img src={fp.image} width="200px" height="147px" alt=""/>
                                                </div>
                                                <div class="TRIM-ONELINE LTAG">
                                                    {fp.model_desc.length > 20 ? fp.model_desc.substring(0, 30) + ".." : fp.model_desc}
                                                </div>  
                                                    <table  width="198px" cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td class="TRIM-ONELINE" style={{maxWidth: '115px'}} align="left">    
                                                                    <div class="TAG">{fp.company.length > 20 ? fp.company.substring(0, 20) + ".." : fp.company}</div>
                                                                </td>
                                                                <td style={{paddingLeft:'5px'}} align="right">
                                                                    <div class="PRICE"><span class="CURRENCY">USD</span>${fp.price}</div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div class="FEATURED_PRODUCT_MAIN_BORDER_OVERLAY"></div>  
                                                </div>
                                            </Link>
                                        </div>
                                        ))
                                    :
                                    null
                                }
                                        
                            
                            
                                    </div>
                                </div>
                            </div>
                        </div> 
                        {/* end Featured Products*/}

                        {/* Start Latest Products */}
                        <br />
                        <LatestProducts />
                        {/* End Latest Products */}

                        {/* Start Featured Members */}
                        <br />
                        <FeaturedMembers />
                        {/* End Featured Members */}
                </div>
                
                        {/* Start Right Side Bar  */}
                        <SideBar />
                        {/* end Right Side Bar */}
                
            </div>
        </div>
    
    )
}

export default FeaturedProducts;