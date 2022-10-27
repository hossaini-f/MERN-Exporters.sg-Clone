import {FEEDSBUYINGLEAD, FEEDSSELLING, ALLMEMBERCATEGORIES, FEEDSALLCATEGORY, FEEDSMEMBER} from '../../constants/v1/actionTypes';
import * as api from '../../api/v1/index.js';

/*
*
*   FEEDS INFORMATION ACTIONS
*
*/
// Get All Member Categories
export const getMemberCategory = (id) => async(dispatch) => {
    try {
        const { data } = await api.getMemberCategories(id);

        dispatch({type: ALLMEMBERCATEGORIES, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Remove Selected Category
export const removeSelectedCategory = (id, category) => async(dispatch) => {
    try {
        const { data } = await api.removeMemberCategory(id, category);
        
        dispatch({type: ALLMEMBERCATEGORIES, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Get All Category
export const getAllCategories = () => async(dispatch) => {
    try {
        const { data } = await api.getAllCategory();

        dispatch({type: FEEDSALLCATEGORY, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Join Single Category
export const joinOneCategory = (id,cateId) => async(dispatch) => {
    try {
        const { data } = await api.addOneCategoryToMember(id, cateId);

        dispatch({type: ALLMEMBERCATEGORIES, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Join Multiple Category 
export const addMultipleCategory = (id, formData) => async(dispatch) => {
    try {
        const { data } = await api.addMultipleCategory(id, formData);

        dispatch({type: ALLMEMBERCATEGORIES, data});
    } catch (error) {
        console.log(error.message)
    }
}
// Get All Buying Lead
export const getFeedsBuyingLeads = (id) => async(dispatch) => {
    try {
        const { data } = await api.getFeedsBuyingLead(id);
        
        dispatch({type: FEEDSBUYINGLEAD, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Get All Selling Products
export const getFeedsSellings = (id) => async(dispatch) => {
    try {
        const { data } = await api.getFeedsSelling(id);

        dispatch({type: FEEDSSELLING, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Get All Members
export const getFeedsMember = (id) => async(dispatch) => {
    try {
        const { data } = await api.getFeedsMember(id);

        dispatch({type: FEEDSMEMBER, data});
    } catch (error) {
        console.log(error.message);
    }
}