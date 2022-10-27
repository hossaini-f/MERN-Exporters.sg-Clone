import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './statics/style.css';


const DoneAlert = (props) => {
    const [show, setShow] = useState(true);
    const hideAlert = () => {
        setShow(false);
    }
    
    return (
        <>
        <div class={show ? "wrapper-div" : "hide-alert"}></div>
        <div class={show ? "content-div-c" : "hide-alert"}>
            <div>
                <div class="H2">Enquiry Sent</div>
                <div>
                    <span class="T1" onClick={()=>{hideAlert();props.onClick()}}>X</span>
                </div>
            </div>
            <div>
                <p class="T1">You should be receiving a reply from the seller soon.</p>
                <Link to="/">Okay</Link>
            </div>
        </div>
        </>
    )
}
export default DoneAlert;