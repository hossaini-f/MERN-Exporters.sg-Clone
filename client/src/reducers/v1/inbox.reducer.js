import { SENDMESSAGE, GETEMAIL } from '../../constants/v1/actionTypes';

const inboxReducer = (state = { sentMessage: null, mail: 'none'}, action) => {
    switch (action.type) {
        case SENDMESSAGE:
            return {...state, sentMessage: action?.data};
        case GETEMAIL:
            return {...state, mail: action?.data}
        default:
            return state;
    }
};

export default inboxReducer;