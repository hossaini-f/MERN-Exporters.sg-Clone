import React, { useState } from 'react';
import './statics/style.css';

const MemberMessageForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [sampleText , setSampleText]  = useState(false);

    return (
        <>
            <div id="send-message-wrapper">
                <div id="send-message-container">
                        <div class="send-message-form-container">
                            <form>
                                <div style={{float:'right'}}>
                                    <div class="send-message-form-login-btn">
                                        <div class="send-message-form-desc">Already a member?</div>
                                        <div class="send-message-form-link"><a href="">Login</a></div>
                                    </div>
                                </div>
                                
                                <div style={{paddingLeft:'10px',paddingBottom:'5px'}}>
                                    <span class="send-message-h4"><b>Send Message</b></span>
                                </div>
                                <div style={{paddingLeft:'10px',paddingBottom:'15px'}}>
                                    <span class="send-message-desc">To: <b>Poh Brothers Distributors Pte Ltd</b></span>  
                                </div>
                                <div id="send-message-tags" class={showForm ? "hide" : "show"}>
                                    <div class={showForm ? "hide" : "show"} onClick={() => setShowForm(true)} >I Like to get a Quotation</div>
                                    <div class={showForm ? "hide" : "show"} onClick={() => setSampleText(!sampleText)} >I Like to promote my products</div>
                                </div>
                                <div class={showForm ? "show send-message-switch" : "hide"}>I Like to get a Quotation <span onClick={(e) => setShowForm(false)}>X</span></div>
                                <table style={{paddingLeft:'5px',paddingRight:'5px',paddingTop:'20px'}} width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td style={{paddingBottom:"25px"}}>              
                                                <div class="send-message-textarea-w" maxlen="250">
                                                    <div class="send-message-textbox-label">Your Message</div>                                      
                                                    <textarea rows="8" name="" cols="65" maxlength="250" >
                                                        { sampleText ? "Hi, I like to promote my products to you, and I am selling:" : "" }
                                                    </textarea><br/>
                                                    <div class={showForm ? "show" : "hide"}>
                                                        <div style={{color:'#333'}}>Hi, I like to get a quotation for:</div>
                                                        <div class="send-message-sub-form">
                                                            <div>
                                                                <label>Product:</label>
                                                                <input type="text" />
                                                            </div>
                                                            <div>
                                                                <label>Quantity:</label>
                                                                <input type="text" />
                                                                <select>
                                                                    <option>Unit</option>
                                                                    <option>Metre</option>
                                                                    <option>Ton</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </td>
                                        </tr>          
                                    </tbody>
                                </table>
            
                                <div style={{paddingLeft:'10px',paddingTop:'1px',marginBottom:'10px'}}>
                                    <span class="send-message-h4"><b>Your Company Information</b></span>
                                </div>
                                <table width="100%" cellspacing="0" cellpadding="10" border="0">
                                    <tbody>
                                        <tr>
                                            <td>         
                                                <div class="send-message-textbox">
                                                    <div class="send-message-textbox-label">Email Address</div>                   
                                                    <input type="text" name="email1" size="40" value="" />                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="send-message-textbox">
                                                    <div class="send-message-textbox-label">Confirm Email Address</div>             
                                                    <input type="text" name="email2" size="40" maxlength="100" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="send-message-textbox">
                                                    <div class="send-message-textbox-label">Company Name</div>         
                                                    <input type="text" name="" size="40" maxlength="15" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="send-message-textbox">
                                                    <div class="send-message-textbox-label">Your Name</div>       
                                                    <input id="co" type="text" name="co" size="35" maxlength="100" />                                        
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div style={{position:'relative'}}>
                                                    <div class="send-message-textbox-label">Primary Industry</div> 
                                                    <select size="1" name="Industry" class="send-message-select">
                                                        <option selected="">Select Primary Industry</option>
                                                        <option value="10000">Building And Construction</option>
                                                        <option value="20000">Chemicals</option>
                                                        <option value="30000">Computers</option>
                                                        <option value="40000">Electrical</option>
                                                        <option value="50000">Electronics</option>
                                                        <option value="250000">Energy</option>
                                                        <option value="260000">Environment</option>
                                                    </select>                  
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <div style={{position:'relative'}}>
                                                    <div class="send-message-textbox-label">Country</div>            
                                                    <select size="1" name="country" class="send-message-select">
                                                        <option>Select Country</option>
                                                        <option value="VE">VENEZUELA</option>
                                                        <option value="VN">VIET NAM</option>
                                                        <option value="VG">VIRGIN ISLANDS, BRITISH</option>
                                                        <option value="VI">VIRGIN ISLANDS, U.S.</option>
                                                        <option value="WF">WALLIS AND FUTUNA</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style={{paddingBottom:"15px"}}>
                                                <div style={{marginTop:'10px',position:'relative'}}>
                                                    <div class="send-message-textbox-label">Verification</div> 
                                                </div>
                                            </td>
                                        </tr>    
                                        <tr></tr>
                                    </tbody>
                                </table>
            
                                <div style={{paddingLeft:'5px',paddingTop:'10px'}}>
                                    <input class="privacy-checkbox" id="send-message-privacy" name="" type="checkbox" />
                                    <label class="signup-desc" for="send-message-privacy">
                                        By continuing, you understand that our services
                                        are for business purpose only and you understand and agree to our&nbsp;  
                                         <a class="privacy-link" target="_blank" href="">Terms of Service</a>.</label>
                                </div>
                                <p align="center">
                                    <input class="send-message-btn-active" type="submit" value="Send Message" />
                                </p>        

                            </form>
                        </div>
                    </div>             
                </div>
        </>

    )
}

export default MemberMessageForm;