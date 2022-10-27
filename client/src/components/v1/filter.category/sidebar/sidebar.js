import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './statics/style.css';
import Image from './statics/images/image.jpg';

import {homeFeaturedSellingProducts} from '../../../../actions/v1/public.content';

const FilterCategorySideBar = () => {
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
    return(
        <>
        {featuredProducts.length > 0 && featuredProducts !== 'none'
        ?
            featuredProducts.map((product)=> (

            
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td class="fc-right-sidebar-container">
                                <a href="" rel="noflow" target="_blank" style={{textDecoration:'none'}}>
                                    <div class="fc-right-sidebar-wrapper">
                                        <div class="fc-rightsidebar-label">FEATURED</div>
                                        <div class="fc-rightsidebar-pic" style={{backgroundImage: "url("+`'${product.image}'`+")"}}>
                                            <div class="fc-rightsidebar-overlay"></div>
                                        </div>
                                        <div class="fc-rightsidebar-tag">{product.model_desc.length > 20 ? product.model_desc.substring(0, 30) + ".." : product.model_desc}</div>
                                        <table width="270px" cellspacing="0" cellpadding="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td align="left"><div class="fc-tag">{product.company.length > 20 ? product.company.substring(0, 20) + ".." : product.company}</div></td>
                                                    <td align="right"><div class="fc-price"><span class="fc-currency">USD</span> ${product.price}</div></td>
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
        </>
    )
}
export default FilterCategorySideBar;