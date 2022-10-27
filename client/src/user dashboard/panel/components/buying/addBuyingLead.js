import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import Countries from '../shared/countries';
import './statics/style.css';
import BuyingLeads from './statics/icons/buy.png';
import EmailSubs from './statics/icons/sub.jpg';
import HeaderP from './statics/icons/header.PNG';
import {addNewBuyingLead} from '../../../../actions/v1/buying.products';
import Alert from './alert';

const AddBuyingComp = (props) => {
    const [showTabs, setShowTabs] = useState(false);
    const [showHides, setShowHides] = useState(false);
    const [showAddProducts, setShowAddProducts] = useState(true);
    const [showResearch, setShowResearch] = useState(false);
    const [alert, setAlert] = useState(false);

    const dispatch = useDispatch();
    const profileId = JSON.parse(localStorage.getItem('profile')).result.id;
    const initialData = {
        productDescription:'',
        quantity:'0',
        unit: 'unit',
        reply_by: 'auth',
        purchase_type: 'Regular',
        price:'0',
        paymentMethod: 'Telegraphic Transfer (T/T)',
        deliveryLocation: 'Afghanistan',
        deliveryTime: '7 Days',
        shippingTerms: 'FOB (Free On Board)',
        additionalInfo: ''
    }
    const [formData, setFormData] = useState(initialData);

    const onChangeCheckbox = (e) => {
        setFormData({ ...formData, purchase_type: e.target.type === 'radio' && e.target.value});
    }
    const whoCanReply = (e) => {
        setFormData({ ...formData, reply_by: e.target.type === 'radio' && e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewBuyingLead(profileId, formData));
        setShowAddProducts(false);
        setAlert(true);        
    }
     
    return(
        <>{ !alert && showAddProducts ? <>
                <div class={showHides ? "bl-100-wrapper-form pd-200" : "bl-100-wrapper-form"}
                    style={{
                        zIndex:10000,
                        height: '100%',
                        position:'fixed'
                    }}
                ></div>
                <div class={showHides ? "bl-100-container bl-100-container-form mr-200" : "bl-100-container bl-100-container-form"}
                    style={{
                        zIndex:100000,
                    }}
                >
                    <table cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>Post Buying Leads</td>
                                <td onClick={() => props.onClick()}><div>X</div></td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="header-pbl">
                        <img src={HeaderP} height="200px" alt=""/>
                    </div>
                    <div id="pbl-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <span class="T90">Product Model/Description</span><br/>
                                <textarea onChange={(e) => setFormData({...formData, productDescription: e.target.value})}>{props.title}</textarea>
                            </div>
                            <div>
                                <span class="T90">Order Quantity</span><br/>
                                <input type="text" onChange={(e) => setFormData({...formData, quantity: e.target.value})} placeholder="0" />
                                <select onChange={(e) => setFormData({...formData, unit: e.target.value})}>
                                    <option value="Gram">Gram</option>
                                    <option value="Unit">Unit</option>
                                    <option value="Metric Ton">Metric Ton</option>
                                    <option value="Twenty-Foot Full Container Load">Twenty-Foot Full Container Load</option>
                                    <option value="Forty-Foot Full Container Load">Forty-Foot Full Container Load</option>
                                    <option value="Forty-Foot Full Container Load HC">Forty-Foot Full Container Load HC</option>
                                    <option value="Kilogram">Kilogram</option>
                                    <option value="Metre">Metre</option>
                                    <option value="Barrel">Barrel</option>
                                    <option value="Gallon">Gallon</option>
                                    <option value="Bag">Bag</option>
                                    <option value="Box">Box</option>
                                    <option value="Drum">Drum</option>
                                    <option value="Pallet">Pallet</option>
                                    <option value="Carton">Carton</option>
                                    <option value="Case">Case</option>
                                    <option value="Pack">Pack</option>
                                    <option value="Piece">Piece</option>
                                    <option value="Pound">Pound</option>
                                    <option value="Roll">Roll</option>
                                    <option value="Bale">Bale</option>
                                    <option value="Sheet">Sheet</option>
                                    <option value="Yard">Yard</option>
                                    <option value="Square Meter">Square Meter</option>
                                    <option value="Centimetre">Centimetre</option>
                                    <option value="Inch">Inch</option>
                                    <option value="Feet">Feet</option>
                                </select>
                            </div>
                            <div>
                                <span class="T90">Suppliers (Set who can reply your buying lead)</span><br/>
                                <input type="radio" id="verified" name="type" value="Authenticated & Verified (Recommended)" onChange={whoCanReply} />
                                <label for="verified">Authenticated &amp; Verified (Recommended)</label>
                                <input type="radio" id="all" name="type" value="All Supplliers" onChange={whoCanReply}/>
                                <label for="all">All Suppliers</label><br/>
                                <span id="waav">(Why Authenticated &amp; Verified?)</span>
                            </div>
                            <div>
                                <label for="switch" onClick={() => setShowHides(!showHides)}>More Options</label>
                                <input type="checkbox" id="switch"/>
                                <label for="switch"></label>
                            </div>
                            <div id="form-hidden-content" class={showHides ? "form-hidden-content-show" : "form-hidden-content-hide"}>
                                <div>
                                    <span class="T90">Purchase Type</span><br/>
                                    <input type="radio" id="regular" name="purchase" value="Regular" onChange={onChangeCheckbox}/>
                                    <label for="regular">Regular</label>
                                    <input type="radio" id="onetime" value="One-Time" onChange={onChangeCheckbox} name="purchase"/>
                                    <label for="onetime">One-Time</label><br/>
                                </div>
                                <div>
                                    <span class="T90">Target Price per unit (Enter 0 if you do not wish to give a target price)</span><br/>
                                    <span class="T90">US$</span>
                                    <input type="text" onChange={(e) => setFormData({...formData, price: e.target.value})}/>
                                    <span class="T90">per unit</span>
                                </div>
                                <div>
                                    <span class="T90">Payment Method</span>
                                    <select onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}>
                                        <option value="Telegraphic Transfer (T/T)">Telegraphic Transfer (T/T)</option>
                                        <option value="Letter of Credit (L/C)">Letter of Credit (L/C)</option>
                                        <option value="Cash/Cheque">Cash/Cheque</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Bank Draft">Bank Draft</option>
                                        <option value="Escrow">Escrow</option>
                                    </select>
                                </div>
                                <div>
                                    <span class="T90">Delivery Location</span>
                                    <Countries onChange={(e) => setFormData({...formData, deliveryLocation: e.target.value})}/>
                                </div>
                                <div>
                                    <span class="T90">Delivery Time</span>
                                    <select onChange={(e) => setFormData({...formData, deliveryTime: e.target.value})}>
                                        <option>7 Days</option>
                                        <option>14 Days</option>
                                        <option>21 Days</option>
                                        <option>30 Days</option>
                                    </select>
                                    <span class="T90">Upon confirmation</span>
                                </div>
                                <div>
                                    <span class="T90">Shipping Terms</span>
                                    <select onChange={(e) => setFormData({...formData, shippingTerms: e.target.value})}>
                                        <option value="FOB (Free On Board)">FOB (Free On Board)</option>
                                        <option value="EXW (Ex Works)">EXW (Ex Works)</option>
                                        <option value="FCA (Free Carrier)">FCA (Free Carrier)</option>
                                        <option value="FAS (Free Alongside Ship)">FAS (Free Alongside Ship)</option>
                                        <option value="CFR (Cost and Freight)">CFR (Cost and Freight)</option>
                                        <option value="CFR (Cost and Freight)">CIF (Cost, Insurance and Freight)</option>
                                        <option value="CPT (Carriage Paid To)">CPT (Carriage Paid To)</option>
                                        <option value="CIP (Carriage and Insurance Paid To)">CIP (Carriage and Insurance Paid To)</option>
                                        <option value="DAF (Delivered At Frontier)">DAF (Delivered At Frontier)</option>
                                        <option value="DDU (Delivered Duty Unpaid)">DDU (Delivered Duty Unpaid)</option>
                                        <option value="DDP (Delivered Duty paid)">DDP (Delivered Duty paid)</option>
                                        <option value="DES (Delivered Ex Ship)">DES (Delivered Ex Ship)</option>
                                        <option value="DEQ (Delivered Ex Quay, [Duty Paid])">DEQ (Delivered Ex Quay, [Duty Paid])</option>
                                    </select>
                                </div>
                                <div>
                                    <span class="T90">Additional Information Any details you would like to include.</span><br/>
                                    <span style={{color:"red"}} class="T90">DO NOT enter HTML codes, urls or email addresses.</span>
                                    <br/>
                                    <textarea onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}></textarea>
                                </div>
                            </div>
                            <div id="hidden-form">
                                <button type="submit">Submit Buying Lead</button>
                            </div>
                        </form>
                    </div>
                </div>
                </>
                :
                <> {alert && <Alert onClick={()=> {setAlert(false);props.onClick()}}/>} </> 
                }
        </>
    )
}
export default AddBuyingComp;