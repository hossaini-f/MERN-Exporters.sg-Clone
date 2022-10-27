import React,{ useState} from 'react';
import {Link} from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import Counter from './counter/counter';
import './statics/style.css';
import Logo from './statics/images/RFQ_bg.png';
import Step1 from './statics/images/1.png';
import Step2 from './statics/images/2.png';
import Step3 from './statics/images/3.png';

const GetQouteForm = () => {
    
    const [terms, setTerms] = useState(false);
    const [reCaptcha, setReCaptcha] = useState('');

    const onChange = (e) => {
        setReCaptcha(e);
      }
    return (
        <>
            <div class="getquote-container">
                <div class="get-quote-img">
                    <img src={Logo} />
                </div>
                <div class="getquote-direction">
                    <div id="getquote-title">
                        Fast and efficient way to source products.
                        <p>Here's how it works:</p>
                    </div>
                    <div class="getquote-steps">
                        <div class="getquote-step">
                            <div class="img-1"><img src={Step1} /></div>
                            <div class="img-1-desc">Tell us what you want by submitting this form.</div>
                        </div>
                        <div class="getquote-step">
                            <div class="img-2"><img src={Step2} /></div>
                            <div class="img-2-desc">Your buying leads will reviewed and sent to the relevant suppliers within 24 hours.</div>
                        </div>
                        <div class="getquote-step">
                            <div class="img-3"><img src={Step3} /></div>
                            <div class="img-3-desc">Suppliers will reply you with quotations directly.</div>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <td id="company-info-title" nowrap="true">Post a Buying Lead</td>
                                    <td style={{width:'100%'}}><hr class="HR" /> </td>
                                </tr>
                            </table>
                            <div>
                                <textarea id="textarea" cols="4" rows="6" placeholder="Provide clear product description/model you are looking for"></textarea>  
                                {/* <div> <Counter/></div> */}
                            </div>
                            <div id="label">Ordre Quantity</div>
                            <div>
                                <input type="text" id="quantity" />
                                <select id="select-unit">
                                        <option value="UNIT">Unit</option>
					                    <option value="MT">Metric Ton</option>
                                        <option value="20' FCL">Twenty-Foot Full Container Load</option>
                                        <option value="40' FCL">Forty-Foot Full Container Load</option>
                                        <option value="40' FCL HC">Forty-Foot Full Container Load HC</option>
                                        <option value="KG">Kilogram</option>
                                        <option value="M">Metre</option>
                                        <option value="BBL">Barrel</option>
                                        <option value="GAL">Gallon</option>
                                        <option value="BAG">Bag</option>
                                        <option value="BOX">Box</option>
                                        <option value="DRUM">Drum</option>
                                        <option value="PALLET">Pallet</option>
                                        <option value="CARTON">Carton</option>
                                        <option value="CASE">Case</option>
                                        <option value="PACK">Pack</option>
                                        <option value="PIECE">Piece</option>
                                        <option value="POUND">Pound</option>
                                        <option value="ROLL">Roll</option>
                                        <option value="BALE">Bale</option>
                                        <option value="GRAM">Gram</option>
                                        <option value="SHEET">Sheet</option>
                                        <option value="YARD">Yard</option>
                                        <option value="M2">Square Meter</option>
                                        <option value="CM">Centimetre</option>
                                        <option value="INCH">Inch</option>
                                        <option value="FT">Feet</option>
                                </select>
                            </div>
                            <div id="label">Delivery Location</div>
                            <div>
                            <select id="delivery-location">
                                <option>Select Delivery Location</option>
                                    <option selected="" value="AF">AFGHANISTAN</option>
                                    <option value="AL">ALBANIA</option>
                                    <option value="DZ">ALGERIA</option>
                                    <option value="AS">AMERICAN SAMOA</option>
                                    <option value="AD">ANDORRA</option>
                                    <option value="AO">ANGOLA</option>
                                    <option value="AI">ANGUILLA</option>
                                    <option value="AQ">ANTARCTICA</option>
                                    <option value="AG">ANTIGUA AND BARBUDA</option>
                                    <option value="AR">ARGENTINA</option>
                                    <option value="AM">ARMENIA</option>
                                    <option value="AW">ARUBA</option>
                                    <option value="AU">AUSTRALIA</option>
                                    <option value="AT">AUSTRIA</option>
                                    <option value="AZ">AZERBAIJAN</option>
                                    <option value="BS">BAHAMAS</option>
                                    <option value="BH">BAHRAIN</option>
                                    <option value="BD">BANGLADESH</option>
                                    <option value="BB">BARBADOS</option>
                                    <option value="BY">BELARUS</option>
                                    <option value="BE">BELGIUM</option>
                                    <option value="BZ">BELIZE</option>
                                    <option value="BJ">BENIN</option>
                                    <option value="BM">BERMUDA</option>
                                    <option value="BT">BHUTAN</option>
                                    <option value="BO">BOLIVIA</option>
                                    <option value="BA">BOSNIA AND HERZEGOVINA</option>
                                    <option value="BW">BOTSWANA</option>
                                    <option value="BV">BOUVET ISLAND</option>
                                    <option value="BR">BRAZIL</option>
                                    <option value="IO">BRITISH INDIAN OCEAN TERRITORY</option>
                                    <option value="BN">BRUNEI DARUSSALAM</option>
                                </select>
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
                                <input type="text" class="customer-info" placeholder="Email address"/>
                                <input type="text" class="customer-info" placeholder="Confirm Email Address"/>
                                <input type="text" class="customer-info" placeholder="Company Name"/>
                                <input type="text" class="customer-info" placeholder="Your Name"/>
                                <select id="customer-counter">
                                    <option selected="" value="AF">AFGHANISTAN</option>
                                    <option value="AL">ALBANIA</option>
                                    <option value="DZ">ALGERIA</option>
                                    <option value="AS">AMERICAN SAMOA</option>
                                    <option value="AD">ANDORRA</option>
                                    <option value="AO">ANGOLA</option>
                                    <option value="AI">ANGUILLA</option>
                                    <option value="AQ">ANTARCTICA</option>
                                    <option value="AG">ANTIGUA AND BARBUDA</option>
                                    <option value="AR">ARGENTINA</option>
                                    <option value="AM">ARMENIA</option>
                                    <option value="AW">ARUBA</option>
                                    <option value="AU">AUSTRALIA</option>
                                    <option value="AT">AUSTRIA</option>
                                    <option value="AZ">AZERBAIJAN</option>
                                    <option value="BS">BAHAMAS</option>
                                    <option value="BH">BAHRAIN</option>
                                    <option value="BD">BANGLADESH</option>
                                    <option value="BB">BARBADOS</option>
                                    <option value="BY">BELARUS</option>
                                    <option value="BE">BELGIUM</option>
                                    <option value="BZ">BELIZE</option>
                                    <option value="BJ">BENIN</option>
                                    <option value="BM">BERMUDA</option>
                                    <option value="BT">BHUTAN</option>
                                    <option value="BO">BOLIVIA</option>
                                    <option value="BA">BOSNIA AND HERZEGOVINA</option>
                                    <option value="BW">BOTSWANA</option>
                                    <option value="BV">BOUVET ISLAND</option>
                                    <option value="BR">BRAZIL</option>
                                    <option value="IO">BRITISH INDIAN OCEAN TERRITORY</option>
                                    <option value="BN">BRUNEI DARUSSALAM</option>
                                </select>
                            </div>
                            <div id="label">
                                <table>
                                    <tr>
                                        <td id="verification-info" nowrap="true">Verification</td>
                                    </tr>
                                    <tr>
                                    <ReCAPTCHA
                                            sitekey={process.env.REACT_APP_VERIFICATION}
                                            onChange={onChange}
                                        />
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <td><input type="checkbox" id="privacy" class="privacy" onChange={(e) => setTerms(!terms)}/></td>
                                        <td>
                                          <label for="privacy" class="privacy">An account will be created for you and by continuing,
                                             you understand that our services are for business purpose
                                              only and you understand and agree to our <a id="terms-of-use">Terms of Service.</a></label>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div id="post-buying-lead-btn">
                                    { terms && reCaptcha 
                                        ?
                                         <button type="button" id="btn-active">Post Buying Lead</button> 
                                        :
                                        <button type="button" id="btn-disabled">Post Buying Lead</button>
                                    
                                    }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default GetQouteForm;