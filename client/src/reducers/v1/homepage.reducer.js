import { HOMELATESTPRODUCTS, HOMEFEATUREDPRODUCTS, HOMEFEATUREDMEMBER, HOMELOGS, HOMECATEGORY, HOMETOPMEMBER } from '../../constants/v1/actionTypes';

const homeReducer = (state = { latestProducts: null, featuredProducts: null, featuredMember: null, homeCategory: null, homeTopMember: null }, action) => {
    switch (action.type) {
        case HOMELATESTPRODUCTS:
            return {...state, latestProducts: action?.data};
        case HOMEFEATUREDPRODUCTS:
            return { ...state, featuredProducts: action?.data}
        case HOMEFEATUREDMEMBER:
            return { ...state, featuredMember: action?.data}
        case HOMELOGS:
            return { ...state, homeLogs: action?.data}
        case HOMECATEGORY:
            return { ...state, homeCategory: action?.data}
        case HOMETOPMEMBER:
            return { ...state, homeTopMember: action?.data}
        default:
            return state;
    }
};

export default homeReducer;