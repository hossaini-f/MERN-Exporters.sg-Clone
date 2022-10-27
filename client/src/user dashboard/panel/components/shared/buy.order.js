import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './statics/order.css';
import Info from './statics/icon/info.png';

const OrderProducts = () => {
    const [tab, setTab] = useState("buy");
    return (
        <>
            <div class="bl-order-12">
                <div id="blorder-title"><b>Buying</b> (1)</div>
                <div>
                    <div><Link to="/user/buying"><i class="fa fa-angle-left"></i> Back</Link></div>
                    <div id="bl-100p-tabs">
                        <div onClick={() => setTab("buy")} class={tab === "buy" ? "bl-100active" : "bl-100inactive"}>Buying</div>
                        <div onClick={() => setTab("sell")} class={tab === "sell" ? "bl-100active" : "bl-100inactive"}>Selling</div>
                    </div>
                    <div id="info0-bl">
                        <img src={Info} alt=""/>
                        <a>Learn more about Orders.</a>
                    </div>
                </div>
                <div id="empty-msg-23">There are no orders.</div>
            </div>
        </>
    )
}
export default OrderProducts;