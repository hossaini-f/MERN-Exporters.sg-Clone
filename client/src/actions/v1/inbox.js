import {SENDMESSAGE, GETEMAIL} from '../../constants/v1/actionTypes';
import * as api from '../../api/v1/index.js';

/*
*
*   MEMBER INBOX ACTIONS
*
*/
// Add New Contact List 
export const addNewContact = (senderId, receiverId) => async(dispatch) => {
    try {
        const { data } = await api.addNewContactList(senderId, receiverId);
    } catch (error) {
        console.log(error.message);
    }
} 
// Send Message
export const sendMessage = (formData) => async(dispatch) => {
    try {
        const { data } = await api.sendNewMessage(formData);

        dispatch({type: SENDMESSAGE, data })
    } catch (error) {
        console.log(error.message)
    }
}
// Get Messages
export const getMessages = (sender, receiver) => async(dispatch) => {
    try {
        const { data } = await api.getAllMessages(sender, receiver);

        dispatch({type: SENDMESSAGE, data})
    } catch (error) {
        console.log(error.message)
    }
}
// Block Member
export const blockMember = (sender, receiver) => async(dispatch) => {
    try {
        const { data } = await api.blockMember(sender, receiver);

        dispatch({type: SENDMESSAGE, data});
    } catch (error) {
        console.log(error.message);
    }
}
// Add Trust Network
export const addNewTrustNetwork = (sender, receiver) => async(dispatch) => {
    try {
        await api.addTrustNetwork(sender, receiver);

    } catch (error) {
        console.log(error.message);
    }
}
// Add Review
export const addNewReview = (formData) => async(dispatch) => {
    try {
         await api.addReview(formData);

    } catch (error) {
        console.log(error.message)        
    }
}
// Add New Report
export const addNewReport = (formData) => async(dispatch) => {
    try {
        await api.addReport(formData);
    } catch (error) {
        console.log(error.message);
    }
}
// Get Email
export const getEmail = (id) => async(dispatch) => {
    try {
        const { data } = await api.getMail(id);

        dispatch({type: GETEMAIL, data});
    } catch (error) {
        console.log(error.message)
    }
}
// Send Message [Get Quotation]
export const sendGetQuote = (formData) => async(dispatch) => {
    try {
        const { data } = await api.sendGetQuoteMessage(formData);

        dispatch({type: SENDMESSAGE, data })
    } catch (error) {
        console.log(error.message)
    }
}
// Send Message [GEt Quotatoin and Create Account]
export const getQuoteandCreateAccount = (formData) => async(dispatch) => {
    try {
        const { data } = await api.getQuoteCreateAccount(formData);

    } catch (error) {
        console.log(error.message)
    }
}