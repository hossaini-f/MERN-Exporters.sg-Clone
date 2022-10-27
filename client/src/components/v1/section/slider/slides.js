import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './statics/style.css';
import Logo from './statics/images/logo.jpg';
import Rate5 from './statics/images/rate_5.png';
import {getHomeTopMember} from '../../../../actions/v1/public.content';

const SliderSec = () => {
    const settings = {
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5
      };
      const dispatch= useDispatch();
      const [members, setMembers] = useState([]);
      const fetchData = useSelector((state) => state.HomePage);

      useEffect(()=>{
          dispatch(getHomeTopMember());
      },[]);

      useEffect(()=>{
          if(fetchData.homeTopMember){
              setMembers(fetchData.homeTopMember.homeTopMember);
          }else{
              setMembers('none');
          }
      })
  return (
    <div class="slider-section">
        <div class="slider-sec-title"><p>Top Rated in Medicinesworld.com</p></div>
            <Slider {...settings}>
                {members.length > 0 && members !== 'none'
                    ?
                    members.map((m, index) => (
                        <div class="slide-item">
                            <div class="item-img" style={{backgroundImage: "url("+`'${m.logo}'`+")"}}>
                                <p class="item-num">#{index+1}</p>
                            </div>
                            <div class="item-content">
                                <span>{m.company.length > 10 ? m.company.substring(0, 12)+"..." : m.company}</span><br/>
                                <img src={Rate5} />
                            </div>
                            <div class="slide-item-overlay"></div>    
                        </div>
                    ))
                    :
                    null
                }
                    
            </Slider>
            <div class="link-top-rated"><a href="">See more top rated members</a></div>
        </div>
  )
}
export default SliderSec;