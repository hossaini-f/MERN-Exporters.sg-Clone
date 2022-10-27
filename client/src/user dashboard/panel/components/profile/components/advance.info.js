import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addAdvanceInfo} from '../../../../../actions/v1/admin.profile';
import Countries from './countries';
import './statics/style.css';

const EditAdvanceInfo = () => {
    const dispatch = useDispatch();
    const fetchData = useSelector((state) => state.Profile);
    const [display, setDisplay] = useState(true);
    const profileId = JSON.parse(localStorage.getItem('profile')).result.id;
    
    const initialState = {
        year_established: fetchData.advanceInfo.advance.year_established,
        no_employees: fetchData.advanceInfo.advance.no_employees,
        sales_turnover: fetchData.advanceInfo.advance.sales_turnover,
        operational_add: fetchData.advanceInfo.advance.operational_add,
        trading_company1: fetchData.advanceInfo.advance.trading_company1,
        trading_company2: fetchData.advanceInfo.advance.trading_company2,
        trading_company3: fetchData.advanceInfo.advance.trading_company3,
        interested_company1:  fetchData.advanceInfo.advance.interested_company1,
        interested_company2:  fetchData.advanceInfo.advance.interested_company2,
        interested_company3:  fetchData.advanceInfo.advance.interested_company3,
        payment_method: fetchData.advanceInfo.advance.payment_method,
        shipping_terms: fetchData.advanceInfo.advance.shipping_terms,
        business_reg_no: fetchData.advanceInfo.advance.business_reg_no
    }
    const [formData, setFormData] = useState(initialState);
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAdvanceInfo(profileId,formData));   
    }
    return(
        <>
            <div id="back-wrapper-p" class={display ? "show-message" : "hide-message"}></div>
            <div id="pro-container-g" class={display ? "show-message" : "hide-message"} style={{marginTop:"130px"}}>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td><a>Edit Profile - Advance Information</a></td>
                            <td><div onClick={() =>{setDisplay(false)}}>X</div></td>
                        </tr>
                    </tbody>
                </table>
                <div id="bic-cont-3">
                    <div>* These fields are required for your profile completion.</div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <span class="h45-txt">Year Established:</span><br/>
                            <input type="text" name="year_established" size="4" onChange={onChange} placeholder={fetchData.advanceInfo && fetchData.advanceInfo.advance.year_established} style={{width:"60px"}}/>
                            <span class="h40-txt"> (format: YYYY)</span>
                        </div>
                        <div>
                            <span class="h45-txt col-m">No. of employees:</span><br/>
                            <select class="select4m" name="no_employees" onChange={onChange}>
                                <option value="1 - 10 employees" selected=""> 1 - 10 employees</option>
                                <option value="10 - 50 employees">10 - 50 employees</option>
                                <option value="50 - 100 employees">50 - 100 employees</option>
                                <option value="100 - 500 employees">100 - 500 employees</option>
                                <option value="500 - 1000 employees">500 - 1000 employees</option>
                                <option value="1000 employees and above">1000 employees
                                and above</option>
                            </select>
                        </div>
                        <div>
                            <span class="h45-txt col-m">Annual Sales Turnover:</span><br/>
                            <select class="select4m" name="sales_turnover" onChange={onChange}>
                                <option value="US$10,000 - US$100,000" selected="">US$10,000 to US$100,000</option>
                                <option value="US$100,000 to US$500,000">US$100,000 to US$500,000</option>
                                <option value="US$500,000 to US$1 million">US$500,000 to US$1 million</option>
                                <option value="US$1 million to US$5 million">US$1 million to US$5 million</option>
                                <option value="US$5 million to US$10 million">US$5 million to US$10 million</option>
                                <option value="US$10 million to US$100 million">US$10 million to US$100 million</option>
                                <option value="US$100 million and above">US$100 million and above</option>
                            </select>
                        </div>
                        <div>
                            <span class="h45-txt col-m">Operational Address:</span><br/>
                            <textarea rows="3" name="operational_add" onChange={onChange} placeholder={fetchData.advanceInfo && fetchData.advanceInfo.advance.operational_add}></textarea>
                        </div>
                        <div>
                            <span class="h45-txt col-m">Current Top Trading Countries:</span><br/>
                            <Countries name="trading_company1" onChange={onChange}/><br/>
                            <Countries name="trading_company2" onChange={onChange} /><br/>
                            <Countries name="trading_company3" onChange={onChange} />
                        </div>
                        <div>
                            <span class="h45-txt col-m">Countries Interested:</span><br/>
                            <Countries name="interested_company1" onChange={onChange} /><br/>
                            <Countries name="interested_company2" onChange={onChange} /><br/>
                            <Countries name="interested_company3" onChange={onChange} />
                        </div>
                        <div>
                            <span class="h45-txt col-m">Preferred Payment Method:</span><br/>
                            <select class="select4m" name="payment_method" onChange={onChange}>  
                                <option selected="">Select One</option>
                                <option value="Cash">Cash/Cheque</option>
                                <option value="CC">Credit Card</option>
                                <option value="TT">Telegraphic Transfer (T/T)</option>
                                <option value="BD">Bank Draft</option>
                                <option value="LC">Letter of Credit (L/C)</option>
                                <option value="ES">Escrow</option>
		                    </select>
                        </div>
                        <div>
                            <span class="h45-txt col-m">Preferred Shipping Terms:</span><br/>
                            <select class="select4m" name="shipping_terms" onChange={onChange}>
                                <option selected="">Select One</option>
                                <option value="FOB">FOB (Free On Board)</option>		
                                <option value="EXW">EXW (Ex Works)</option>
                                <option value="FCA">FCA (Free Carrier)</option>
                                <option value="FAS">FAS (Free Alongside Ship)</option>
                                <option value="CFR">CFR (Cost and Freight)</option>
                                <option value="CIF">CIF (Cost, Insurance and Freight)</option>
                                <option value="CPT" selected="">CPT (Carriage Paid To)</option>
                                <option value="CIP">CIP (Carriage and Insurance Paid To)</option>
                                <option value="DAF">DAF (Delivered At Frontier)</option>
                                <option value="DDU">DDU (Delivered Duty Unpaid)</option>
                                <option value="DDP">DDP (Delivered Duty paid)</option>
                                <option value="DES">DES (Delivered Ex Ship)</option>
                                <option value="DEQ">DEQ (Delivered Ex Quay, [Duty Paid])</option>
                            </select>
                        </div>
                        <div>
                            <span class="h45-txt">Business Registration Number:</span><br/>
                            <input type="text" name="business_reg_no" placeholder={fetchData.advanceInfo && fetchData.advanceInfo.advance.business_reg_no} onChange={onChange} style={{width:"200px"}}/>
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
export default EditAdvanceInfo;