import {GETCATEGORIES, SELLINGPRODUCTS, SEARCHMARKET} from '../../constants/v1/actionTypes';
import * as api from '../../api/v1/index.js';

/*
*
*   SELLING PRODUCTS ACTIONS
*
*/
// Get All Categories 
export const getCategories = () => async(dispatch) => {
    try {
        const { data } = await api.getAllCategories();
        
        dispatch({type: GETCATEGORIES, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Get All Selling Products for Member
export const getSellingProducts = (id) => async(dispatch) => {
    try {
        const { data } = await api.getMemberSellingProducts(id);
        
        dispatch({type: SELLINGPRODUCTS, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Add New Product for Sale
export const addNewProduct = (id, formData) => async(dispatch) => {
    try {
        const { data } = await api.addNewProductForSale(id, formData);
        
        dispatch({type: SELLINGPRODUCTS, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Update Product
export const updateSellingProduct = (id, formData, options) => async(dispatch) => {
    try {
        const { data } = await api.updateSellingProductInfo(id, formData, options);

        dispatch({type: SELLINGPRODUCTS, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Update Selling Image 
export const updateSellingProductImage = (id, formData, options) => async(dispatch) => {
    try {
        const { data } = await api.updateSellingProductImage(id, formData, options);

        dispatch({type: SELLINGPRODUCTS, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Remove All Products
export const removeAllSellingProducts = (memberId) => async(dispatch) => {
    try {
        const { data } = await api.removeAllSellingProducts(memberId);
        dispatch({type: SELLINGPRODUCTS, data});
    } catch (error) {   
        console.log(error.message);
    }
}
// Repost Selling Products
export const respotSellingProduct = (productId, memberId) => async(dispatch) => {
    try {
        const { data } = await api.repostSellingProduct(productId, memberId);

        dispatch({type: SELLINGPRODUCTS, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Repost All Expired Selling Products
export const repostSellingAll = (profileId) => async(dispatch) => {
    try {
        const { data } = await api.repostAllExpiredSellingProducts(profileId);

        dispatch({type: SELLINGPRODUCTS, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Search a Selling Product
export const searchSelling = (profileId, query) => async(dispatch) => {
    try {
        const { data } = await api.searchSellingProduct(profileId, query);

        dispatch({type: SELLINGPRODUCTS, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Search Market
export const searchMarket = (query) => async(dispatch) => {
    try {
        const { data } = await api.searchMarket(query);

        dispatch({type: SEARCHMARKET, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Feature All Products
export const featureAllProduct = (profileId) => async(dispatch) => {
    try {
        const { data } = await api.featureAllSelling(profileId);

        dispatch({type: SELLINGPRODUCTS, data});
    } catch (error) {
        console.log(error.message);
    }
}