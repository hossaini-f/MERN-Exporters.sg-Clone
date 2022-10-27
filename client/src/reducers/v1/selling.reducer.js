import { GETCATEGORIES, SELLINGPRODUCTS, SEARCHMARKET } from '../../constants/v1/actionTypes';

const sellingReducer = (state = { allCategories: null, allSellingProducts: null, searchResult: 'none'}, action) => {
    switch (action.type) {
        case GETCATEGORIES:
            return {...state, allCategories: action?.data};
        case SELLINGPRODUCTS:
            return { ...state, allSellingProducts: action?.data}
        case SEARCHMARKET:
            return { ...state, searchResult: action?.data}
        default:
            return state;
    }
};

export default sellingReducer;