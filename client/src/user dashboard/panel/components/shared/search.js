import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {searchMarket} from '../../../../actions/v1/selling.products';
import './statics/search.css';
import moment from 'moment';

const SearchMarket = () => {
    const [show, setShow] = useState(true);
    const [query, setQuery] = useState('');
    const [data ,setData] = useState([]);
    const [average, setAverage] = useState();
    const [median, setMedian] = useState();
    const [seller, setSeller] = useState();
    const [buyer, setBuyer] = useState();
    const dispatch = useDispatch();
    const fetchData = useSelector((state) => state.Selling.searchResult);

    useEffect(() => {
        if(fetchData.market){
            setData(fetchData.market);
        }
    });
    useEffect(() => {
        setAverage(Math.ceil(Math.random() * 100))
        setMedian(Math.ceil(Math.random() * 10))
        setSeller(Math.ceil(Math.random() * 10))
        setBuyer(Math.ceil(Math.random() * 10))
    },[data]);
    const searchMarketProducts = (e) => {
        e.preventDefault();
        if(query !== ''){
            dispatch(searchMarket(query));
        }
    }
    return (

        <>
            <div id="search-120wrapper" class={show ? "show-message" : "hide-message"}></div>
            <div id="search-120container" class={show ? "show-message" : "hide-message"}>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td>Market Research</td>
                            <td><div onClick={() => {setShow(!show); window.location.reload()}}>X</div></td>
                        </tr>
                    </tbody>
                </table>
                <div id="container-120research">
                    <span>
                        Market information on prices, quantity 
                        and delivery locations from seller quotations.<br/>
                        <a>Learn more.</a>
                    </span>
                    <div>
                        <form onSubmit={searchMarketProducts}>
                            <div>Enter Product Description</div>
                            <div>
                                <input type="text" onChange={(e) => setQuery(e.target.value)} />
                                <button type="submit">Research</button>
                            </div>
                        </form>
                    </div>
                    {fetchData !== 'none' && data.length > 0 ?
                    <>
                    <div id="search10result">
                        <div>
                            <span class="AP90">Average Unit Price</span><br/>
                            <span class="AP99"><b>US${average}</b></span><br style={{marginBottom:"7px"}}/>
                            <span class="AP90">Median Unit Price</span><br/>
                            <span class="AP99"><b>US${median}</b></span><br/>
                        </div>
                        <div>
                            <span class="AP90">Top Delivery Locations</span><br/>
                            <div id="flag-bl90">
                                <span></span>&nbsp;
                                <span class="AP90"><b>INDIA</b></span><br/>
                                <span></span>&nbsp;
                                <span class="AP90"><b>US</b></span><br/>
                                <span></span>&nbsp;
                                <span class="AP90"><b>UNITED ARAB EMIRATE</b></span><br/>
                            </div>
                        </div>
                        <div>
                            <span class="AP90"><span style={{color:"#f26d00",fontWeight:"bold"}}>
                                {seller}</span> Active <span style={{color:"#00a321"}}>Sellers</span></span>
                            <Link to="/user/buying" class="buy-btl12">Buy</Link>
                        </div>
                        <div>
                            <span class="AP90"><span style={{color:"#f26d00",fontWeight:"bold"}}>
                                {buyer}</span> Active <span style={{color:"#8d66dd"}}>Buyers</span></span>
                            <Link to="/user/selling" class="sell-btl12">Sell</Link>
                        </div>
                    </div>
                    <div id="search09result-12">
                        <div>
                            <div></div>
                            <div></div>
                            <div class="AP0912">Unit Price</div>
                            <div class="AP0912">Qty</div>
                            <div class="AP0912">Date</div>
                            <div></div>
                            <div></div>
                        </div>
                        {fetchData !== 'none' && data
                        ?
                            data.map((m) => (
                                <div class="showbl-12b">
                                    <div><a oncClick={(e) => e.preventDefault()} class="showbl-link">{m.model_desc}</a></div>
                                    <div class="AP29099">{m.stock_location}</div>
                                    <div class="AP29099">{m.price}</div>
                                    <div class="AP29099">{m.quantity}<small>{m.unit.length > 4 ? m.unit.substring(0, 5) + ".." : m.unit}</small></div>
                                    <div class="AP29099">{moment(m.createdAt).format("MMM") }</div>
                                    <div><Link to="/user/buying">Buy</Link></div>&nbsp;
                                    <div><Link to="/user/selling">Sell</Link></div>
                                </div>
                            ))
                        :
                        null
                        }
                    </div>
                    </>
                    :
                    null
                    }
                    {fetchData !== 'none' && data.length === 0
                    ?
                    <div style={{marginTop:"5px"}}>
                      <span>No result found.</span>
                    </div>
                    :
                    null
                    }
                </div>
            </div>
        </>
        
    )
}
export default SearchMarket;