import { BUYINGLEAD, SINGLEBUYINGLEAD } from '../../constants/v1/actionTypes';

const buyingReducer = (state = { allBuyingLead: null, singleBuyingLead: null }, action) => {
    switch (action.type) {
        case BUYINGLEAD:
            return {...state, allBuyingLead: action?.data};
        case SINGLEBUYINGLEAD:
            return {...state, singleBuyingLead: action?.data}
        default:
            return state;
    }
};

export default buyingReducer;