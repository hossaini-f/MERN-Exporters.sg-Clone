import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Message from './message';
import BroadcastIcon from './statics/icons/broadcast.png';
import ProfileFrame from './statics/icons/frame.profile.png';
import AV from './statics/icons/av.png';
import Flag from './statics/icons/india.png';
import './statics/style.css';

const InboxComp = () => {
    const [isActive, setIsActive] = useState(false);
    const [messageBox, setMessageBox] = useState(false);
    const [block, setBlock] = useState(false);

    return(
        <>
        <div id="f-inbox-container">
            <div id="f-inbox-wrapper">
                <div>Inbox</div>
                <div id="f-inbox-btns">
                    <div>
                        <select>
                            <option>All</option>
                            <option>Unread</option>
                        </select>
                        <div onClick={() => window.location.reload(false)}><i class="fa fa-refresh"></i> &nbsp;Refresh</div>
                        <div onClick={() => setIsActive(!isActive)}><i class="fa fa-th-list"></i> &nbsp;Contacts</div>
                        <div onClick={() => setBlock(!block)}><i class="fa fa-ban"></i> &nbsp;Blocks</div>
                        <div><Link to="/user/broadcast"><img src={BroadcastIcon} alt="" /> &nbsp;Broadcast</Link></div>
                    </div>
                    <div id="f-inbox-remove"><i class="fa fa-trash"></i> &nbsp;Remove</div>
                </div>
                <div id="f-inbox-empty">No messages.</div>
                {/* <div class="f-inbxo-messages" onClick={() => setMessageBox(!messageBox)}>
                    <div><img src={ProfileFrame} alt=""/></div>
                    <div>
                        <div>
                            <div><span>EKINOKS MEDIKAL DIS TICARET LTD STI</span></div><br/>
                            <div><span class="m-msg">This is good to hear from you soon.</span></div>
                        </div>
                        <div dir="rtl">
                            <div><img src={AV} alt="Icon" /></div><br/>
                            <div><span class="m-msg" >2 Apr</span></div>
                        </div>
                    </div>
                </div>
                <div class="f-inbxo-messages" onClick={() => setMessageBox(!messageBox)}>
                    <div><img src={ProfileFrame} alt=""/></div>
                    <div>
                        <div>
                            <div><span>EKINOKS MEDIKAL DIS TICARET LTD STI</span></div><br/>
                            <div><span class="m-msg">This is good to hear from you soon.</span></div>
                        </div>
                        <div dir="rtl">
                            <div><img src={AV} alt="Icon" /></div><br/>
                            <div><span class="m-msg" >2 Apr</span></div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        {/* Pop Up Area */}
        { !messageBox 
            ? (

            <>
            <div class={isActive ? 'inbox-modal-wrapper show-inbox-modal' : "inbox-modal-wrapper"}></div>
            <div class={isActive ? 'inbox-modal show-inbox-modal' : 'inbox-modal'}>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td><span>Contact List</span></td>
                            <td><div onClick={() => setIsActive(!isActive)}>X</div></td>
                        </tr>
                    </tbody>
                </table>
                {/* <div id="inbox-top-btns-msg">
                    <div>
                        <div>(1/50)</div>
                        <div>Up Limit</div>
                        <div>Send All</div>
                        <div>Remove All</div>
                    </div>
                    <div>
                        <span>Sort by</span>
                        <select>
                            <option>Date Added</option>
                            <option>Company Name</option>
                        </select>
                    </div>
                </div>
                <div class="inbox-member">
                    <div><img src={ProfileFrame} /></div>
                    <div>
                        <div>
                            <a>OTC GLOBAL LTD</a><br style={{marginBottom:"10px"}}/>
                            <img src={Flag} /> <span>Indai</span>
                        </div>
                        <div><br/><br/>
                            <span>2 Apr</span> 
                        </div>
                    </div>
                    <div>
                        <div onClick={() => setMessageBox(true)}>Message</div>
                        <div>Add Trust Network</div>
                        <div>Review</div>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div class="inbox-member">
                    <div><img src={ProfileFrame} /></div>
                    <div>
                        <div>
                            <a>OTC GLOBAL LTD</a><br style={{marginBottom:"10px"}}/>
                            <img src={Flag} /> <span>Indai</span>
                        </div>
                        <div><br/><br/>
                            <span>2 Apr</span> 
                        </div>
                    </div>
                    <div>
                        <div>Message</div>
                        <div>Add Trust Network</div>
                        <div>Review</div>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div class="inbox-member">
                    <div><img src={ProfileFrame} /></div>
                    <div>
                        <div>
                            <a>OTC GLOBAL LTD</a><br style={{marginBottom:"10px"}}/>
                            <img src={Flag} /> <span>Indai</span>
                        </div>
                        <div><br/><br/>
                            <span>2 Apr</span> 
                        </div>
                    </div>
                    <div>
                        <div>Message</div>
                        <div>Add Trust Network</div>
                        <div>Review</div>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div id="inbox-pag">
                    <div>Paginate</div>
                    <div>Delete</div>
                </div> */}
                <div id="inbox-tips">
                    <span>You can add a contact in many ways:</span>
                    <ul>
                        <li>Go to member profiles and click "Add Contact".</li>
                        <li>Browse Category pages and select members to add.</li>
                        <li>Search for a specific member by company name.</li>
                    </ul>
                </div>
            </div>
            </>
            )
            : (
            <Message/>
            )}
           <div class={block ? 'inbox-modal-wrapper show-inbox-modal' : "inbox-modal-wrapper"}></div>
           <div id={block ? "block-wrapper" : "block-wrapper-1"}>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td><span>Block List</span></td>
                            <td><div onClick={() => setBlock(!block)}>X</div></td>
                        </tr>
                    </tbody>
                </table>
                <div id="block-tips">
                    Private list of members you do not want to receive their messages.<br/>
                    To block add a member, go to his profile and click <span>"Block"</span>.
                </div><br/>
                <table width="100%" id="tbl-header" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td width="50px" align="center">No.</td>
                            <td>Blocked</td>
                            <td width="100px">Date Added</td>
                            <td width="75px"></td>
                        </tr>
                    </tbody>
                </table>
                {/* <table width="100%" class="tbl-content" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td width="50px" align="center">1.</td>
                            <td><a>FAR WAY GENERAL TRADING LLC</a></td>
                            <td width="100px">2 Apr</td>
                            <td width="20px">
                                <div>Unblock</div>
                            </td>
                        </tr>
                    </tbody>
                </table> */}
            </div> 
        </>
    )
}
export default InboxComp;