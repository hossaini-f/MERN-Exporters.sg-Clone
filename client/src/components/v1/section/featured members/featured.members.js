import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './statics/style.css';

import Rate from './statics/images/rate_5.png';
import Logo from './statics/images/image.jpg';

import {homeFeaturedMembers} from '../../../../actions/v1/public.content';

const FeaturedMembers = () => {

    const dispatch = useDispatch();
    const [featuredMember, setFeaturedMember] = useState([]);
    const fetchData = useSelector((state) => state.HomePage);

    useEffect(() => {
        dispatch(homeFeaturedMembers());
    },[])

    useEffect(() => {
        if(fetchData.featuredMember){
            setFeaturedMember(fetchData.featuredMember.featuredMembers)
        }else{
            setFeaturedMember('none')
        }
    })
    return (
        <>
                <div class="HOMEPAGE_CONTENT_MAIN_SECTION_TITLE">Featured Members</div>
                    <div class="FEATURED_MEMBER_MAIN_ADS">
                        <div class="FEATURED_MEMBER_MAIN_SCROLLER_BORDER">
                            <div class="FEATURED_MEMBER_MAIN_SCROLLER">
                                <div class="FEATURED_MEMBER_MAIN_CONTAINER">
                        {featuredMember.length > 0 && featuredMember !== 'none'
                            ?
                                featuredMember.map((fm) => (
                                    <div class="FEATURED_MEMBER_MAIN_ITEM"> 
                                        <a href="#" target="_blank" rel="nofollow">
                                        <div class="FEATURED_MEMBER_MAIN_BORDER">
                                            <div class="FEATURED_MEMBER_MAIN_PIC" style={{backgroundImage: "url("+`'${fm.logo}'`+")"}} >
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td valign="bottom">
                                                            <div><span>{fm.company.length > 15 ? fm.company.substring(0, 16) + "..." : fm.company}</span>
                                                                <br />
                                                                
                                                                <img src={Rate} alt="Achieves 5" width="85px" border="0" />
                                                            </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="FEATURED_MEMBER_MAIN_BORDER_OVERLAY"></div> 
                                        </div>
                                        </a>
                                    </div>

                                    ))
                                :
                                <div style={{fontFamily:"verdana", color:"#565656",fontSize:"13px"}}><i class="fa fa-alert"></i> No Member has been registered yet..</div>
                            }
                    

                                </div>
                            </div>
                        </div>
                    </div>

        </>
    )
}

export default FeaturedMembers;