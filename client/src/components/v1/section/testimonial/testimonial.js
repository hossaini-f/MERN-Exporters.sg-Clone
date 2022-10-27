import React from 'react';
import './statics/style.css';
import Flag from './statics/images/flag.png';
import Frame from './statics/images/frame_premium.png';
import Logo from "./statics/images/logo.jpg";


const Testimonial = () => {
    return (
        <div class="home-testimonial">
            <div class="home-testimonial-container" style={{backgroundColor: "#f8d7ba"}}>
                <span>What our members are saying about us</span>
            </div>
             <div class="box-area">
                <div class="single-box">
                    <div class="image-area" style={{background: "url(" +  Logo  + ")"}} ><img src={Frame} /> </div>
                    <div class="img-text">
                        <p class="msg">enjoy using Medicinesworld.com because it is reliable.揥e enjoy using Exporters.SG because it is reliable.揥e enjoy using Exporters.SG because it is reliable.</p>
                        <a class="lead com">AEROCONSULT BV</a><br/>
                        <span class="lead"><img src={Flag}/> Hong Kong</span>
                    </div>
                </div>
                <div class="single-box">
                    <div class="image-area" style={{background: "url(" +  Logo  + ")"}} ><img src={Frame} /> </div>
                    <div class="img-text">
                        <p class="msg">Enjoy using Medicinesworld.com because it is reliable.揥e enjoy using Exporters.SG because it is reliable.揥e enjoy using Exporters.SG because it is reliable.</p>
                        <a class="lead com">AEROCONSULT BV</a><br/>
                        <span class="lead"><img src={Flag}/> Hong Kong</span>
                    </div>
                </div>
                <div class="single-box">
                    <div class="image-area" style={{background: "url(" +  Logo  + ")"}} ><img src={Frame} /> </div>
                    <div class="img-text">
                        <p class="msg">enjoy using Medicinesworld.com because it is reliable.揥e enjoy using Exporters.SG because it is reliable.揥e enjoy using Exporters.SG because it is reliable.</p>
                        <a class="lead com">AEROCONSULT BV</a><br/>
                        <span class="lead"><img src={Flag}/> Hong Kong</span>
                    </div>
                </div>
            </div>
             
            <div class="home-testimonial-footer">
                <a>See why they use Medicinesworld.com</a>
            </div>
        </div>
    )
}

export default Testimonial;