import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import './statics/style.css';

import {
    getMemberCategory,
    removeSelectedCategory,
    getAllCategories,
    joinOneCategory,
    addMultipleCategory
    } from '../../../../actions/v1/feeds';

const ManageCategory = () => {
    const [ showOvelay, setShowOverlay ] = useState(false);
    const [ showSearch, setShowSearch ] = useState(false);
    const [ showSelect, setShowSelect ] = useState(false);
    const [ showParent, setShowParent ] = useState(false);
    const [ title1, setTitle1 ] = useState('');
    const [ title2, setTitle2 ] = useState('');

    const hideOverlay = () => {
        setShowOverlay(false);
        setShowParent(false);
        setShowSearch(false);
        setShowSelect(false);
        setTitle1("");
        setTitle2("");
        // window.location.reload();

    }
    const showSearchBox = () => {
        setShowParent(true);
        setShowSearch(true);
        setShowSelect(false);
        setTitle1("Enter a relevant product keyword:");
        setTitle2("Select recommended categories to join:");
    }
    const showSelectOptions = () => {
        setShowParent(true);
        setShowSearch(false);
        setShowSelect(true);
        setShowJoin(false);
        setTitle1("Select Category.");
        setTitle2("Select categories to join:");
    }
    const [showJoin, setShowJoin] = useState(false);
    const [query, setQuery] = useState('none');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(query !== 'none'){
            setShowJoin(!showJoin);
        }
    }
    // Fetch Data From API
    const dispatch = useDispatch();
    const fetchData = useSelector((state) => state.Feeds);
    const profileId = JSON.parse(localStorage.getItem('profile')).result.id;

    const [category, setCategory] = useState([]);
    const [allCategory, setAllCategory] = useState([]);

    useEffect(() => {
        dispatch(getMemberCategory(profileId));
        dispatch(getAllCategories());
    },[]);
    
    useEffect(() => {
        if(fetchData.feedsCategory){
            setCategory(fetchData.feedsCategory.memberCategories)
        }else{
            setCategory('none')
        }
        if(fetchData.feedsAllCategory){
            setAllCategory(fetchData.feedsAllCategory.category)
        }else{
            setAllCategory('none')
        }
    });
    //  Remove  a Category
    const removeCategory = (selectedCategory) => {
        if(selectedCategory){
            dispatch(removeSelectedCategory(profileId, selectedCategory));
            window.location.reload();
        }
    }
    // Join a Category
    const joinSingleCategory = (categoryId) => {
        
        dispatch(joinOneCategory(profileId, categoryId));
        window.location.reload();
    }
    // select a Category
    const [cateId, setCateId] = useState(0);
    const selectSingleCategory = () => {
        if(cateId !== 0){
            dispatch(joinOneCategory(profileId, cateId));
            window.location.reload();
        }
    }
    // Add Multiple Categories Values[id]
    const [checkedCategory, setCheckedCategory] = useState([]);
    let selectedCategory = [];
    const joinMultipleCategory = (e, cate) => {
        var isChecked = e.target.checked;
        if(isChecked){
            checkedCategory.push(e.target.value);
        }else{
            checkedCategory.pop(cate);
        }
        selectedCategory = checkedCategory.filter(function(elem, pos) {
            return checkedCategory.indexOf(elem) === pos;
        });

        
    }
    // Join Multipe Categories
    const newMultipleCategory = () => {

        if(selectedCategory.length > 0){
            dispatch(addMultipleCategory(profileId, selectedCategory));
            console.log(selectedCategory)
            // window.location.reload();
        }
    }
    // Search Category
    const [queryCategory, setQueryCategory] = useState('none');
    const changeLocation = (e) => {
        e.preventDefault();
        if(queryCategory !== 'none' && queryCategory !== ''){
            window.location = '/browse-categories';
        }
    }
    return(
        <>
            <div id="feeds-manage-category-container">
                <div id="feed-top-container">
                    <span>Category ({category.length > 0 && category !== 'none' && category.length}/14)</span>
                    <div>
                        <form onSubmit={changeLocation}>
                            <input type="text" placeholder="Search..." onChange={(e)=> setQueryCategory(e.target.value)}/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div id="fmc-btns">
                    <div>
                        <Link to="/user/feeds"><i class="fa fa-angle-left"></i> <span>Back</span></Link>
                    </div>
                    <div onClick={() => setShowOverlay(true)}>
                        <a><i class="fa fa-plus"></i> <span>Join Category</span></a>
                    </div>
                </div>
                <div id="fmc-Jcategory-container">
                    <div class="fmc-title">You are currently in these categories:</div>
                    <div id="fmc-c-scrollbar">
                        {category.length > 0 && category !== "none" 
                        ?
                            category.map((c) => (
                                <div class="fmc-categories">
                                    <div>{c.category} <span>(ID:{c.cate_id * 321 + 1000})</span></div>
                                    <div onClick={() => {removeCategory(c.cate_id);}}><i class="fa fa-trash"></i> <span>Remove</span></div>
                                </div>
                            ))
                        :
                            null
                        }
                    </div>
                    <div id="fmc-info-al">
                        <p>
                            Joining a category provides a single view on the latest happenings in your feeds.
                        </p>
                        <p>
                            When you join a category, you will also receive email alerts and newsletters from that category.
                            <Link to="/user/member-profile">Manage Email Subscriptions</Link>
                        </p>
                    </div><br/>
                    <hr class="HR"/>
                    <br/>
                    <div class="fmc-title">Categories you might be interested:</div>
                    <div id="fmc-category-sug">
                        {allCategory.length > 0 && allCategory !== 'none'
                            ?
                                allCategory.slice(23,32).map((c) => (
                                    <div class="join-ct">
                                        <div><a>{c.category}</a><span>(ID:{c.id * 321 + 1000})</span></div>
                                        <div onClick={() => joinSingleCategory(c.id)}> <span>Join</span></div>
                                    </div>
                                ))
                            :
                            null
                        }
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
            {/* Popup Container -> Manage Categories */}
            <div id="feeds-popup-mc-overlay" class={ showOvelay ? "x-show-s" : "x-hide-h"}></div>
            <div id="feeds-popup-mc" class={ showOvelay ? "x-show-s" : "x-hide-h"}>
                <div id="fpmc-01">
                    <span>Join New Category</span>
                    <span onClick={hideOverlay}>X</span>
                </div>
                <div id="fpmc-02">
                    <span class="fpmc-title">Step 1: Find relevant categories by:</span><br/>
                    <div>
                        <div onClick={showSearchBox}>Search</div>
                        <span>or</span>
                        <div onClick={showSelectOptions}>Browse Categories</div>
                    </div>
                </div>
                <div id="fpmc-03" class={ showParent ? "x-show-s":"x-hide-h"}>
                    <span class="fpmc-title">Step 2: {title1}</span>
                    <div>
                        <form onSubmit={handleSubmit} class={ showSearch ? "x-show-s":"x-hide-h"}>
                            <input type="text" onChange={(e)=> setQuery(e.target.value)}/>
                            <button type="submit">Search</button>
                        </form>
                        <select onChange={(e) => setCateId(e.target.value)} class={ showSelect ? "x-show-s":"x-hide-h"}>
                            {allCategory.length > 0 && allCategory !== 'none'
                            ?
                                allCategory.map((c) => (
                                    <option value={c.id}>{c.category}</option>
                                ))
                            :
                            null
                            }
                        </select>
                    </div>
                    <div id="fpmc-cate-res" class={showJoin ? "x-show-s" : "x-hide-h"}>
                        <span>{title2}</span>
                        <div>
                            <form>
                                {allCategory.length > 0 && allCategory !== 'none'
                                ?
                                    allCategory.slice(20,40).map((c) => (
                                        <div>
                                            <input type="checkbox" id={c.category} value={c.id} onChange={(e) => joinMultipleCategory(e, c.id)}/>
                                            <label for={c.category}>{c.category}</label>
                                        </div>
                                    ))
                                :
                                null
                                }
                                
                            </form>
                        </div><br/>
                        <span>
                            Note: For each category added, you will receive <b>daily email 
                            trade alerts</b> and <b>weekly email newsletter</b>. You can change email 
                            subscriptions any time.
                        </span>
                    </div>
                </div>
                <div id="fpmc-botns3" class={ showJoin || showSelect ? "x-show-s":"x-hide-h"}>
                    <span class="fpmc-title">Step 3: Click to join selected categories.</span>
                    <div>
                        {showJoin 
                        ?
                            <a onClick={newMultipleCategory}>Join</a>
                        :
                            <a onClick={selectSingleCategory}>Join</a>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}
export default ManageCategory;