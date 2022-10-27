import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './statics/style.css';
import Logo from './statics/images/image.jpg';

import {homeLatestSellingProducts} from '../../../../actions/v1/public.content'

const LatestProducts = () => {

    const dispatch = useDispatch();
    const [latestProducts, setLatestProducts] = useState([]);
    const fetchData = useSelector((state)=> state.HomePage);

    useEffect(()=> {
        dispatch(homeLatestSellingProducts());
    },[]);

    useEffect(()=> {
        if(fetchData.latestProducts){
            setLatestProducts(fetchData.latestProducts.latestProducts);
        }else{
            setLatestProducts('none');
        }
    });
    return (
            <>
                    <div class="HOMEPAGE_CONTENT_MAIN_SECTION_TITLE">Latest Products</div>
                        <div class="LATEST_PRODUCT_DIV">
                            <div class="LATEST_PRODUCT_SCROLLER_BORDER">
                                 <div class="LATEST_PRODUCT_SCROLLER">
                                    <div class="LATEST_PRODUCT_CONTAINER">
                                    {latestProducts.length > 0 && latestProducts !== 'none'
                                        ?
                                            latestProducts.map((lp) => (
                                        
                                            <div class="LATEST_PRODUCT_ITEM">
                                                <a href="#" target="_blank" rel="nofollow">
                                                <div class="LATEST_PRODUCT_BORDER">
                                                <div class="LATEST_PRODUCT_PIC"  title={lp.model_desc}>
                                                    <img src={lp.image} width="200px" height="147px" alt=""/>
                                                </div>
                                                <div class="TRIM-ONELINE LTAG">
                                                    {lp.model_desc.length > 20 ? lp.model_desc.substring(0, 30) + ".." : lp.model_desc}
                                                </div> 
                                                <table width="198px" cellspacing="0" cellpadding="0" border="0"><tbody><tr>
                                                <td class="TRIM-ONELINE" style={{maxWidth: '115px'}} align="left">    
                                                    <div class="TAG">{ lp.company.length > 20 ? lp.company.substring(0, 20) + ".." : lp.company}</div>
                                                </td>
                                                <td style={{paddingLeft:'5px'}} align="right">
                                                    <div class="PRICE"><span class="CURRENCY">USD</span>${lp.price}</div>
                                                </td>
                                                </tr></tbody></table>
                                                <div class="LATEST_PRODUCT_BORDER_OVERLAY"></div> 
                                                </div>
                                                </a>
                                            </div>
                                            ))
                                        :
                                        <div style={{fontFamily:"verdana", color:"#565656",fontSize:"13px"}}><i class="fa fa-alert"></i> No Product Found.</div>
                                    }
                                        

                                    </div>
                                </div> 
                            </div>
                        </div>
            </>
    )
}

export default LatestProducts;