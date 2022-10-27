import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Countries from '../shared/countries';
import {updateSellingProduct, updateSellingProductImage} from '../../../../actions/v1/selling.products';
import './statics/edit.css';

const EditProduct = (props) => {
   
    const [show, setShow] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const dispatch = useDispatch();
    
    const fetchData = useSelector((state) => state.Selling.allSellingProducts.sellingProduct.find((p) => p.id === props.id));
    
    const initialData = {
        productId: fetchData.id,
        productDescription: fetchData.model_desc,
        sku: fetchData.sku_no,
        productType: fetchData.product_type,
        price: fetchData.price,
        unit: fetchData.unit,
        quantity: fetchData.quantity,
        minOrder: fetchData.min_order,
        expiryDate: fetchData.expiry_date,
        additionalInfo: fetchData.additional_info,
        keyword1: fetchData.keyword1,
        keyword2: fetchData.keyword2,
        keyword3: fetchData.keyword3,
        paymentMethod: fetchData.payment_method,
        shippingTerms: fetchData.shipping_terms,
        stockLocation: fetchData.stock_location,
        deliveryTime: fetchData.delivery_time,
        category: fetchData.cat_id,
        image: fetchData.image
    }
    const [formData, setFormData] = useState(initialData);
    const [file, setFile] = useState({file: null});
    const profileId = JSON.parse(localStorage.getItem('profile')).result.id;
    const [uploadedSize, setUploadedSize] = useState('0');
    const [fileSize, setFileSize] = useState('0');
    const [uploadedPercent, setUploadedPercent] = useState('0');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSellingProduct(profileId, formData));
    }

    useEffect((e) => {
        const options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                const {loaded, total} = progressEvent;
                const fileSizeInMegaBytes = (total / (1024 * 1024)).toFixed(2);
                const fileLoadedInMegaBytes = (loaded / (1024 * 1024)).toFixed(2);

                let percent = Math.floor((loaded * 100) / total);
                setFileSize(fileSizeInMegaBytes)
                setUploadedSize(fileLoadedInMegaBytes)
                setUploadedPercent(percent)
                // console.log(`${fileLoadedInMegaBytes}MB of ${fileSizeInMegaBytes}MB | ${percent}%`);
            }
        };
        const image = new FormData();
        image.append('file', file.file);
        
        if(file.file !== null){
            dispatch(updateSellingProductImage(fetchData.id, image, options));
        }else{
            console.log("null")
        }
   
    },[file])
    
    return (
        <>
            <div id="edit-zcf350" class={show ? "show-message" : "hide-message"}></div>
            <div id="edit-container-xfl54" class={show ? "show-message" : "hide-message"}>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td>Edit Product</td>
                            <td><div onClick={() => setShow(!show)}>X</div></td>
                        </tr>
                    </tbody>
                </table>
                <div id="edit-form-conaslcte34">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div><img src={fetchData.image} alt="" /></div>
                            <div>
                                <span>
                                    Click <b>Browse</b> to find picture in your computer.<br/>
                                    (<b>Not more than 2MB</b> file size, white background is prefered)
                                </span><br/>
                                <input type="file" name="image" id="file" onChange={(e) => setFile({...file, file: e.target.files[0]})}/>
                                <label for="file">Browse</label>
                                {uploadedPercent > 0 
                                ?
                                    <>
                                    <div style={{
                                        fontFamily:"verdana",color:"#666", 
                                        fontSize:"12px",
                                        marginTop:"20px",
                                        }}>{ uploadedPercent === 100 ? <span style={{color:'green'}}> Uploaded </span> : "Uploading..."}</div>
                                    <div style={{
                                        backgroundColor:"#079", 
                                        fontFamily:"verdana",color:"#fff", 
                                        fontSize:"12px",
                                        marginTop:"2px",
                                        padding:"5px"
                                        }}>
                                        {uploadedSize}MB of {fileSize}MB &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {uploadedPercent}%
                                    </div>
                                    </>
                                    :
                                    null
                                }
                            </div>
                            
                                
                        </div>

                        <div id="prdesc021-sg">
                            <div class="in-mp23" style={{padding:"0px",display:"block",width:"100%",marginLeft:"0px"}}>
                                <span class="pre-h3021">Product Description:</span><br/>
                                <input type="text" placeholder={formData.productDescription} onChange={(e) => setFormData({...formData, productDescription: e.target.value})} /><br/>
                            </div>
                            <div class="in-mp23">
                                <span class="pre-h3021">Stock Keeping Unit (SKU) / Model No.:</span><br/>
                                <input type="text" placeholder={formData.sku} onChange={(e) => setFormData({...formData, sku: e.target.value})} /><br/>
                            </div>
                            <div>
                                <span class="pre-h3021">Product Type:</span><br style={{marginBottom: "7px"}}/>
                                <input type="radio" id="normal" name="type"  checked/>
                                <label for="normal">Normal</label>
                                <input type="radio" id="on-sale" name="type" />
                                <label for="on-sale">On Sale</label>
                            </div>
                            <div>
                                <span class="pre-h3021">Product Category:</span><br style={{marginBottom: "7px"}}/>
                                <span class="pre-x921">Adhesives and Sealants</span>&nbsp;&nbsp;
                                {/* <span id="btn-zc90">Change</span><br /> */}
                                <input type="checkbox" name="join" id="join" />
                            </div>
                            <div>
                                <span class="pre-h3021">Unit Price:</span><br style={{marginBottom: "7px"}}/>
                                <span class="TA">US$</span>
                                <input type="text" placeholder={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})}/>
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
                            </div>
                            <div style={{width:"400px"}}>
                                <div></div>
                                <div style={{marginLeft:"-220px",marginRight:"15px"}}>
                                    <span class="pre-h3021">Offer Quantity</span><br/>
                                    <input type="text" placeholder={formData.quantity} onChange={(e) => setFormData({...formData, quantity: e.target.value})} />
                                </div>
                                <div style={{width:"600px"}}>
                                    <span class="pre-h3021">Minimum Order:</span><br/>
                                    <input type="text" placeholder={formData.minOrder} onChange={(e) => setFormData({...formData, minOrder: e.target.value})} />
                                </div>
                            </div>
                            <div>
                                <span class="pre-h3021">Expiry Date:</span><br/>
                                <select name="expiry_date" onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}>
                                    <option value="7">7 days</option>
                                    <option value="14">14 days</option>
                                    <option value="21">21 days</option>
                                    <option value="30">30 days</option>
                                    <option value="60">60 days</option>
                                    <option value="90">90 days</option>
                                    <option value="180" selected="">180 days</option>
                                </select>
                                <span>
                                    <input type="checkbox" id="auto-re"/>
                                    {/* <label for="auto-re">Repost After Expiry</label> */}
                                </span><br/>
                                {/* <small class="TA">Upgrade to Plan Plus for automatic reposting.</small> */}
                            </div>
                            <div>
                                <span class="pre-h3021">Additional Information/Description:</span><br/>
                                <textarea placeholder={formData.additionalInfo} onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}></textarea><br/>
                                <small class="TA" style={{color:"#E00000"}}>No contact information including email or website addresses.</small>
                            </div>
                            <div>
                                <span class="pre-h3021">Product Keywords:</span><br/>
                                <input type="text" placeholder={formData.keyword1} onChange={(e) => setFormData({...formData, keyword1: e.target.value})} />
                                <input type="text" placeholder={formData.keyword2} onChange={(e) => setFormData({...formData, keyword2: e.target.value})}/>
                                <input type="text" placeholder={formData.keyword3} onChange={(e) => setFormData({...formData, keyword3: e.target.value})}/>
                            </div>
                            <div>
                                <label for="more003" onClick={() => setShowMore(!showMore)}>More Options</label>
                                <input type="checkbox" id="more003"/>
                                <label></label>
                            </div>
                            <hr class="HR" />
                            <div id="more-zd" class={showMore ? "show-message" : "hide-message"}>
                                <span class="pre-h3021">Payment Method:</span><br/>
                                <select name="payment_method" onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}>  
                                    <option value="3">Telegraphic Transfer (T/T)</option>
                                    <option value="5">Letter of Credit (L/C)</option>
                                    <option value="1">Cash/Cheque</option>
                                    <option value="2">Credit Card</option>
                                    <option value="4">Bank Draft</option>
                                    <option value="6">Escrow</option>
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
                                    <option value="FOB (Free On Board)">FOB (Free On Board)</option>
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
                                <br/><br/>
                                <hr class="HR"/>
                            </div>
                            <div id="btn-next-21" class="TBT-23">
                                <button onClick={() => setShow(!show)} type="submit">Save Changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default EditProduct;