import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import ResearchP from '../shared/search';
import AddProduct from '../shared/add.product';
import EditProduct from './edit.product';
import './statics/style.css';
import moment from 'moment';
import Loader from '../../../../components/v1/loader/loader';

import {getSellingProducts, 
        removeAllSellingProducts, 
        respotSellingProduct, 
        repostSellingAll, 
        searchSelling,
        featureAllProduct} from '../../../../actions/v1/selling.products';

const SellingComp = () => {
    const [showResearch, setShowReaserch] = useState(false);
    const [show, setShow] = useState(false);
    const [addProduct, setAddProduct] = useState(false);
    const [editProduct, setEditProduct] = useState(false);
    const [productId, setProductId] = useState(0);
    const dispatch = useDispatch();
    
    const profileId = JSON.parse(localStorage.getItem('profile')).result.id;
    const fetchData = useSelector((state) => state.Selling);

    // Pagination 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);
    
    useEffect(() => {
        setLoading(true);
        // Calling API to Fetch Data
        dispatch(getSellingProducts(profileId));
    },[])
    

    useEffect(() => {

        if(fetchData.allSellingProducts){
            setProducts(fetchData.allSellingProducts.sellingProduct);
            setLoading(false)
        }else{
            setProducts('none')
        }
    });
    
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(products.length / productsPerPage); i++){
        pageNumber.push(i);
    }
    const removeAll = () => {
        dispatch(removeAllSellingProducts(profileId));
    }
    const repostProduct = () => {
        if(productId !== 0){
            dispatch(respotSellingProduct(productId,profileId));
            window.location.reload();
        }
    }
    const repostAll = () => {
        dispatch(repostSellingAll(profileId));
        window.location.reload();
    }
    const [searchQuery, setSearchQuery] = useState('');
    const searchProduct = (e) => {
        e.preventDefault();
        dispatch(searchSelling(profileId, searchQuery));
        console.log(searchQuery)
    }
    const featureAll = (e) => {      
        dispatch(featureAllProduct(profileId));
        window.location.reload();
    }
    return(
        <>
        <div id="f-selling-container">
            <div id="f-selling-wrapper">
                <div>Selling</div>
                <div id="f-selling-btns">
                    <div>
                        <div onClick={() => setAddProduct(!addProduct)}><i class="fa fa-plus"></i> &nbsp;Add Product</div>
                        <div onClick={repostAll}>Repost All</div>
                        <div onClick={() => setShow(!show)}>Visitors</div>
                        <div>Bulk Upload</div>
                        <div onClick={() => setShowReaserch(!showResearch)}>Research</div>
                        <div>My Showroom</div>
                        <div><Link to="/user/selling-orders" style={{color:"#565656",textDecoration:"none"}}>Orders</Link></div>
                        <div onClick={featureAll}>Feature All</div>
                    </div>
                    <div id="f-selling-remove" onClick={removeAll}><i class="fa fa-trash"></i> &nbsp;Remove</div>
                </div>
                <div id="f-selling-search">
                    <div>
                        <form onSubmit={searchProduct}>
                            <input type="text" id="f-seaarch" placeholder="Search Products" onChange={(e) => setSearchQuery(e.target.value)}/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div>
                        <select>
                            <option>By Latest</option>
                            <option>By Views</option>
                        </select>
                    </div>

                </div>
                {loading && <div class="loader-j"> <Loader/> </div>}
                { products.length > 0 && currentProducts !== "none" ? currentProducts.map((sell) => (                                        
                    <>
                    <div class="selling-pro-324xlwo" key={sell.id} style={{marginBottom:"4px"}}>
                        <div onClick={() => {setEditProduct(!editProduct); setProductId(sell.id)}}>
                            <div style={{display:"flex", alignItems:"center"}}>
                                 <img src={sell.image} alt="" width="50px" /> 
                            </div>
                            <div>
                                <div>
                                    <div class="h901">
                                        {moment(new Date()).format("YYYY MM DD") === sell.expiry_date 
                                            ? <span class="expired">Expired</span> 
                                            : null
                                        }
                                        {sell.model_desc}</div>
                                    <div class="Hz09-1">US$<span style={{color:"#565656"}}>{sell.price}</span></div>
                                </div>
                                <div>
                                    <div class="Hz09-1">{sell.category}</div>
                                    <div class="Hz09-1">{moment(sell.createdAt).format("D MMM")}</div>
                                </div>
                            </div>
                        </div>
                        {moment(new Date()).format("YYYY MM DD") == sell.expiry_date 
                            ? 
                            <div onClick={()=>{setProductId(sell.id); repostProduct()}}>
                                <div style={{marginTop: "8px"}}>Repost</div>
                            </div> 
                            : 
                            <div>
                                <div><b>0</b></div>
                                <span>Views</span>
                            </div>
                        }
                    </div>
                    </>
                )):
                null
                }
                { products.length === 0 && <div id="f-selling-empty">You do not have any product listed. Add a product now.</div> }
            </div>
            { products !== 'none' &&
                <div class="sell-pageination">
                    <ul>
                        {pageNumber.map((number)=> (
                            <li key={number}>
                                <a href="#" onClick={() => setCurrentPage(number)}>{number}</a>
                            </li>    
                        ))}
                    </ul>
                </div>
            }
        </div>
        <div id="selling-bl90wrapper" class={show ? "show-message" : "hide-message"}></div>
        <div id="selling-blcontainer" class={show ? "show-message" : "hide-message"}>
            <table cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr>
                        <td>Showroom Visitors for the last 30 days</td>
                        <td><div onClick={() => setShow(!show)}>X</div></td>
                    </tr>
                </tbody>
            </table>
            <div id="v1993-co">
                <div id="visitor-container120">
                    <div>
                        <div class="ALO90">views</div>
                        <div style={{fontSize:"26px",fontFamily:"verdana",color:"#565656"}}><b>0</b></div>
                        <div class="ALO90" style={{color:"green",fontSize:"12px"}}>(Boost performance by featuring products)</div>
                    </div>
                    <div>
                        <div class="ALO90">views by Country</div>
                        <br/><br/><br/><br/><br/>
                        <div class="ALO90">Information not available yet.</div>
                    </div>
                </div>
                <div>
                    <div class="ALO90">views by Date</div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <div class="ALO90">Information not available yet.</div>
                </div>
            </div>
            <div id="bottom-v12A">
                <div class="ALO90">Members that viewed your products</div>
                <div class="ALO90"><b>No member views yet.</b></div>
            </div>
        </div>
        {/* Research Components */}
        {showResearch && <ResearchP />}
        {addProduct && <AddProduct />}
        {editProduct && <EditProduct id={productId}/>}
        
        </>
    )
}
export default SellingComp;