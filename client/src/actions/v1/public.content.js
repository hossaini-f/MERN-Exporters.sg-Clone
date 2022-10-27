import {HOMELATESTPRODUCTS,
        HOMEFEATUREDPRODUCTS, 
        HOMEFEATUREDMEMBER,
        HOMELOGS,
        HOMECATEGORY,
        HOMETOPMEMBER,
        BROWSECATEGORY,
        SINGLEPRODUCTINFO
    } from '../../constants/v1/actionTypes';
import * as api from '../../api/v1/index.js';

/*
*
*   BUYING PRODUCTS ACTIONS
*
*/
// Home Latest Products 
export const homeLatestSellingProducts = () => async(dispatch) => {
    try {
        const { data } = await api.getHomeLatestProducts();
        
        dispatch({type: HOMELATESTPRODUCTS, data});
    } catch (error) {
        console.log(error.message);
    }
} 

// Get Home Featured Products
export const homeFeaturedSellingProducts = () => async(dispatch) => {
    try {
        const { data } = await api.getHomeFeaturedProducts();

        dispatch({type: HOMEFEATUREDPRODUCTS, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Get Home Featured Members
export const homeFeaturedMembers = () => async(dispatch) => {
    try {
        const  { data }  = await api.getHomeFeaturedMembers();

        dispatch({type: HOMEFEATUREDMEMBER, data});
    } catch (error) {
        console.log(error.message)
    }
}
// Get Home Logs
export const homeLogsData = () => async(dispatch) => {
    try {
        const { data } = await api.getHomeLogs();

        dispatch({type: HOMELOGS, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Get Home Categories
export const getHomeCategories = () => async(dispatch) => {
    try {
        const { data } = await api.getHomeCategory();

        dispatch({type: HOMECATEGORY, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Get Top Rated Members
export const getHomeTopMember = () => async(dispatch) => {
    try {
        const { data } = await api.getHomeToMember();

        dispatch({type: HOMETOPMEMBER, data});
    } catch (error) {
        console.log(error.message)
    }
}
// Get PRODUCTS, MEMBERS, BUYINGLEADS [browse-category-page]
export const getItems = (category, type) => async(dispatch) => {
    try {
        const { data } = await api.getItems(category, type);

        dispatch({type: BROWSECATEGORY, data});
    } catch (error) {
        console.log(error.message)
    }
}
// Get [filter by country] PRODUCTS, MEMBERS, BUYINGLEADS [browse-category-page] 
export const getItemsForCountry = (category, type, country) => async(dispatch) => {
    try {
        const { data } = await api.getItemsForCountry(category, type, country);

        dispatch({type: BROWSECATEGORY, data})
    } catch (error) {
        console.log(error.message)
    }
}
// Get Single Product Info [Ask for Quotation] 
export const getSingleProductInfo = (productId) => async(dispatch) => {
    try {
        const { data } = await api.getSingleProductInfo(productId);

        dispatch({type: SINGLEPRODUCTINFO, data})
    } catch (error) {
        console.log(error.message)
    }
}