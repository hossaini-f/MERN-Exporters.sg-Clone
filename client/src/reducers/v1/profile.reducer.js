import { UPDATE, ERROR, BASICINFO, ADVANCEINFO, INSTANTMESSAGING, ACCOUNTINFO } from '../../constants/v1/actionTypes';

const profileReducer = (state = { profileData: null, basicInfo: null, advanceInfo: null, accountInfo: null, instatntMessagingInfo: null, errorMsg: 'none' }, action) => {
    switch (action.type) {
        case ERROR:
            return {...state, errorMsg: action?.data.message[0].msg};
        case BASICINFO:
            return { ...state, basicInfo: action?.data};
        case ADVANCEINFO:
            return { ...state, advanceInfo: action?.data};
        case INSTANTMESSAGING:
            return { ...state, instantMessagingInfo: action?.data};
        case ACCOUNTINFO:
            return { ...state, accountInfo: action?.data};
        default:
            return state;
    }
};

export default profileReducer;