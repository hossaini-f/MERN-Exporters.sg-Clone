import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './statics/message.css';
import Icon from './statics/icons/icon.png';
import Setting from './statics/icons/settingIcon.png';
import Rate from './statics/icons/rate.png';
import AV from './statics/icons/av.png';
import Dots from './statics/icons/dots.png';
import moment from 'moment';
import AddTrustNetwork  from '../../../../components/v1/alerts/add.trust.network';
import WriteReview from '../../../../components/v1/alerts/review';
import Report from '../../../../components/v1/alerts/report';
import {sendMessage, getMessages, blockMember} from '../../../../actions/v1/inbox';

const Message = (props) => {
    const [display, setDisplay] = useState(true);
    const [show, setShow] = useState(false);
    const [switchForm, setSwitchForm] = useState(false);
    const [translate, setTranslate] = useState(false);
    const [addTrustNetwork, setAddTrustNetwork] = useState(true);
    const [writeReview, setWriteReview] = useState(false);
    const [addReport, setAddReport] = useState(false);

    const dispatch = useDispatch();

    const receiverId = props.id;
    const senderId = JSON.parse(localStorage.getItem('profile')).result.id;
    const [messages, setMessages] = useState([]);
    const [receiverInfo, setReceiverInfo] = useState([]);
    const [senderInfo, setSenderInfo] = useState([]);
    
    const fetchData = useSelector((state) => state.Inbox)
    const fetchReceiverInfo = useSelector((state) => state.Public.browseItems.data.find((m) => m.id === receiverId));
    const fetchSenderInfo = useSelector((state) => state.Public.browseItems.data.find((m) => m.id === senderId));
    

    useEffect(()=>{
        if(receiverId > 0){
            dispatch(getMessages(senderId, receiverId));        
        }
        
    },[]);

    useEffect(() => {
        if(fetchData.sentMessage){
            setMessages(fetchData.sentMessage.messages)
        }
        if(fetchReceiverInfo){
            setReceiverInfo(fetchReceiverInfo)
        }
        if(fetchSenderInfo){
            setSenderInfo(fetchSenderInfo)
        }
    });

    // Message Section
    const [messageContent, setMessageContent] = useState({
        message: 'Null',
        sender: senderId,
        receiver: receiverId,
        quote:'No'
    });

    const handleChange = (e) => {
        setMessageContent({ ...messageContent, [e.target.name]: e.target.value});
        
    };
    const sendMsg = (e) => {
        e.preventDefault();
        if(messageContent.message != "Null" && messageContent.message != ""){
            dispatch(sendMessage(messageContent));
            props.onClick();
        }
    }
    // Quote Section
    const [messageQuote, setMessageQuote] = useState({
        product:'Null',
        quantity:'0',
        unit:'Unit',
        sender: senderId,
        receiver: receiverId,
        quote:'Yes'
    });
    const handleQuote = (e) => {
        setMessageQuote({ ...messageQuote, [e.target.name]: e.target.value});
        console.log(messageQuote)
    }
    const sendQuote = (e) => {
        e.preventDefault();
        if(messageQuote.product != "Null" && messageQuote.product != ""){
            dispatch(sendMessage(messageQuote))
            props.onClick();
        }
    }

    const setText = (e) => {
        document.getElementById("setTx").value += "Hi, I like to promote my products to you, and I am selling:";
    }
    // Block Member
    const doBlockMember = (senderId, receiverId) => {
        if(receiverId && senderId){
            dispatch(blockMember(senderId, receiverId))
        }else{
            return
        }
    }
    return(
        <>
            <div id="message-wrapper" class={display && addTrustNetwork ? "show-message" : "hide-message"}></div>
        
            <div id="message-container" class={display && addTrustNetwork ? "show-message" : "hide-message"}>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td><a>{receiverInfo.company}</a></td>
                            <td><div onClick={() =>{props.onClick()}}>X</div></td>
                        </tr>
                    </tbody>
                </table>
                <div id="message-top-btn">
                    <div>
                        <img src={AV} alt="Icon" />
                        <img src={Rate} alt="Rating" />
                    </div>
                    <div>
                        {!translate ? 
                        <div onClick={() => setTranslate(!translate)}>
                            <img src={Icon} alt="Icon" />
                            <img src={Setting} alt="Rating" />
                        </div>
                        : <div style={{display:"none"}}></div>
                        }
                        <div onClick={() => setShow(!show)}>
                            <img src={Dots} alt="" />
                        </div>
                        {messages && messages.length > 0 ?
                        messages.slice(0,1).map((msg)=> (
                            <>
                                {msg.is_blocked === "No"
                                ?
                                <div onClick={() => doBlockMember(senderId, receiverId)}><i class="fa fa-ban"></i> Block</div>
                                :
                                null
                                }
                            </>
                        ))
                        :
                        <div><i class="fa fa-ban"></i> Block</div>
                        }
                        
                        <ul class={show ? "showNav" : "hideNav"}>
                            {fetchData.sentMessage !== null && fetchData.sentMessage.trusted ?
                             null
                             :
                            <li><a onClick={() => {setAddTrustNetwork(false);setDisplay(false)}}>Add to Trust Network</a></li>
                             }
                            <li><a onClick={() => {setWriteReview(true);setDisplay(false)}}>Review</a></li>
                            <li><a onClick={() => {setAddReport(true);setDisplay(false)}}>Report</a></li>
                        </ul>
                    </div>
                </div>
                <div id={ translate ? "translate" : "translate-1"}>
                    <form>
                        <div>Translation</div>
                        <select>
                            <option>English</option>
                            <option>Arabic</option>
                            <option>Urdu</option>
                            <option>Turkish</option>
                            <option>Persian</option>
                        </select>
                        <div id="cl-smg" onClick={() => setTranslate(!translate)}>X</div>
                    </form>
                </div>
                {/* Message Box */}
                <div class="msg-box">
                    <div id="show-hi">Message history is shown up to 30 days.</div>
                    { messages && messages.length > 0 ? 
                            
                        messages.map((msg) => (
                            <>
                            {/* Sender Side */}
                            {msg.sender_id === senderId ?

                            <div dir="rtl" class="msg-rigth">
                                <div>
                                    <img src={senderInfo.logo} alt=""/>
                                </div>
                                <div></div>
                                <div dir="ltr">
                                    <a>{senderInfo.company}</a> . <span class="A90"> On {moment(msg.createdAt).format('MMM D')}</span> <br style={{marginBottom:"10px"}}/>
                                    <span class="m-msg-r" dangerouslySetInnerHTML={{__html : msg.message_content}} ></span>
                                    
                                </div>
                            </div>
                            :
                            <div dir="ltr" class="msg-left">
                                    <div>
                                        <img src={receiverInfo.logo} alt=""/>
                                    </div>
                                    <div></div>
                                    <div dir="ltr">
                                        <a>{receiverInfo.company}</a> . <span class="A90"> On {moment(msg.createdAt).format('MMM D')}</span> <br style={{marginBottom:"10px"}}/>
                                        <span class="m-msg-r" dangerouslySetInnerHTML={{__html : msg.message_content}}></span>
                                    </div>
                                </div>
                            }
                        
                            </>
                        ))
                    :
                    null
                    }
                </div>
                {messages && messages.length > 0 ?
                        messages.slice(0,1).map((msg)=> (
                            <>
                                {msg.is_blocked === "Yes"
                                ?
                                <div id="block-tooltip">You have <b>blocked</b> this member </div>
                                :
                                null
                                }
                            </>
                        ))
                        :
                        null
                        }
                <div id="A-RPP">
                    <div>
                        {switchForm 
                            ? (
                                <div id="close-quote" onClick={() => setSwitchForm(!switchForm)}>Request Quote <span>X</span></div>
                            ) 
                            : (
                                <>
                                    <div id="szc12" onClick={() => setSwitchForm(!switchForm)}>Request Quote</div>
                                    <div id="szc13" onClick={(e)=> setText(e)}>Promote Products</div>
                                </>
                            )
                        }
                    </div>
                    {/* <div>Place Order</div> */}
                </div>
                <div id={switchForm ? "msb-box-form-1" : "msb-box-form"}>
                    <form onSubmit={sendMsg}>
                        <div>
                            <textarea id="setTx" name="message" placeholder="Type your message here." onChange={handleChange}>

                            </textarea>
                        </div>
                        <div>
                            <div>
                                {/* <label for="attachment"><i class="fa fa-paperclip"></i> Attachment</label> */}
                                <input id="attachment" type="file" style={{display:"none"}}/>
                            </div>
                            <div>
                                {messages && messages.length > 0 ?
                                    messages.slice(0,1).map((msg)=>(
                                        <>
                                        {msg.is_blocked === "No" ?
                                        <button type="submit">Send</button>
                                        :
                                        <div id="block-btn">Send</div>
                                        }    
                                        </>
                                    ))
                                :
                                
                                    <button type="submit">Send</button>
                                }
                            </div>
                        </div>
                    </form>
                </div>
                <div id={switchForm ? "msb-box-90" : "msb-box-90-1"}>
                    <form onSubmit={sendQuote}>
                        <div id="msb-box-quote">
                            <div id="xmlg">
                                Hi, I like to get a quotation for:
                            </div>
                            <div id="quote-in-1">
                                <label>Product:</label> <input type="text" name="product" onChange={handleQuote}/>
                            </div>
                            <div id="quote-in-2">
                                <label>Quantity:</label> <input type="text" name="quantity" onChange={handleQuote}/>
                                <select name="unit" onChange={handleQuote}>
                                    <option value="Unit">Unit</option>
                                    <option value="KG">kilogram</option>
                                    <option value="Metre">Metre</option>
                                    <option value="Gallon">Gallon</option>
                                </select>
                            </div>
                        </div>
                        <div id="ch-msgb-input">
                            <input type="checkbox" id="ch"/>&nbsp;&nbsp;
                            <label for="ch">Post as Buying Lead</label>
                        </div>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <div id="quote-btn-msg">
                                {/* <label for="attachment"><i class="fa fa-paperclip"></i> Attachment</label> */}
                                <input id="attachment" type="file" style={{display:"none"}}/>
                            </div>
                            <div id="quote-btn-msg">
                                <button type="submit">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="msg-tip">
                    <a>Tip: Trade safely. Always communicate within Medicinesworld.com</a> 	
                </div>
            </div>
            
            {!addTrustNetwork && <AddTrustNetwork sender={senderId} receiver={receiverId} company={receiverInfo.company} onClick={() => {setAddTrustNetwork(true)}}/>} 
            {writeReview && <WriteReview sender={senderId} receiver={receiverId} company={receiverInfo.company}/>} 
            {addReport && <Report id={receiverId} company={receiverInfo.company}/>} 
        </>
    )
}
export default Message;