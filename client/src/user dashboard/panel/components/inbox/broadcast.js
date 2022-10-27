import react from 'react';
import {Link} from 'react-router-dom';
import './statics/style.css';

const BroadCastMessage = () => {
    return(
        <>
            <div id="broadcast-wrapper">
                <div id="broadcast-container">
                    <div>Inbox</div>
                    <div><Link to="/user/inbox"><i class="fa fa-angle-left"></i> Back</Link></div>
                    <span id="br-tips">Many ways to broadcast your message in one single click.</span>
                    <div id="br-cate">
                        <div>
                            <div>Send Message</div>
                            <span>to</span>
                            <a>Everyone in my Contact List</a>
                        </div>
                        <div>
                            <div>Send Message</div>
                            <span>to</span>&nbsp;&nbsp;
                            <span><b>Everyone in who added me in Contact List</b></span>
                        </div>
                        <div id="cate-btn-br">
                            <div>Send Message to&nbsp; <b>Everyone by Category</b></div>
                            <div>
                                <div>Category 1</div>
                                <div>Category 2</div>
                                <div>Category 3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BroadCastMessage;