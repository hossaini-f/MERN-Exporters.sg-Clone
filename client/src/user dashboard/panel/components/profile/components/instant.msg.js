import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addInstantMessageLink} from '../../../../../actions/v1/admin.profile';

import './statics/style.css';
import AIM from './statics/icons/aim.png';
import WindowsLive from './statics/icons/windowslive.png';
import GoogleTalk from './statics/icons/talk.png';
import Skype from './statics/icons/skype.png';
import Yahoo from './statics/icons/yahoo.png';
import Ico from './statics/icons/ico.png';
import WhatsApp from './statics/icons/whatsapp.png';
import WeChat from './statics/icons/wechat.png';
import Line from './statics/icons/line.png';
import Viber from './statics/icons/viber.png';
import QQ from './statics/icons/qq.png';

const EditInstantMessage = () => {
    const [display, setDisplay] = useState(true);
    const dispatch = useDispatch();
    const fetchData = useSelector((state) => state.Profile);
    const profileId = JSON.parse(localStorage.getItem('profile')).result.id;
    console.log(fetchData);
    const data = fetchData.instantMessagingInfo.instantMessage;
    const initialState = [
                        { type: "AIM",          link: data.type === "AIM" ? data.link : ''},
                        { type: "Windows Live", link: data.type === "Windows Live" ? data.link : ''},
                        { type: "Google Talk",  link: data.type === "Google Talk" ? data.link : ''},
                        { type: "Skype",        link: data.type === "Skype" ? data.link : ''},
                        { type: "Yahoo",        link: data.type === "Yahoo" ? data.link : ''},
                        { type: "ICO",          link: data.type === "ICO" ? data.link : ''},
                        { type: "WhatsApp",     link: data.type === "WhatsApp" ? data.link : ''},
                        { type: "WeChat",       link: data.type === "WeChat" ? data.link : ''},
                        { type: "Line",         link: data.type === "Line" ? data.link : ''},
                        { type: "Viber",        link: data.type === "Viber" ? data.link : ''},
                        { type: "QQ",           link: data.type === "QQ" ? data.link : ''}
                    ]
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(addInstantMessageLink(profileId,formData));   
    }
    return(
        <>
            <div id="back-wrapper-p" class={display ? "show-message" : "hide-message"}></div>
            <div id="pro-container-g" class={display ? "show-message" : "hide-message"} style={{marginTop:"110px"}}>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td><a>Edit Profile - Instant Message</a></td>
                            <td><div onClick={() =>{setDisplay(false)}}>X</div></td>
                        </tr>
                    </tbody>
                </table>
                <div id="bic-cont-3">
                    <div></div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <span class="h45-txt"><img src={AIM} width="20px"/> AIM:</span><br/>
                            <input type="text" 
                                placeholder={
                                    fetchData.instantMessagingInfo 
                                    && fetchData.instantMessagingInfo.instantMessage.type === "AIM"
                                    ?  fetchData.instantMessagingInfo.instantMessage.link
                                    : ""
                                }
                                onChange={(e) => {
                                    const link = e.target.value
                                    setFormData((currentData) => currentData.map( (v) => v.type === "AIM"
                                    ?
                                        {...v, link}
                                    :
                                        v
                                    ))
                                }}
                                name="AIM"
                            />
                        </div>
                        <div>
                            <span class="h45-txt"><img src={WindowsLive} width="20px"/> Windows Live:</span><br/>
                            <input type="text"  
                                placeholder={
                                    fetchData.instantMessagingInfo 
                                    && fetchData.instantMessagingInfo.instantMessage.type === "Windows Live"
                                    ?  fetchData.instantMessagingInfo.instantMessage.link
                                    : ""
                                }
                                onChange={(e) => {
                                    const link = e.target.value
                                    setFormData((currentData) => currentData.map( (v) => v.type === "Windows Live"
                                    ?
                                        {...v, link}
                                    :
                                        v
                                    ))
                                }}
                                name="WindowsLive"
                            />
                        </div>
                        <div>
                            <span class="h45-txt"><img src={GoogleTalk} width="20px"/> Google Talk:</span><br/>
                            <input type="text" 
                                placeholder={
                                    fetchData.instantMessagingInfo 
                                    && fetchData.instantMessagingInfo.instantMessage.type === "Google Talk"
                                    ?  fetchData.instantMessagingInfo.instantMessage.link
                                    : ""
                                }
                                onChange={(e) => {
                                    const link = e.target.value
                                    setFormData((currentData) => currentData.map( (v) => v.type === "Google Talk"
                                    ?
                                        {...v, link}
                                    :
                                        v
                                    ))
                                }}
                                name="GoogleTalk"
                            />
                        </div>
                        <div>
                            <span class="h45-txt"><img src={Skype} width="20px"/> Skype:</span><br/>
                            <input type="text" 
                                placeholder={
                                    fetchData.instantMessagingInfo 
                                    && fetchData.instantMessagingInfo.instantMessage.type === "Skype"
                                    ?  fetchData.instantMessagingInfo.instantMessage.link
                                    : ""
                                }
                                onChange={(e) => {
                                    const link = e.target.value
                                    setFormData((currentData) => currentData.map( (v) => v.type === "Skype"
                                    ?
                                        {...v, link}
                                    :
                                        v
                                    ))
                                }}
                                name="Skype"
                            />
                        </div>
                        <div>
                            <span class="h45-txt"><img src={Yahoo} width="20px"/> Yahoo:</span><br/>
                            <input type="text" 
                                placeholder={
                                    fetchData.instantMessagingInfo 
                                    && fetchData.instantMessagingInfo.instantMessage.type === "Yahoo"
                                    ?  fetchData.instantMessagingInfo.instantMessage.link
                                    : ""
                                }
                                onChange={(e) => {
                                    const link = e.target.value
                                    setFormData((currentData) => currentData.map( (v) => v.type === "Yahoo"
                                    ?
                                        {...v, link}
                                    :
                                        v
                                    ))
                                }}
                                name="Yahoo"
                            />
                        </div>
                        <div>
                            <span class="h45-txt"><img src={Ico} width="20px"/> ICO:</span><br/>
                            <input type="text" 
                                placeholder={
                                    fetchData.instantMessagingInfo 
                                    && fetchData.instantMessagingInfo.instantMessage.type === "ICO"
                                    ?  fetchData.instantMessagingInfo.instantMessage.link
                                    : ""
                                }
                                onChange={(e) => {
                                    const link = e.target.value
                                    setFormData((currentData) => currentData.map( (v) => v.type === "ICO"
                                    ?
                                        {...v, link}
                                    :
                                        v
                                    ))
                                }}
                                name="ICO"
                            />
                        </div>
                        <div>
                            <span class="h45-txt"><img src={WhatsApp} width="20px"/> WhatsApp:</span><br/>
                            <input type="text" 
                                placeholder={
                                    fetchData.instantMessagingInfo 
                                    && fetchData.instantMessagingInfo.instantMessage.type === "WhatsApp"
                                    ?  fetchData.instantMessagingInfo.instantMessage.link
                                    : ""
                                }
                                onChange={(e) => {
                                    const link = e.target.value
                                    setFormData((currentData) => currentData.map( (v) => v.type === "WhatsApp"
                                    ?
                                        {...v, link}
                                    :
                                        v
                                    ))
                                }}
                                name="WhatsApp"
                            />
                        </div>
                        <div>
                            <span class="h45-txt"><img src={WeChat} width="20px"/> WeChat:</span><br/>
                            <input type="text" 
                                placeholder={
                                    fetchData.instantMessagingInfo 
                                    && fetchData.instantMessagingInfo.instantMessage.type === "WeChat"
                                    ?  fetchData.instantMessagingInfo.instantMessage.link
                                    : ""
                                }
                                onChange={(e) => {
                                    const link = e.target.value
                                    setFormData((currentData) => currentData.map( (v) => v.type === "WeChat"
                                    ?
                                        {...v, link}
                                    :
                                        v
                                    ))
                                }}
                                name="WeChat"
                            />
                        </div>
                        <div>
                            <span class="h45-txt"><img src={Line} width="20px"/> Line:</span><br/>
                            <input type="text" 
                                placeholder={
                                    fetchData.instantMessagingInfo 
                                    && fetchData.instantMessagingInfo.instantMessage.type === "Line"
                                    ?  fetchData.instantMessagingInfo.instantMessage.link
                                    : ""
                                }
                                onChange={(e) => {
                                    const link = e.target.value
                                    setFormData((currentData) => currentData.map( (v) => v.type === "Line"
                                    ?
                                        {...v, link}
                                    :
                                        v
                                    ))
                                }}
                                name="Line"
                            />
                        </div>
                        <div>
                            <span class="h45-txt"><img src={Viber} width="20px"/> Viber:</span><br/>
                            <input type="text" 
                                placeholder={
                                    fetchData.instantMessagingInfo 
                                    && fetchData.instantMessagingInfo.instantMessage.type === "Viber"
                                    ?  fetchData.instantMessagingInfo.instantMessage.link
                                    : ""
                                }
                                onChange={(e) => {
                                    const link = e.target.value
                                    setFormData((currentData) => currentData.map( (v) => v.type === "Viber"
                                    ?
                                        {...v, link}
                                    :
                                        v
                                    ))
                                }}
                                name="Viber"
                            />
                        </div>
                        <div>
                            <span class="h45-txt"><img src={QQ} width="20px"/> QQ:</span><br/>
                            <input type="text" 
                                placeholder={
                                    fetchData.instantMessagingInfo 
                                    && fetchData.instantMessagingInfo.instantMessage.type === "QQ"
                                    ?  fetchData.instantMessagingInfo.instantMessage.link
                                    : ""
                                }
                                onChange={(e) => {
                                    const link = e.target.value
                                    setFormData((currentData) => currentData.map( (v) => v.type === "QQ"
                                    ?
                                        {...v, link}
                                    :
                                        v
                                    ))
                                }}
                                name="QQ"
                            />
                        </div>
                        <div id="sub-btn-g">
                            <button type="submit" onClick={() =>{setDisplay(false)}}>Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default EditInstantMessage;