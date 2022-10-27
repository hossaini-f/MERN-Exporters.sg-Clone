import React, {useState} from 'react';
import '../statics/style.css';

const EditBilling = () => {
    const [display, setDisplay] = useState(true);
    return(
        <>
            <div id="back-wrapper-p" class={display ? "show-message" : "hide-message"}></div>
            <div id="pro-container-g" class={display ? "show-message" : "hide-message"}>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td><a>Edit Profile - Rating</a></td>
                            <td><div onClick={() =>{setDisplay(false)}}>X</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default EditBilling;