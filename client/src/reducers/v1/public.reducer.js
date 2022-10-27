import { BROWSECATEGORY, SINGLEPRODUCTINFO } from '../../constants/v1/actionTypes';

const publicReducer = (state = {browseItems: null, singleProductInfo: null}, action) => {
    switch (action.type) {
        case BROWSECATEGORY:
            return {...state, browseItems: action?.data};
        case SINGLEPRODUCTINFO:
            return {...state, singleProductInfo: action?.data}
        default:
            return state;
    }
};

export default publicReducer;