import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNewReport, getEmail} from '../../../actions/v1/inbox';
import Submitted from './submitted';
import './statics/style.css';


const Report = (props) => {
    let user;

    useEffect(()=>{
        dispatch(getEmail(props.id))
    },[])

    
    const fetchData = useSelector((state) => state.Inbox)

    if(fetchData.mail !== "none" && fetchData.mail.Email[0].email){
        user = fetchData.mail.Email[0].email;
    }else{
        user = "Anonymous";
    }

    const [show, setShow] = useState(true);
    const hideAlert = () => {
        setShow(false);
    }
    const dispatch = useDispatch();
    const name = JSON.parse(localStorage.getItem('profile')).result.name;
    const [formData, setFormData] = useState({
        name,
        email:'noreply@medicinesworld.com',
        subject:"Feedback on "+props.company,
        report:"null"
    });
    

    const addReport = () => {
        if(formData.report !== "null" && formData.report !== ""){
            dispatch(addNewReport(formData));
        }
    }
    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <>
        <div class={show ? "wrapper-div" : "hide-alert"}></div>
        <div class={show ? "content-div-c" : "hide-alert"}>
            <div>
                <div class="H2">Report Member</div>
                <div>
                    <span class="T1" onClick={()=>{hideAlert();window.location.reload(false)}}>X</span>
                </div>
            </div>
            <div class="add-tn-panel">
                <p class="add-tn-pr" style={{paddingTop:"20px",marginBottom:"-10px"}}><b>Important:</b></p>
                <p class="add-tn-pr">
                    Use this form to report if you believe that this member is in violation of Member Conduct in our <a class="add-tn-lP" style={{textTransform:"capitalize"}}>Terms of Service</a>.<br/>
                    We will review and take appropriate actions.
                </p>
            </div>
            <div class="add-tn-panel"  style={{paddingRight:"10px", marginTop:"10px"}}>
                <br/>
                <span class="add-tn-title" style={{color:"#a5a5a5",fontWeight:"normal"}}>Name:</span><br/>
                <span class="add-tn-pr"><b>{name}</b></span><br/>
                <span class="add-tn-title" style={{color:"#a5a5a5",fontWeight:"normal"}}>Email:</span><br style={{marginTop:"10px"}}/>
                <span class="add-tn-pr"><b>{user}</b></span><br/>
                <span class="add-tn-title" style={{color:"#a5a5a5",fontWeight:"normal"}}>Subject:</span><br style={{marginTop:"10px"}}/>
                <span class="add-tn-pr"><b>[B] Send Feedback on {props.company}</b></span><br/><br/>
                <textarea class="rev-txt-ar" rows="10" cols="65" name="report" onChange={handleOnChange}>

                </textarea>
                <div class="button-adtn-2" onClick={()=>{addReport();setShow(false)}} style={{marginTop:"10px"}}>Send Message</div>
            </div>
        </div>
        {!show && <Submitted title={"Report Member"} message={"Message Received. See HELP for instant answers."}/>} 
        </>
    )
}
export default Report;