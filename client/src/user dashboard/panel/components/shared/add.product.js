import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories, addNewProduct} from '../../../../actions/v1/selling.products';
import Countries from './countries';
import './statics/add.product.css';

const AddProduct = () => {
    const [show, setShow] = useState(true);
    const [showSugest, setShowSugest] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [switchForm, setSwitchForm] = useState(true);
    const [id, setId] = useState('add-120container');
    const [category, setCategory] = useState([]);
    const dispatch = useDispatch();
    const fetchData = useSelector((state)=> state.Selling);
    const profileId = JSON.parse(localStorage.getItem('profile')).result.id;

    const initialData = {
        productDescription:'',
        sku:'0000',
        productType:'Normal',
        price:'0',
        unit:'Gram',
        quantity:'1',
        minOrder:'1',
        expiryDate:'7',
        additionalInfo:'',
        keyword1:'',
        keyword2:'',
        keyword3:'',
        paymentMethod:'Telegraphic Transfer (T/T)',
        shippingTerms:'FOB (Free on Board)',
        stockLocation:'',
        deliveryTime:'7 Days',
        category:'',
    }
    const [formData, setFormData] = useState(initialData);
    
    useEffect(() => {
        dispatch(getCategories());
    },[]);

    useEffect(()=>{
        if(fetchData.allCategories){
            setCategory(fetchData.allCategories.category)
        }
    });

    const showCategories = (e) => {
        e.preventDefault();
        if(e.target.productDescription.value !== ""){
            setShowSugest(!showSugest)
        }
    }
    
    const onChangeCheckbox = (e) => {
        setFormData({ ...formData, productType: e.target.type === 'radio' && e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewProduct(profileId, formData));
    } 
    const handleSwitchForm = (e) => {
        setSwitchForm(!switchForm);
        setId("add-120container-90")
    }

    return(
        <>
        <div id="addproduct0-12" class={show ? "show-message" : "hide-message"}></div>
        
        <div id={id} class={show ? "show-message" : "hide-message"} >
            <table cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr>
                        <td>Add Product</td>
                        <td><div onClick={() => setShow(!show)}>X</div></td>
                    </tr>
                </tbody>
            </table>
            <div class={switchForm ? "show-message" : "hide-message"}>
                <div id="noteimo">
                    <span>Important:</span> Ammunitions, firearms, pornographic materials, 
                    tobacco products, replicas, counterfeit items, narcotics, steroids 
                    or other controlled drugs are not allowed in Medicinesworld.com. Refer to 
                    Terms of Service for more information.
                </div>
                <div id="form-search201">
                    <form onSubmit={showCategories}>
                        <div>Enter product model or description: (Example: Mebendazole)</div>
                        <div>
                            <input type="text" name="productDescription" onChange={(e)=> setFormData({...formData, productDescription: e.target.value})}/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                            <div id="counter102" class={!showSugest ? "show-message" : "hide-message"}>
                                <span>---</span>
                                <span>Active</span>
                                <span>Buyers</span>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div class={showSugest ? "show-message" : "hide-message"}>
                    <div id="sugest9021-cat">
                        <div>Select a category for your product:</div>
                        <div>
                            <div>Suggestions</div>
                            <div><hr class="HR" /></div>
                        </div>
                    </div>
                    <div id="sugest012container">
                        <div>
                            <input type="radio" id="phone" name="s-category" />
                            <label for="phone">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone21" name="s-category" />
                            <label for="phone21">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone42" name="s-category" />
                            <label for="phone42">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone420" name="s-category" />
                            <label for="phone420">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone542" name="s-category" />
                            <label for="phone42">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone42" name="s-category" />
                            <label for="phone542">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone442" name="s-category" />
                            <label for="phone442">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone422" name="s-category" />
                            <label for="phone422">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone402" name="s-category" />
                            <label for="phone402">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone142" name="s-category" />
                            <label for="phone142">Apple Iphone 12 pro max</label>
                        </div>
                    </div>
                    <div id="orSuget021">
                        <div>OR</div>
                        <div><hr class="HR" /></div>
                    </div>
                    <div id="choselist21">
                        <div onClick={() => setShowSugest(!showSugest)}>Choose from list of categories instead</div>
                    </div>
                    <div id="btn-next-21">
                        <div onClick={ () => setSwitchForm(!switchForm)}>Continue</div>
                    </div>
                </div> */}
                <div class={!showSugest ? "select-cate212 show-message" : "hide-message"}>
                    <div class="select-cate212" >
                        <div>Choose a main a category:</div>
                        <div>
                            <select onChange={(e)=> setFormData({...formData, category: e.target.value})}>
                                {category.length > 0 && category !== 'none'
                                    ?
                                        category.map((cate) => (

                                            <option value={cate.id}>{cate.category}</option>
                                        ))
                                    :
                                    null
                                }
                            </select>
                        </div>
                    </div>
                    {/* <div id="sugest9021-cat" style={{marginTop:"-3px",borderTopLeftRadius:"0px",borderToprightRadius:"0px"}}>
                        <div>Select a category for your product:</div>
                    </div>
                    <div id="sugest012container">
                        <div>
                            <input type="radio" id="phone" name="s-category" />
                            <label for="phone">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone" name="s-category" />
                            <label for="phone">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone" name="s-category" />
                            <label for="phone">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone" name="s-category" />
                            <label for="phone">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone" name="s-category" />
                            <label for="phone">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone" name="s-category" />
                            <label for="phone">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone" name="s-category" />
                            <label for="phone">Apple Iphone 12 pro max</label>
                        </div>
                        <div>
                            <input type="radio" id="phone" name="s-category" />
                            <label for="phone">Apple Iphone 12 pro max</label>
                        </div>
                    </div> */}
                    <div id="btn-next-21">
                        <div onClick={handleSwitchForm}>Continue</div>
                    </div>
                </div>
            </div>
            {/* Product Descriptions */}
            <div id="prdesc021-sg" class={!switchForm ? "show-message" : "hide-message"}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span class="pre-h3021">Model/Description:</span><br/>
                        <span class="pre-x921">{formData.productDescription}</span> 
                        {/* <a class="pre-x921 link-33m">(change)</a> */}
                    </div>
                    <div>
                        <span class="pre-h3021">Stock Keeping Unit (SKU) / Model No.:</span><br/>
                        <input type="text" onChange={(e)=> setFormData({...formData, sku: e.target.value})}/><br/>
                        <small class="TA">Enter an unique manufacturer's part/model number.</small>
                    </div>
                    <div>
                        <span class="pre-h3021">Product Type:</span><br style={{marginBottom: "7px"}}/>
                        <input type="radio" id="normal" value="Normal" name="type" onChange={onChangeCheckbox}  checked/>
                        <label for="normal">Normal</label>
                        <input type="radio" id="on-sale" value="On-Sale" onChange={onChangeCheckbox} name="type" />
                        <label for="on-sale">On Sale</label>
                    </div>
                    <div>
                        <span class="pre-h3021">Product Category:</span><br style={{marginBottom: "7px"}}/>
                        <span class="pre-x921">
                            { category.length > 0 && category !== 'none' ? 
                            category.map((cate) => (
                                cate.id === formData.category &&
                                    <span> {cate.category}</span>
                                    
                                ))
                                :
                                null 
                            }
                        </span>&nbsp;&nbsp;
                        {/* <span id="btn-zc90" >Change</span><br /> */}
                        <input type="checkbox" name="join" id="join" />
                        <label for="join">Join this category</label><br/>
                        <small class="TA">Join to receive weekly newsletters and daily trade alerts. You can unsubscribe later.</small>
                    </div>
                    <div>
                        <span class="pre-h3021">Unit Price:</span><br style={{marginBottom: "7px"}}/>
                        <span class="TA">US$</span>
                        <input type="text" placeholder="0" onChange={(e) => setFormData({ ...formData, price: e.target.value})} />
                        <span class="TA">per</span>
                        <select onChange={(e) => setFormData({ ...formData, unit: e.target.value})}>
                            <option value="Gram">Gram</option>
                            <option value="Unit">Unit</option>
                            <option value="Metric Ton">Metric Ton</option>
                            <option value="Twenty-Foot Full Container Load">Twenty-Foot Full Container Load</option>
                            <option value="Forty-Foot Full Container Load">Forty-Foot Full Container Load</option>
                            <option value="Forty-Foot Full Container Load HC">Forty-Foot Full Container Load HC</option>
                            <option value="Kilogram">Kilogram</option>
                            <option value="Metre">Metre</option>
                            <option value="Barrel">Barrel</option>
                            <option value="Gallon">Gallon</option>
                            <option value="Bag">Bag</option>
                            <option value="Box">Box</option>
                            <option value="Drum">Drum</option>
                            <option value="Pallet">Pallet</option>
                            <option value="Carton">Carton</option>
                            <option value="Case">Case</option>
                            <option value="Pack">Pack</option>
                            <option value="Piece">Piece</option>
                            <option value="Pound">Pound</option>
                            <option value="Roll">Roll</option>
                            <option value="Bale">Bale</option>
                            <option value="Sheet">Sheet</option>
                            <option value="Yard">Yard</option>
                            <option value="Square Meter">Square Meter</option>
                            <option value="Centimetre">Centimetre</option>
                            <option value="Inch">Inch</option>
                            <option value="Feet">Feet</option>
                        </select>
                        <br/>
                        <small class="TA">Price US$0 = Price On Enquiry. </small>
                        <small class="TA" style={{color:"#E00000"}}>*If you like to provide a price, make sure your price is accurate and valid, 
                            otherwise you might not be able to post products in future.</small>
                    </div>
                    <div>
                        <div>
                            <span class="pre-h3021">Offer Quantity</span><br/>
                            <input type="text" onChange={(e) => setFormData({ ...formData, quantity: e.target.value})} />
                        </div>
                        <div>
                            <span class="pre-h3021">Minimum Order:</span><br/>
                            <input type="text" onChange={(e) => setFormData({ ...formData, minOrder: e.target.value})} placeholder="1" />
                        </div>
                    </div>
                    <div>
                        <span class="pre-h3021">Expiry Date:</span><br/>
                        <select name="expiry_date" onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value})}>
							<option value="7">7 days</option>
                            <option value="14">14 days</option>
                            <option value="21">21 days</option>
                            <option value="30">30 days</option>
                            <option value="60">60 days</option>
                            <option value="90">90 days</option>
							<option value="180">180 days</option>
                        </select>
                        <span>
                            <input type="checkbox" id="auto-re"/>
                            <label for="auto-re">Repost After Expiry</label>
                        </span><br/>
                        <small class="TA">Upgrade to Plan Plus for automatic reposting.</small>
                    </div>
                    <div>
                        <span class="pre-h3021">Additional Information/Description:</span><br/>
                        <textarea placeholder="any details you would like to include.." onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value})}></textarea><br/>
                        <small class="TA" style={{color:"#E00000"}}>No contact information including email or website addresses.</small>
                    </div>
                    <div>
                        <span class="pre-h3021">Product Keywords:</span><br/>
                        <input type="text" onChange={(e) => setFormData({ ...formData, keyword1: e.target.value})}/>
                        <input type="text" onChange={(e) => setFormData({ ...formData, keyword2: e.target.value})}/>
                        <input type="text" onChange={(e) => setFormData({ ...formData, keyword3: e.target.value})}/>
                    </div>
                    <div>
                        <label for="more003" onClick={() => setShowMore(!showMore)}>More Options</label>
                        <input type="checkbox" id="more003"/>
                        <label></label>
                    </div>
                    <hr class="HR" />
                    <div id="more-zd" class={showMore ? "show-message" : "hide-message"}>
                        <span class="pre-h3021">Payment Method:</span><br/>
                        <select name="payment_method" onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value})}>  
                            <option value="Telegraphic Transfer (T/T)">Telegraphic Transfer (T/T)</option>
                            <option value="Letter of Credit (L/C)">Letter of Credit (L/C)</option>
                            <option value="Cash/Cheque">Cash/Cheque</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Bank Draft">Bank Draft</option>
                            <option value="Escrow">Escrow</option>
                        </select><br/><br/>
                        <span class="pre-h3021">Stock Location:</span><br/>
                        <Countries onChange={(e) => setFormData({ ...formData, stockLocation: e.target.value})} />
                            <br/><br/>
                        <span class="pre-h3021">Delivery Lead Time:</span><br/>
                        <select onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value})}>
                            <option value="7 Days">7 Days</option>
                            <option value="14 Days">14 Days</option>
                            <option value="21 Days">21 Days</option>
                            <option value="30 Days">30 Days</option>
                        </select><br/><br/>
                        <span class="pre-h3021">Shipping Terms:</span><br/>
                        <select onChange={(e) => setFormData({ ...formData, shippingTerms: e.target.value})}>	
                            <option value="FOB (Free On Board)" selected="">FOB (Free On Board)</option>
							<option value="EXW (Ex Works)">EXW (Ex Works)</option>
                            <option value="FCA (Free Carrier)">FCA (Free Carrier)</option>
                            <option value="FAS (Free Alongside Ship)">FAS (Free Alongside Ship)</option>
                            <option value="CFR (Cost and Freight)">CFR (Cost and Freight)</option>
                            <option value="CFR (Cost and Freight)">CIF (Cost, Insurance and Freight)</option>
                            <option value="CPT (Carriage Paid To)">CPT (Carriage Paid To)</option>
                            <option value="CIP (Carriage and Insurance Paid To)">CIP (Carriage and Insurance Paid To)</option>
                            <option value="DAF (Delivered At Frontier)">DAF (Delivered At Frontier)</option>
                            <option value="DDU (Delivered Duty Unpaid)">DDU (Delivered Duty Unpaid)</option>
                            <option value="DDP (Delivered Duty paid)">DDP (Delivered Duty paid)</option>
                            <option value="DES (Delivered Ex Ship)">DES (Delivered Ex Ship)</option>
                            <option value="DEQ (Delivered Ex Quay, [Duty Paid])">DEQ (Delivered Ex Quay, [Duty Paid])</option>
                        </select>
                        <hr class="HR"/>
                    </div>
                    <div id="btn-next-21" class="TBT-23">
                        <button type="submit" onClick={() => setShow(!show)}>Save &amp; Add Picture</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default AddProduct;