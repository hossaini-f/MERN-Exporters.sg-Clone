import {BUYINGLEAD, SINGLEBUYINGLEAD} from '../../constants/v1/actionTypes';
import * as api from '../../api/v1/index.js';

/*
*
*   BUYING PRODUCTS ACTIONS
*
*/
// Add New Buying Lead 
export const addNewBuyingLead = (id, formData) => async(dispatch) => {
    try {
        const { data } = await api.addNewBuyingLead(id, formData);
        
        dispatch({type: BUYINGLEAD, data});
    } catch (error) {
        console.log(error.message);
    }
} 
// Get All Buying Lead
export const getAllBuyingLead = (id) => async(dispatch) => {
    try {
        const { data } = await api.getAllBuyingLead(id);
        
        dispatch({type: BUYINGLEAD, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Remove All
export const removeAllBuyinLeads = (id) => async(dispatch) => {
    try {
        const { data } = await api.removeAllBuyinLeads(id);

        dispatch({type: BUYINGLEAD, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Feature All Products
export const featureAllProducts = (id) => async(dispatch) => {
    try {
        const { data } = await api.featureAllBuyingLeads(id);
        
        dispatch({type: BUYINGLEAD, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Get Single Buying Lead 
export const getSingleBuyinglead = (id) => async(dispatch) => {
    try {
        const { data } = await api.getSingleBuyinglead(id);

        dispatch({type: SINGLEBUYINGLEAD, data});
    } catch (error) {
        console.log(error.message);
    }
}