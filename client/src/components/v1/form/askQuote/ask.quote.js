import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import Countries from './countries';
import {getQuoteandCreateAccount} from '../../../../actions/v1/inbox';
import {getSingleProductInfo} from '../../../../actions/v1/public.content';
import './statics/style.css';
import crypto from 'crypto-js';
import queryString from 'query-string';

const AskQouteForm = (props) => {

    const [product, setProduct] = useState([]);
    // Parsings URL Parameters
    const { search } = useLocation();
    const { _p } = queryString.parse(search);//Destructure the search string
    const hashValue = _p.replace(/\s/g, "");// to remove withspaces in url parameter
    const bytes = crypto.AES.decrypt(hashValue.toString(), '#(F9A0G*AJ0)[@3$');
    const productId = Number(bytes.toString(crypto.enc.Utf8));

    // Getting Product Information
    useEffect(()=>{
        dispatch(getSingleProductInfo(productId));
    },[])
    const fetchData = useSelector((state) => state.Public);

    useEffect(()=>{
        // Fetching Product Information
        if(fetchData.singleProductInfo && fetchData.singleProductInfo.product){
            setProduct(fetchData.singleProductInfo.product);
        }else{
            setProduct('none')
        }
    })

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        order: '0',
        additional:"none",
        email:'',
        company:'',
        name:'',
        country:'Afghanistan'
    });
    const [terms, setTerms] = useState(false);
    const [reCaptcha, setReCaptcha] = useState('');
    
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onChangeRecaptcha = (e) => {
        setReCaptcha(e);
    }

    const submitForm = () => {
        if(formData.email != "" && formData.country != "" && formData.name != "" && formData.company != ""){
            dispatch(getQuoteandCreateAccount(formData));
        }else{
            alert("Please fill the form fields.")
        }
    }
    console.log(product)
    return (
        <>
            <div class="getquote-form-container">
                <div class="getquote-form-login-btn">
                    <div class="get-quote-form-desc">Already a member?</div>
                    <div class="getquote-form-link"><Link to="/signin">Login Now</Link></div>
                </div>
                <div class="gq-form-wrapper">
                    <div class="getquote-form">
                        
                        <form>
                            <table>
                                <tr>
                                    <td id="company-info-title" nowrap="true">Ask for Quotation</td>
                                    <td style={{width:'100%'}}><hr class="HR" /> </td>
                                </tr>
                            </table>
                            <div id="a-product-container">
                                <div id="a-product-image">
                                    <img src={product.length >0 && product !="none" ? product[0].image : ""} width="154px" height="154px" />
                                </div>
                                <div id="a-product-desc">
                                    <div>{product.length >0 && product !="none" ? product[0].model_desc : ""}</div>
                                    <div>Min. Order Qty: {product.length >0 && product !="none" ? product[0].min_order : "0"} {product.length >0 && product !="none" ? product[0].unit : "Unit"}</div>
                                </div>

                            </div>
                            <div id="label">Ordre Quantity</div>
                            <div>
                                <input type="text" id="a-quantity" name="order" onChange={onChange}/>
                                <span id="a-unit">Unit</span>
                            </div>
                            <div>
                                <textarea id="a-textarea" cols="4" rows="6" name="additional" onChange={onChange} placeholder="Provide clear product description/model you are looking for"></textarea>  
                            </div>
                            <div id="label">
                                <table>
                                    <tr>
                                        <td id="company-info-title" nowrap="true">Your Company Information</td>
                                        <td style={{width:'100%'}}><hr class="HR" /> </td>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <input type="text" class="customer-info" name="email" onChange={onChange} placeholder="Email address"/>
                                <input type="text" class="customer-info" name="cemail" onChange={onChange} placeholder="Confirm Email Address"/>
                                <input type="text" class="customer-info" name="company" onChange={onChange} placeholder="Company Name"/>
                                <input type="text" class="customer-info" name="name" onChange={onChange} placeholder="Your Name"/>
                                <Countries onChange={onChange} />
                            </div>
                            <div id="label">
                                <table>
                                    <tr>
                                        <td id="verification-info" nowrap="true">Verification</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ReCAPTCHA sitekey={process.env.REACT_APP_VERIFICATION}
                                                        onChange={onChangeRecaptcha}
                                            />
                                        </td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <td><input type="checkbox" id="privacy" class="privacy" onChange={()=>setTerms(!terms)}/></td>
                                        <td>
                                          <label for="privacy" class="privacy">An account will be created for you and by continuing,
                                             you understand that our services are for business purpose
                                              only and you understand and agree to our <Link to="/terms-of-services" id="terms-of-use">Terms of Service.</Link></label>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div id="post-buying-lead-btn">
                                {terms && reCaptcha ?
                                <button type="button" id="btn-active" onClick={submitForm}>Send Enquiry</button>
                                :
                                <button type="button" id="btn-disabled">Send Enquiry</button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AskQouteForm;