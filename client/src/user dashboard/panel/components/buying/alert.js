import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './statics/style.css';


const SignInAlert = (props) => {
    const [show, setShow] = useState(true);
    const hideAlert = () => {
        setShow(false);
    }
    
    return (
        <>
        <div class={show ? "wrapper-div" : "hide-alert"}></div>
        <div class={show ? "content-div-c" : "hide-alert"}>
            <div>
                <div class="H2">Buying Lead</div>
                <div>
                    <span class="T1" onClick={()=>{hideAlert();props.onClick()}}>X</span>
                </div>
            </div>
            <div>
                <p class="T1">Buying Lead Added Successfully.</p>
                <button onClick={()=>{hideAlert();props.onClick()}}>Ok</button>
            </div>
        </div>
        </>
    )
}
export default SignInAlert;