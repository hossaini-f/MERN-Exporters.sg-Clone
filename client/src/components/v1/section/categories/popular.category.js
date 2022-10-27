import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './statics/style.css';
import Image from './statics/images/1.jpg';
import {getHomeCategories} from '../../../../actions/v1/public.content';

const PopularCategories = () => {

    const [categoryData, setCategoryData] = useState([]);
    const dispatch = useDispatch();
    const fetchData = useSelector((state) => state.HomePage);

    useEffect(()=>{
        dispatch(getHomeCategories())
    },[])

    useEffect(() => {
        if(fetchData.homeCategory){
            setCategoryData(fetchData.homeCategory.homeCategory);
        }else{
            setCategoryData('none');
        }
    })
    
    

    return (
        <div class="popular-category">
            <div class="p-c-title">
                <p>Popular Categories</p>
                <span>Over 600 product categories to choose from.</span>
            </div>
              {/* Start */}
              <div class="category-wrapper">
                    <div class="p-c-inner-wrapper">
                        <div class="p-c-scroll">
                            <div class="category-container" align="center">
                         {categoryData.length > 0 && categoryData !== 'none'
                            ?
                            categoryData.map((c) => (

                                <div class="category-item-wrapper">
                                    <a href="" target="_blank" style={{textDecoration:'none'}}>
                                        <div class="p-c-items" style={{backgroundImage:'url('+ Image +')'}}>
                                            <table cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td valign="bottom" align="center">
                                                            <div><span class="p-c-title">{c.category}</span></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table> 
                                            <div class="p-c-item-overlay"></div>
                                        </div>        
                                    </a>
                                </div>
                                ))
                            :
                                null
                            }
                                 
                            </div>
                        </div>
                    </div>
                </div>  
              {/* End */}
            <div class="p-c-link"><a>See all categories</a></div>
        </div>
    )
}

export default PopularCategories;