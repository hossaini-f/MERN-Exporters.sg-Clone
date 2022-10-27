import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNewTrustNetwork} from '../../../actions/v1/inbox';
import './statics/style.css';


const AddTrustNetwork = (props) => {
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();

    const hideAlert = () => {
        setShow(false);
    }
    
    const addTrustNetwork = (sender, receiver) => {
        dispatch(addNewTrustNetwork(sender, receiver));
    }
    return (
        <>
        <div class={show ? "wrapper-div" : "hide-alert"}></div>
        <div class={show ? "content-div-c" : "hide-alert"}>
            <div>
                <div class="H2">Add To Trust Network</div>
                <div>
                    <span class="T1" onClick={()=>{hideAlert();window.location.reload(false)}}>X</span>
                </div>
            </div>
            <div class="add-tn-panel">
                <p class="add-tn-title">Who you trust and will recommend.</p>
                <p class="add-tn-pr">
                    You are about to add <a class="add-tn-lP">{props.company}</a> into your Trust Network.<br/>
                    It is important you choose the right member to be in your Trust Network.<br/>
                    Please consider the following guidelines before proceeding:<br/>
                </p>
                <p id="add-tn-li">
                    <ul>
                        <li>You have <b>traded</b> with this member before.</li>
                        <li>You will do business with this member <b>again</b>.</li>
                        <li>You will <b>recommend</b> this member to others.</li>
                    </ul>
                </p>
                <hr class="hr-add"/>
                <p class="T1">
                    Yes, I trust <b>{props.company}</b>
                </p>
                <div class="button-adtn" onClick={() => {addTrustNetwork(props.sender,props.receiver);window.location.reload(false)}}>Add to Trust Network</div>
                
                <hr class="hr-add"/>
            </div>
        </div>
        </>
    )
}
export default AddTrustNetwork;