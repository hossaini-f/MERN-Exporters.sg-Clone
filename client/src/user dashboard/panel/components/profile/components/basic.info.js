import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addBasicInfo} from '../../../../../actions/v1/admin.profile';
import './statics/style.css';

const EditBasicInfo = () => {
    
    const profileId = JSON.parse(localStorage.getItem('profile')).result.id;
    const fetchData = useSelector((state) => state.Profile);
    const dispatch = useDispatch();
    const [display, setDisplay] = useState(true);

    const initialState = {
        name: fetchData.basicInfo.member.name,
        business_type: fetchData.basicInfo.member.business_type,
        business_description: fetchData.basicInfo.member.business_description,
        address: fetchData.basicInfo.member.address,
        phone: fetchData.basicInfo.member.phone,
        fax: fetchData.basicInfo.member.fax,
        mobile: fetchData.basicInfo.member.mobile,
        website: fetchData.basicInfo.member.website
    }
    const [formData, setFormData] = useState(initialState);
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    const onChangeCheckbox = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.type === 'radio' && e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBasicInfo(profileId,formData));
        
    }
    return(
        <>
            <div id="back-wrapper-p" class={display ? "show-message" : "hide-message"}></div>
            <div id="pro-container-g" class={display ? "show-message" : "hide-message"} style={{marginTop:"100px"}}>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td><a>Edit Profile - Basic Information</a></td>
                            <td><div onClick={() =>{setDisplay(false)}}>X</div></td>
                        </tr>
                    </tbody>
                </table>
                <div id="bic-cont-3">
                    <div>* These fields are required for your profile completion.</div>
                    <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <span class="h45-txt">Company:</span><br/>
                            <span class="h40-txt">{fetchData.basicInfo && fetchData.basicInfo.member.company}</span>
                        </div>
                        <div>
                            <label class="h45-txt col-m">Contact Name:</label><br/>
                            <input type="text" name="name" onChange={onChange} placeholder={fetchData.basicInfo && fetchData.basicInfo.member.name}/>
                        </div>
                        <div>
                            <span class="h45-txt">Membership Type:</span><br/>
                            <span class="h40-txt">{fetchData.accountInfo && fetchData.accountInfo.account.mem_type}</span>
                            <span id="up-btn-g"><a>Upgrade</a></span>
                        </div>
                        <div>
                            <span class="h45-txt">Business Type:</span><br/>
                            <div id="type-check-b">
                            {fetchData.basicInfo && fetchData.basicInfo.member.business_type === "Importer"
                                ?
                                <>
                                    <input type="radio" name="business_type" value="Importer" onChange={onChangeCheckbox} id="importer" checked/>
                                    <label for="importer">Importer</label>
                                </>
                                :
                                <>
                                    <input type="radio" name="business_type" value="Importer" onChange={onChangeCheckbox} id="importer" />
                                    <label for="importer">Importer</label>
                                </>
                            }
                            {fetchData.basicInfo && fetchData.basicInfo.member.business_type === "Exporter"
                                ?
                                <>
                                    <input type="radio" name="business_type" value="Exporter" onChange={onChangeCheckbox} id="exporter"/>
                                    <label for="exporter">Exporter</label>
                                </>
                                :
                                <>
                                    <input type="radio" name="business_type" value="Exporter" onChange={onChangeCheckbox} id="exporter" />
                                    <label for="exporter">Exporter</label>
                                </>
                            }
                            {fetchData.basicInfo && fetchData.basicInfo.member.business_type === "Exporter and Importer"
                                ?
                                <>
                                    <input type="radio" name="business_type" value="Exporter and Importer" onChange={onChangeCheckbox} id="both"/>
                                    <label for="both">Importer/Exporter</label>
                                </>
                                :
                                <>
                                    <input type="radio" name="business_type" value="Exporter and Importer" onChange={onChangeCheckbox} id="both" />
                                    <label for="both">Importer/Exporter</label>
                                </>
                            }
                            </div>
                        </div>
                        <div>
                            <label class="h45-txt col-m">Business Description:</label><br/>
                            <textarea name="business_description" onChange={onChange} placeholder={fetchData.basicInfo && fetchData.basicInfo.member.business_description}></textarea>
                        </div>
                        <div>
                            <label class="h45-txt col-m">Address:</label><br/>
                            <input type="text" name="address" onChange={onChange} placeholder={fetchData.basicInfo && fetchData.basicInfo.member.address}/>
                        </div>
                        <div>
                            <span class="h45-txt">Country:</span><br/>
                            <span class="h40-txt">{fetchData.basicInfo && fetchData.basicInfo.member.country}</span>
                        </div>
                        <div>
                            <label class="h45-txt col-m">Tel:</label><br/>
                            <input type="text" name="phone" onChange={onChange} placeholder={fetchData.basicInfo && fetchData.basicInfo.member.phone}/>
                        </div>
                        <div>
                            <label class="h45-txt">Fax:</label><br/>
                            <input type="text" name="fax" onChange={onChange} placeholder={fetchData.basicInfo && fetchData.basicInfo.member.fax}/>
                        </div>
                        <div>
                            <label class="h45-txt">Mobile:</label><br/>
                            <input type="text" name="mobile" onChange={onChange} placeholder={fetchData.basicInfo && fetchData.basicInfo.member.mobile}/>
                        </div>
                        <div>
                            <label class="h45-txt">Website:</label><br/>
                            <span class="h40-txt">http://</span> <input type="text"  name="website" onChange={onChange} placeholder={fetchData.basicInfo && fetchData.basicInfo.member.website} style={{width:"250px"}} />
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
export default EditBasicInfo;