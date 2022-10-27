import {AUTH, ERROR, LOGOUT} from '../../constants/v1/actionTypes';
import * as api from '../../api/v1/index.js';
import crypto from 'crypto-js';
import Cookies from 'js-cookie';

export const signIn = (formData, history, remember) => async (dispatch) => {
    try {
        const {data, statusText}   = await api.signIn(formData);
        
        if(statusText === "Accepted"){
            dispatch({type: ERROR, data});
        }else{
            if(remember){
                const uuid = crypto.AES.encrypt(formData.username, '909090');
                const pwdid = crypto.AES.encrypt(formData.password, '909090');
                Cookies.set("uuid", uuid, { path: "/signin"})
                Cookies.set("pwdid", pwdid, {path: "/signin"})
            }
            dispatch({type: AUTH, data});
            history.push('/user/feeds');
        }

    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        const { data, statusText } = await api.signUp(formData);
        
        if(statusText === "Accepted"){
            dispatch({type: ERROR, data});
            console.log(data);
        }else{
            dispatch({type: AUTH, data});
            history.push('/user/feeds');
        }

    } catch (error) {
        console.log(error);
    }
}

export const logout = (history) => async (dispatch) => {
    dispatch({type: LOGOUT});
    history.push('/');
}

export const clearError = () => async (dispatch) => {
    const data = {
                    "message": [
                        {
                            "msg": "none"
                        }
                    ]
                };
    dispatch({type: ERROR, data});
}