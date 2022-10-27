/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './statics/style.css';
import AppIcon from './statics/images/app.png';

const Footer = () =>{
    return(
            <div id="footer">
                <table class="container" cellpadding="0" cellspacing="0" border="0" align="center">
                    <tr>
                        <td>
                            <div class="footer-section">
                                <Link to="/plan-premium" class="footer-title" href="">PREMIUM MEMBERSHIPS</Link>
                                <br/>
                                <Link to="/plan-plus" class="footer-link">Medicinesworld Plus</Link>
                                <br/>
                                <Link to="/plan-premium" class="footer-link">Medicinesworld Premium</Link>		
                            </div>
                            
                            <div class="footer-section">
                                <Link to="/banner-ads" class="footer-title" href="">ADVERTISE</Link>		
                                <br />
                                <Link to="/banner-ads" class="footer-link" href="">Banner Ads</Link>
                                <br />
                                <a class="footer-link" href="">Featured Products</a>	
                            </div>

                            <div class="footer-section">
                                <a class="footer-title" href="">HELP</a>
                                <br />
                                <a class="footer-link" href="">FAQs</a>
                                <br />
                                <a class="footer-link" href="">Safe Trading Center</a>
                                <br />
                                <Link to="/terms-of-services" class="footer-link" >Terms of Service</Link>
                                <br />
                                <Link to="/privacy-statement" class="footer-link" href="">Privacy Statement</Link>
                            </div>

                            <div class="footer-section">
                                <a class="footer-title" href="">CATEGORIES</a>
                                <br />
                                <a class="footer-link" href="">Products</a>		
                                <br />
                                <a class="footer-link" href="">Members</a>
                                <br />
                                <a class="footer-link" href="">Buying Leads</a>
                            </div>

                            <div class="footer-section">
                                <a class="footer-title" href="">ABOUT</a>
                                <br />
                                <Link to="/about-us" class="footer-link">About Us</Link>
                                <br />
                                <Link to="/testimonial" class="footer-link" >Testimonials</Link>
                                <br />
                                <Link to="/contact-us" class="footer-link">Contact Us</Link>
                            </div>
                            
                            <div class="footer-section">
                                <div>
                                    <a class="footer-link" href="" target="_blank">
                                        <div class="mobile-app-image">
                                            <img src={AppIcon} width="164px"/>
                                        </div>
                                    </a>
                                </div>	
                                    <a class="footer-title download-app" href="">DOWNLOAD APP</a>
                            </div>
                            <div class="privacy">
                                <span>(MW) </span>	
                                <span>Copyright © 2021 Powered by</span>&nbsp;	
                                <a class="privacy-link" href="">Darrak.af Ltd.</a>&nbsp;
                                <span>All rights reserved.</span> 
                            </div>
	
                        </td>
                    </tr>
                </table>
            </div>
    )
}

export default Footer;