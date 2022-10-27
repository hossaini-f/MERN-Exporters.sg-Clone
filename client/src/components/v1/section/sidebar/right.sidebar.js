import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './statics/style.css';
import Ads from './statics/images/ads.png';
import {homeLogsData} from '../../../../actions/v1/public.content';
import moment from 'moment';

const RightSideBar = () => {

    const dispatch = useDispatch();
    const [logDataBuying, setLogDataBuying] = useState([]);
    const [logDataMember, setLogDataMember] = useState([]);
    const fetchData = useSelector((state) => state.HomePage)
    useEffect(()=> {
        dispatch(homeLogsData());
    },[])

    useEffect(()=> {
        if(fetchData.homeLogs){
            setLogDataBuying(fetchData.homeLogs.homeLogging);
            setLogDataMember(fetchData.homeLogs.logsMember)
        }else{
            setLogDataBuying('none')
            setLogDataMember('none')
        }
    })

    return (
            <div id="INDEX_CONTENT_RIGHT">
                {/* <div class="ads-container">
                    <div class="ads-title">ADVERTISEMENT</div>
                    <div class="ads" style={{backgroundImage: 'url('+Ads+')'}}></div>
                </div> */}
                 <table style={{paddingbottom: '5px',}} width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td>
                                <span class="right-sidebar-title">Latest</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                    
                {/* Section Buying Leads [2 items] */}
               {logDataBuying.length > 0 && logDataBuying !== 'none'
                ?
                logDataBuying.map((buy) => (
                    <table style={{backgroundColor: '#ffffff', padding:'10px', marginBottom: '10px'}} width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <a class="right-sidebar-logs-title" target="_blank" href="categories/index6510.html?source=hm2_news">URGENTLY NEEDED</a>
                                </td>
                                <td nowrap="" align="right">
                                    <span class="timer-ago">{moment(buy.createdAt).fromNow()}</span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style={{paddingTop:'5px'}}>
                                    <a class="logs-link" target="_blank" href="">{buy.product_desc}</a>
                                    <br/>
                                    <span class="logs-detail">{buy.quantity} {buy.unit}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ))
                :
                    null
                }
                {/* Section Member Logs [2 items] */}
                {logDataMember.length > 0 && logDataMember !== 'none'
                ?
                logDataMember.map((member) => (
                    <table style={{backgroundColor: '#ffffff', padding:'10px', marginBottom: '10px'}} width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <a class="right-sidebar-logs-title" target="_blank" href="">RECENTLY JOINED</a>
                                </td>
                                <td nowrap="" align="right">
                                    <span class="timer-ago">{moment(member.createdAt).fromNow()}</span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style={{paddingTop:'5px'}}>
                                    <a class="logs-link" target="_blank" href="">{member.company}</a>
                                    <br/>
                                    <span class="logs-detail">{member.business_description.length > 200 ? member.business_description.length.substring(0,202) + "..." : member.business_description}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ))
                :
                    null
                }
            </div>
    )
}

export default RightSideBar;