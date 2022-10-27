import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {sendGetQuote} from '../../../../../actions/v1/inbox';
import moment from 'moment';
import './statics/style.css';


const AuthGetQuote = (props) => {
    const senderId = JSON.parse(localStorage.getItem('profile')).result.id;
    const [show, setShow] = useState(true);

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        sender: senderId,
        receiver: props.id,
        order: props.order,
        product: props.title,
        date: moment().format("DD-MM-YYYY"),
        country: props.country,
        category: props.catId,
        additional: '',
        buyingLead: 'No',
        joinCategory: 'No'
    });
    
    
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const [checkbox1, setCheckbox1] = useState(true);
    const [checkbox2, setCheckbox2] = useState(true);

    const onChangeCheckbox1 = (e) => {
        if(checkbox1){
            formData.buyingLead = "Yes";
        }else{
            formData.buyingLead = "No";
        }
    }
    const onChangeCheckbox2 = (e) => {
        if(checkbox2){
            formData.joinCategory = "Yes";
        }else{
            formData.joinCategory = "No";
        }
    }
    const hideAlert = () => {
        setShow(false);
    }
    
    const submitForm = () => {
        dispatch(sendGetQuote(formData))
    }

    return (
        <>
        <div class={show ? "wrapper-div" : "hide-alert"}></div>
        <div class={show ? "content-div-c" : "hide-alert"}>
            <div>
                <div class="H2">{props.title} </div>
                <div>
                    <span class="T1" onClick={()=>{hideAlert();props.onClick()}}>X</span>
                </div>
            </div>
            <div>
                <div id="senq-form">
                    <form>
                        <div>Ask For Quotation</div>
                        <div>
                            <label class="T1">Qty:</label>
                            <input type="text" name="order" onChange={onChange} placeholder={props.order} />
                            <label class="T1">Unit</label>
                        </div>
                        <div> 
                            <textarea rows="3" name="additional" onChange={onChange} placeholder="Additional details you would like to include."></textarea>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" name="buyingLead" onChange={()=>{onChangeCheckbox1();setCheckbox1(!checkbox1)}} value="Yes" id="1"/>
                                <label for="1" class="T1">Post this as a Buying Lead</label>
                            </div>
                            <div>
                                <input type="checkbox" id="2"/>
                                <label for="2" class="T1">Add Seller to Contact List</label>
                            </div>
                            <div>
                                <input type="checkbox" name="joinCategory" onChange={()=>{onChangeCheckbox2();setCheckbox2(!checkbox2)}} value="Yes" id="3"/>
                                <label for="3" class="T1">Join <span class="link-b">{props.category}</span> Category</label>
                            </div>
                        </div>
                    </form>
                </div>
                <button onClick={()=> {submitForm();props.onClick()}}>Send Enquiry</button>
            </div>
        </div>
        </>
    )
}
export default AuthGetQuote;