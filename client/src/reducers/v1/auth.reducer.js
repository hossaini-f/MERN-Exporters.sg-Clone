import { AUTH, ERROR, LOGOUT } from '../../constants/v1/actionTypes';

const authReducer = (state = { authData: null, errorMsg: 'none' }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
            return { ...state, authData: action?.data}
        case ERROR:
            return {...state, errorMsg: action?.data.message[0].msg};
        case LOGOUT:
            localStorage.removeItem('profile');
            return state;
        default:
            return state;
    }
};

export default authReducer;