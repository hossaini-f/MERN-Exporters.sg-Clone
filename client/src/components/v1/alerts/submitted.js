import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './statics/style.css';


const Submitted = (props) => {
    const [show, setShow] = useState(true);
    const hideAlert = () => {
        setShow(false);
    }
    
    return (
        <>
        <div class={show ? "wrapper-div" : "hide-alert"}></div>
        <div class={show ? "content-div-c" : "hide-alert"}>
            <div>
                <div class="H2">{props.title}</div>
                <div>
                    <span class="T1" onClick={()=>{hideAlert()}}>X</span>
                </div>
            </div>
            <div>
                <p class="T1">{props.message}</p>
                <div class="done-msg-btn" onClick={()=> {hideAlert();window.location.reload(false)}}>Ok</div>
            </div>
        </div>
        </>
    )
}
export default Submitted;