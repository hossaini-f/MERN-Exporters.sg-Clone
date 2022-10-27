import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './statics/style.css';

const ContactForm = () => {
    return(
        <div class="contact-wrapper">
            <div class="contact-left-side-bar">
                <div class="contact-title">Contact Us</div>
                <span>First, do check out our FAQs and Guides. They provide instant answer to most of your questions.</span>
                <p>If you still need more help, submit a support ticket and we will contact you shortly.</p>
                <form>        
                    <div class="contact-input">
                        <div>Email</div>
                        <input type="text" />
                    </div><br/>
                    <div class="contact-input">
                        <div>Subject</div>
                        <input type="text" />
                    </div><br/>
                    <div class="contact-input">
                        <div id="msg">Message</div>
                        <textarea rows="5"></textarea>
                    </div><br/><br/><br/><br/><br/><br/>
                    <p>If you encounter any issues, share a screenshot will help us resolve it faster.</p>
                    <div class="contact-attachment">
                        <div>Attachement</div>
                        <div>You can zipped multiple files into a single file and send it to us. Max file size 1MB.</div>
                        <div><label for="file-upload">Browse</label> <input type="file" id="file-upload" /> </div>
                    </div>
                    <div class="contact-input">
                        <div>Verification</div>
                        reCapatcha Verification goes here...
                    </div><br/>
                    <div class="contact-btn">
                        <button>Send Message</button>
                    </div>
                    
                            
                </form>
            </div>
            <div class="contact-right-side-bar">
                <div>Popular Questions</div>
                <ul>
                    <li><a>How can my account be<br/> approved?</a></li>
                    <li><a>How can my account be<br/> authenticated?</a></li>
                    <li><a>How can I retrieve my password?</a></li>
                </ul>
            </div>
        </div>
    )
}
export default ContactForm;