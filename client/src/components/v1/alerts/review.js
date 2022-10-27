import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import './statics/style.css';
import {addNewReview} from '../../../actions/v1/inbox';
import Submitted from './submitted';


const SignInAlert = (props) => {
    const [show, setShow] = useState(true);
    const [showTab, setShowTab] = useState(false);
    const dispatch = useDispatch();

    const hideAlert = () => {
        setShow(false);
    }
    // Store Review
    const [formData, setFormData] = useState({
        onTime: '0',
        expectation: '0',
        support:'0',
        comment:'null',
        m_id: props.sender,
        rater_id: props.receiver
    });

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});

    }
    
    const addReview = () => {
        
        if(formData.comment !== 'null'){
            dispatch(addNewReview(formData));
        }
    }
    return (
        <>
        <div class={show ? "wrapper-div" : "hide-alert"}></div>
        <div class={show ? "content-div-c" : "hide-alert"}>
            <div>
                <div class="H2">Member Review</div>
                <div>
                    <span class="T1" onClick={()=>{hideAlert();window.location.reload(false)}}>X</span>
                </div>
            </div>
            <div class={!showTab ? "add-tn-panel show-alert": "hide-alert"}>
                <p class="add-tn-title">Write a Review for <a class="add-tn-lP">{props.company}</a></p>
                <p class="add-tn-pr">
                    Your Review will help other members better evaluate this member. Write a Review only when you have<br/>
                    completed a transaction with <b>"{props.company}"</b>.  
                </p>
                <p class="add-tn-pr">
                    <b>Select Your Role:</b><br/>
                    <div class="type-m">
                        <div>
                            <input type="radio" id="buyer" name="type" value="buyer" checked/>
                            <label for="buyer">I am the Buyer</label>
                        </div>
                        <div>
                            &nbsp;&nbsp;I bought a product from this member.
                        </div>
                    </div>
                    <div class="type-m">
                        <div>
                            <input type="radio" id="seller" name="type" value="seller" />
                            <label for="seller">I am the Seller</label>
                        </div>
                        <div>
                            &nbsp;&nbsp;I am the seller. I sold a product to this member.
                        </div>
                    </div>
                </p>
                <p class="add-tn-pr">Note: You may be required to provide proof of transaction when submitting the review.</p>
                <div class="button-adtn-1" onClick={()=> setShowTab(!showTab)}>Continue</div>
            </div>
            {/* SecondTab */}
            <div class={showTab ? "add-tn-panel show-alert" : "add-tn-panel hide-alert"} >
                
                <p class="add-tn-title">Write a Review for <a class="add-tn-lP">{props.company}</a></p>
                {/* 1 */}
                <p class="no-tt">1. Rate these statements:</p>
                <div class="rate-ta90">
                    <p class="add-tn-pr">A. Goods received on time.</p>
                    <ul class="rev-rating">
                        <li>
                            <input type="radio" id="a-poor" onChange={handleOnChange} name="onTime" value="1"/>
                            <label for="a-poor">Poor</label>
                        </li>
                        <li>
                            <input type="radio" id="a-unst" onChange={handleOnChange} name="onTime" value="2"/>
                            <label for="a-unst">Unsatisfactory</label>
                        </li>
                        <li>
                            <input type="radio" id="a-st" onChange={handleOnChange} name="onTime" value="3"/>
                            <label for="a-st">Satisfactory</label>
                        </li>
                        <li>
                            <input type="radio" id="a-gd" onChange={handleOnChange} name="onTime" value="4"/>
                            <label for="a-gd">Good</label>
                        </li>
                        <li>
                            <input type="radio" id="a-outs" onChange={handleOnChange} name="onTime" value="5"/>
                            <label for="a-outs">Outstanding</label>
                        </li>
                    </ul>
                </div>
                {/* 2 */}
                <div class="rate-ta90">
                    <p class="add-tn-pr">B. Goods arrived in good condition and met my expectations:</p>
                    <ul class="rev-rating">
                        <li>
                            <input type="radio" id="b-poor" onChange={handleOnChange} name="expectation" value="1"/>
                            <label for="b-poor">Poor</label>
                        </li>
                        <li>
                            <input type="radio" id="b-unst" onChange={handleOnChange} name="expectation" value="2"/>
                            <label for="b-unst">Unsatisfactory</label>
                        </li>
                        <li>
                            <input type="radio" id="b-st" onChange={handleOnChange} name="expectation" value="3"/>
                            <label for="b-st">Satisfactory</label>
                        </li>
                        <li>
                            <input type="radio" id="b-gd" onChange={handleOnChange} name="expectation" value="4"/>
                            <label for="b-gd">Good</label>
                        </li>
                        <li>
                            <input type="radio" id="b-outs" onChange={handleOnChange} name="expectation" value="5"/>
                            <label for="b-outs">Outstanding</label>
                        </li>
                    </ul>
                </div>
                {/* 3 */}
                <div class="rate-ta90">
                    <p class="add-tn-pr">C. Seller provided good customer support and was able to resolve my issues:</p>
                    <ul class="rev-rating">
                        <li>
                            <input type="radio" id="c-poor" onChange={handleOnChange} name="support" value="1"/>
                            <label for="c-poor">Poor</label>
                        </li>
                        <li>
                            <input type="radio" id="c-unst" onChange={handleOnChange} name="support" value="2"/>
                            <label for="c-unst">Unsatisfactory</label>
                        </li>
                        <li>
                            <input type="radio" id="c-st" onChange={handleOnChange} name="support" value="3"/>
                            <label for="c-st">Satisfactory</label>
                        </li>
                        <li>
                            <input type="radio" id="c-gd" onChange={handleOnChange} name="support" value="4"/>
                            <label for="c-gd">Good</label>
                        </li>
                        <li>
                            <input type="radio" id="c-outs" onChange={handleOnChange} name="support" value="5"/>
                            <label for="c-outs">Outstanding</label>
                        </li>
                    </ul>
                </div>
                {/* second option*/}
                <p class="no-tt">2. Additional Comments (Optional):</p>
                <div class="rate-ta90">
                    <textarea rows="4" cols="55" class="rev-txt-ar" name="comment" onChange={handleOnChange}></textarea>
                </div>
                {/* third option*/}
                <p class="no-tt">3. Will you BUY from this member again?</p>
                <div class="rate-ta90">
                    <ul class="rev-rating">
                        <li>
                            <input type="radio" id="yes" name="again-b" value="yes" checked/>
                            <label for="yes">Yes</label>
                        </li>
                        <li>
                            <input type="radio" id="no" name="again-b" value="no"/>
                            <label for="no">No</label>
                        </li>
                    </ul>
                </div>
                <p class="add-tn-pr" style={{color:"#E00000"}}>
                    Important: Review cannot be changed once submitted. Medicinesworld.com reserves the right to remove any<br/>
                    reviews that do not comply to the our <a class="add-tn-lP" style={{textTransform:"capitalize"}}>Terms of Service</a>.
                </p>
                <div class="button-adtn-2" onClick={()=>{addReview();setShow(false)}}>Submit Review</div>
            </div>
        </div>
        {!show && <Submitted title={"Member Review"} message={"Your review has been submitted."}/>} 
        </>
    )
}
export default SignInAlert;