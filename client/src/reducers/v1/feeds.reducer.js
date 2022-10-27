import { FEEDSBUYINGLEAD, FEEDSSELLING, ALLMEMBERCATEGORIES, FEEDSALLCATEGORY, FEEDSMEMBER } from '../../constants/v1/actionTypes';

const feedsReducer = (state = { feedsBuyingLeads: null, feedsSelling: null, feedsCategory: null, feedsMember: null}, action) => {
    switch (action.type) {
        case FEEDSBUYINGLEAD:
            return {...state, feedsBuyingLeads: action?.data};
        case FEEDSSELLING:
            return { ...state, feedsSelling: action?.data};
        case ALLMEMBERCATEGORIES:
            return { ...state, feedsCategory: action?.data};
        case FEEDSALLCATEGORY:
            return { ...state, feedsAllCategory: action?.data};
        case FEEDSMEMBER:
            return { ...state, feedsMember: action?.data};
        default:
            return state;
    }
};

export default feedsReducer;