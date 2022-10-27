import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../statics/searchbar/style.css';
import Search from '../statics/searchbar/images/search.png';
import Category from '../statics/searchbar/images/category.png';
import Note from '../statics/searchbar/images/note.png';


const DownHeader = () => {
    const [activeClass, setActiveClass] = useState(false);
    const isAuth = JSON.parse(localStorage.getItem('profile'));
    return (
        <div class="bottom-nav">
            <div class="b-n-title">Source Globally, Sell Globally.</div>
            <div class="search-form">
                <form>
                    <select class="select-item">
                        <option>Products</option>
                        <option>Members</option>
                        <option>Buying Leads</option>
                    </select>
                    <div id="input-wrap">
                        <input type="text" class="input-search" placeholder="Search..."/>
                    </div>
                    <div class="search-button">
                        <button type="button" id="search-btn"><img src={Search} /></button>
                    </div>
                    
                <div class="categories" onClick={() => setActiveClass(!activeClass)}>
                    <img src={Category} />
                    <div class="category-options">
                        <ul>
                            <li class="category-value"><a>Categories</a>
                                <ul class={activeClass ? 'active' : ''}>
                                    <li><Link to={{pathname:"/category/products", search:"?type=products&_c=Antibiotics"}}>Antibiotics</Link></li>
                                    <li><Link to={{pathname:"/category/products", search:"?type=products&_c=Cold Cures"}}>Cold Cures</Link></li>
                                    <li><Link to={{pathname:"/category/products", search:"?type=products&_c=Antibacterials"}}>Antibacterials</Link></li>
                                    <li><Link to={{pathname:"/category/products", search:"?type=products&_c=Laxatives"}}>Laxatives</Link></li>
                                    <li><Link to={{pathname:"/category/products", search:"?type=products&_c=Hormones"}}>Hormones</Link></li>
                                    <li><Link to={{pathname:"/category/products", search:"?type=products&_c=Medical machines"}}>Medical machines &amp; equipment’s </Link></li>
                                    <li><Link to={{pathname:"/category/products", search:"?type=products&_c=Sex Hormones (Female)"}}>Sex Hormones (Female)</Link></li>
                                    <li><Link to={{pathname:"/category/products", search:"?type=products&_c=Sex Hormones (Male)"}}>Sex Hormones (Male)</Link></li>
                                    <li><Link to={{pathname:"/category/products", search:"?type=products&_c=Decongestants"}}>Decongestants</Link></li>
                                    <li><Link to="/browse-categories">See All Categories</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                </form>
                <div class="qoute">
                    <img src={Note} />
                    <div class="quote-btn">
                        <ul>
                            <li class="category-value">
                                {isAuth
                                ?
                                    <Link to="/user/buying">Get Quotes</Link>
                                :
                                    <Link to="/get-quotation">Get Quotes</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default DownHeader;