import {BASICINFO, ADVANCEINFO, INSTANTMESSAGING, ACCOUNTINFO} from '../../constants/v1/actionTypes';
import * as api from '../../api/v1/index.js';

// UPDATE PROFILE PICTURE
export const updateProfile = (id, formData, options) => async (dispatch) => {
    try {
        const {data}   = await api.updatePhoto(id, formData, options);

        dispatch({type: ADVANCEINFO, data});
    } catch (error) {
        console.log(error);
    }
}
// Get Basic Info
export const getBasicInfo = (id) => async (dispatch) => {
    try {
        const { data } = await api.getBasicInfo(id);
        
        dispatch({type: BASICINFO, data });
    } catch (error) {
        console.log(error);
    }
}
// Get Basic Info
export const getAdvanceInfo = (id) => async (dispatch) => {
    try {
        const { data } = await api.getAdvanceInfo(id);

        dispatch({type: ADVANCEINFO, data });
    } catch (error) {
        console.log(error);
    }
}
// Get Instatn Messaging Info
export const getInstantMessaging = (id) => async (dispatch) => {
    try {
        const { data } = await api.getInstantMessagingInfo(id);

        dispatch({type: INSTANTMESSAGING, data });
    } catch (error) {
        console.log(error);
    }
}
// Get Account Info
export const getAccount = (id) => async (dispatch) => {
    try {
        const { data } = await api.getAccountInfo(id);

        dispatch({type: ACCOUNTINFO, data });
    } catch (error) {
        console.log(error);
    }
}
// Update Email Subscription
export const updateEmailSubs = (id) => async (dispatch) => {
    try {
        const { data } = await api.dailyEmailSubsUpdate(id);

        dispatch({type: ACCOUNTINFO, data });
    } catch (error) {
        console.log(error);
    }
}

/*
*    Adding Data for Profile
*/ 
// Add Basic Info
export const addBasicInfo = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.addBasicInfo(id, formData);

        dispatch({type: BASICINFO, data });
    } catch (error) {
        console.log(error);
    }
} 
// Add Advance Info
export const addAdvanceInfo = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.addAdvanceInfo(id, formData);

        dispatch({type: ADVANCEINFO, data });
    } catch (error) {
        console.log(error);
    }
}
// Add Instant Message Info
export const addInstantMessageLink = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.addInstantMessage(id, formData);

        dispatch({type: INSTANTMESSAGING, data });
    } catch (error) {
        console.log(error);
    }
}

