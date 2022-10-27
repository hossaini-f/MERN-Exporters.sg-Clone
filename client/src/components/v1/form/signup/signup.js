import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {clearError} from '../../../../actions/v1/auth';
import {signUp} from '../../../../actions/v1/auth';
import Countries from './countries';
import RightSideBar from './sidebar/sidebar';
import './statics/style.css';

const SignupForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const serverRes = useSelector((state) => state.Auth);
    useEffect(() => {
        if(localStorage.getItem('profile')) history.push("/user/feeds");
    },[]);

    const initialState = {
        email:'',
        confirmEmail:'',
        password:'',
        companyName:'',
        name:'',
        primaryIndustry:'Analgesics',
        businessType:'Export Proudcts Only',
        country:'Afghanistan',
        fullCompanyAddress:'',
        phoneNumber:'',
        companyDescription:'',
        reCaptcha: ''
    }
    const [formData, setFormData] = useState(initialState);
    const [terms, setTerms] = useState(false);
    const [reCaptcha, setReCaptcha] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
        dispatch(clearError());
    };

    const submitForm = (e) => {
        e.preventDefault();
       dispatch(signUp(formData, history));
    };
    const onChange = (e) => {
        setReCaptcha(e);
        setFormData({ ...formData, reCaptcha: e })
      }
    return (
        <>
        {
            serverRes.errorMsg !== "none" 
            && <div class="error-modal-signup"><span>{serverRes.errorMsg}</span></div>
        }
            <div id="signup-wrapper">
                <div id="signup-left-sidebar">
                        <p>
                            <span class="signup-h1">Start Your Free Trial</span>
                            <br/>
                            <span class="signup-desc">Sign up your 30 day trial account in a minute.</span>
                        </p>
                        <div class="signup-form-container">
                            <form onSubmit={submitForm} noValidate>
                                
                                <div style={{paddingLeft:'10px',paddingBottom:'5px'}}>
                                    <span class="signup-h4"><b>Your Account</b></span>
                                </div>
                                <div style={{paddingLeft:'10px',paddingBottom:'15px'}}>
                                    <span class="signup-desc">Note: If you like to access our selling tools, avoid using a free email like Yahoo or Gmail.</span>  
                                </div>
                                <table width="100%" cellspacing="0" cellpadding="10" border="0">
                                    <tbody>
                                        <tr>
                                            <td>         
                                                <div class="signup-textbox">
                                                    <div class="signup-textbox-label">Your Company Email</div>                   
                                                    <input type="text" name="email" onChange={handleChange} size="40" />                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="signup-textbox">
                                                    <div class="signup-textbox-label">Re-Enter Email</div>             
                                                    <input type="text" name="confirmEmail" onChange={handleChange} size="40" maxlength="100" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="signup-textbox">
                                                    <div class="signup-textbox-label">Password</div>         
                                                    <input type="password" name="password" onChange={handleChange} size="40" maxlength="15" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="signup-textbox">
                                                    <div class="signup-textbox-label">Company Name</div>       
                                                    <input id="co" type="text" name="companyName" onChange={handleChange} size="35" maxlength="100" />                                        
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="signup-textbox">
                                                    <div class="signup-textbox-label">Your Name</div>  
                                                    <input id="co" type="text" name="name" onChange={handleChange} size="35" maxlength="100" />        
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div style={{position:'relative'}}>
                                                    <div class="signup-textbox-label">Primary Industry</div> 
                                                    <select size="1" name="primaryIndustry" onChange={handleChange} class="signup-select">
                                                        <option value="11">Analgesics</option>
                                                        <option value="12">Antacids</option>
                                                        <option value="13">Antianxiety Drugs</option>
                                                        <option value="14">Antiarrhythmics</option>
                                                        <option value="15">Antibacterials</option>
                                                        <option value="16">Antibiotics</option>
                                                        <option value="17">Anticoagulants and  Thrombolytics</option>
                                                        <option value="18">Anticonvulsants</option>
                                                        <option value="19">Antidepressants</option>
                                                        <option value="20">Antidiarrheals</option>
                                                        <option value="21">Antiemetics</option>
                                                        <option value="22">Antifungals</option>
                                                        <option value="23">Antihistamines</option>
                                                        <option value="24">Antihypertensives</option>
                                                        <option value="25">Anti-Inflammatories</option>
                                                        <option value="26">Antineoplastics</option>
                                                        <option value="27">Antipsychotics</option>
                                                        <option value="28">Antipyretics</option>
                                                        <option value="29">Antivirals</option>
                                                        <option value="30">Barbiturates</option>
                                                        <option value="31">Beta-Blockers</option>
                                                        <option value="32">Bronchodilators</option>
                                                        <option value="33">Hypoglycemics (Oral)</option>
                                                        <option value="34">Hormones</option>
                                                        <option value="35">Expectorant</option>
                                                        <option value="36">Diuretics</option>
                                                        <option value="37">Decongestants</option>
                                                        <option value="38">Cytotoxics</option>
                                                        <option value="39">Cough Suppressants</option>
                                                        <option value="40">Corticosteroids</option>
                                                        <option value="41">Cold Cures</option>
                                                        <option value="42">Vitamins</option>
                                                        <option value="43">Tranquilizer</option>
                                                        <option value="44">Sleeping Drugs</option>
                                                        <option value="45">Sex Hormones (Male)</option>
                                                        <option value="46">Sex Hormones (Female)</option>
                                                        <option value="47">Sedatives</option>
                                                        <option value="48">Muscle Relaxants</option>
                                                        <option value="49">Laxatives</option>
                                                        <option value="50">Immunosuppressives</option>
                                                        <option value="51">Medical machines</option>
                                                        <option value="52">equipment’s Cosmetics</option>
                                                    </select>                  
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div style={{position:'relative'}}>
                                                    <div class="signup-textbox-label">Business Type</div>        
                                                    <select size="1" name="businessType" onChange={handleChange} class="signup-select">
                                                        <option value="Exporter">Export products only</option>
                                                        <option value="Importer">Import products only</option>
                                                        <option value="Exporter and Importer" selected="">Export &amp; Import products</option>
                                                    </select>                               
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <div style={{position:'relative'}}>
                                                    <div class="signup-textbox-label">Country</div>            
                                                    <Countries name="country" onChange={handleChange} />
                                                        
                                                </div>
                                            </td>
                                        </tr>
                                        <tr></tr>
                                    </tbody>
                                </table>
            
                                <div style={{paddingLeft:'10px',paddingTop:'15px'}}>
                                    <span class="signup-h4"><b>Create Your Company Profile Page</b></span>
                                </div>
                                <div style={{paddingLeft:'10px',paddingTop:'5px',paddingBottom:'5px'}}>
                                    <span class="signup-desc">Provide complete and accurate details about your company so that we can create your 
                                    company profile page to promote your business.</span>     
                                </div>

                                <table style={{paddingLeft:'5px',paddingRight:'5px',paddingTop:'20px'}} width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                        <tr> 
                                            <td style={{paddingBottom:"25px"}}>
                                                <div class="signup-textbox">
                                                    <div class="signup-textbox-label">Full Company Address</div>         
                                                    <input type="text" name="fullCompanyAddress" onChange={handleChange} size="75" maxlength="200" />
                                                </div>
                                            </td>
                                        </tr>          
                                        <tr>
                                            <td style={{paddingBottom:"25px"}}>  
                                                <div class="signup-textbox">
                                                    <div class="signup-textbox-label">Tel</div>          
                                                    <input type="text" name="phoneNumber" onChange={handleChange} size="15" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{paddingBottom:"25px"}}>              
                                                <div class="signup-textarea-w" maxlen="250">
                                                    <div class="signup-textbox-label">Company Description</div>                                      
                                                                 
                                                    <textarea rows="8" onChange={handleChange} name="companyDescription" placeholder="Your company activities and products in 2 short sentences" cols="65" maxlength="250" ></textarea>
                                                </div>
                                            </td>
                                        </tr>   
            
                                        <tr>
                                            <td style={{paddingBottom:"15px"}}>
                                                <div style={{marginTop:'10px',position:'relative'}}>
                                                    <div class="signup-textbox-label">Verification</div> 
                                                    <ReCAPTCHA
                                                        sitekey={process.env.REACT_APP_VERIFICATION}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                            </td>
                                        </tr>           
                                    </tbody>
                                </table>
            
                                <div style={{paddingLeft:'5px',paddingTop:'10px'}}>
                                    <input class="privacy-checkbox" id="signup-privacy" type="checkbox" onChange={(e) => setTerms(!terms)}/>
                                    <label class="signup-desc" for="signup-privacy">
                                        By continuing, you understand that our services
                                        are for business purpose only and you understand and agree to our&nbsp;  
                                         <Link to="/terms-of-services" class="privacy-link" target="_blank" href="">Terms of Service</Link>.</label>
                                </div>
                                <p align="center">
                                    { terms && reCaptcha 
                                        ?
                                        <input class="signup-btn-active" type="submit" value="Start Your Free Trial" />
                                        :
                                        <div class="signup-btn-disabled">Start Your Free Trial</div>
                                    }
                                </p>        

                            </form>
                        </div>
                    </div>             
                    {/* Right Side Bar */}
                    <RightSideBar />
                    {/* End Right Side Bar */}
            </div>
        </>
    )
}
export default SignupForm;