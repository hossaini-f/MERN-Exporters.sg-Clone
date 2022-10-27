import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:3131"});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

/**
 * 
 * -Dashboard Private Routes 
 *  
 */
// Authentication
export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);

// Member Profile -> Dashboard
export const updatePhoto = (id, formData, options) => API.post(`/member/updatephoto/${id}`, formData, options);
export const getBasicInfo = (id) => API.get(`/member/getbasicinfo/${id}`);
export const getAdvanceInfo = (id) => API.get(`/member/getadvanceinfo/${id}`);
export const getInstantMessagingInfo = (id) => API.get(`/member/getinstantmessaginginfo/${id}`);
export const getAccountInfo = (id) => API.get(`/member/getaccountinfo/${id}`);
export const dailyEmailSubsUpdate = (id) => API.patch(`/member/updatedailysubs/${id}`);
// Adding Data -> Profile
export const addBasicInfo = (id, formData) => API.post(`/member/addbasicinfo/${id}`, formData);
export const addAdvanceInfo = (id, formData) => API.post(`/member/addadvanceinfo/${id}`, formData);
export const addInstantMessage = (id, formData) => API.post(`/member/addinstantmessage/${id}`, formData);
// Selling Products
export const getAllCategories = () => API.get('/selling/getallcategories');
export const getMemberSellingProducts = (id) => API.get(`/selling/getmembersellingproducts/${id}`);
export const addNewProductForSale = (id, formData) => API.post(`/selling/addproductforsale/${id}`, formData);
export const updateSellingProductInfo = (id, formData) => API.post(`/selling/updateproductinfo/${id}`, formData);
export const updateSellingProductImage = (id, formData, options) => API.post(`/selling/updatesellingimage/${id}`, formData, options);
export const removeAllSellingProducts = (memberId) => API.delete(`/selling/removeallsellingproducts/${memberId}`);
export const repostSellingProduct = (product, member) => API.patch(`/selling/repostproduct/${product}/${member}`);
export const repostAllExpiredSellingProducts = (profileId) => API.patch(`/selling/repostallproduct/${profileId}`);
export const searchSellingProduct = (profileId, query) => API.get(`/selling/search/${profileId}/${query}`);
export const searchMarket = (query) => API.get(`/selling/searchmarket/${query}`);
export const featureAllSelling = (profileId) => API.get(`/selling/featureallproducts/${profileId}`);
// Buying Products
export const addNewBuyingLead = (id, formData) => API.post(`/buying/addnewbuyinglead/${id}`, formData);
export const getAllBuyingLead = (id) => API.get(`/buying/getallbuyinglead/${id}`);
export const removeAllBuyinLeads = (id) => API.delete(`/buying/removeallbuyinleads/${id}`);
export const featureAllBuyingLeads = (profileId) => API.get(`/buying/featureallbuyingleads/${profileId}`);
export const getSingleBuyinglead = (id) => API.get(`/buying/getsinglebuyinglead/${id}`);
// Feeds
export const getMemberCategories = (id) => API.get(`/feeds/getmembercategories/${id}`);
export const removeMemberCategory = (id, cate) => API.delete(`/feeds/removemembercategory/${id}/${cate}`);
export const getAllCategory = () => API.get('/feeds/getallcategory');
export const addOneCategoryToMember = (id, cate) => API.get(`/feeds/addonecategory/${id}/${cate}`);
export const addMultipleCategory = (id, formData) => API.post(`/feeds/addmultiplecategory/${id}`, formData);
export const getFeedsBuyingLead = (id) => API.get(`/feeds/getallbuyingleads/${id}`);
export const getFeedsSelling = (id) => API.get(`/feeds/getallsellingproducts/${id}`);
export const getFeedsMember = (id) => API.get(`/feeds/getallmembers/${id}`);
// Inbox 
export const addNewContactList = (senderId, receiverId) => API.get(`/inbox/addcontactlist/${senderId}/${receiverId}`);
export const sendNewMessage = (formData) => API.post(`/inbox/sendnewmessage`, formData);
export const getAllMessages = (sender, receiver) => API.get(`/inbox/getmessages/${sender}/${receiver}`);
export const blockMember = (sender, receiver) => API.get(`/inbox/blockmember/${sender}/${receiver}`);
export const addTrustNetwork = (sender, receiver) => API.get(`/inbox/addtrustnetwork/${sender}/${receiver}`);
export const addReview = (formData) => API.post('/inbox/addreview', formData);
export const addReport = (formData) => API.post('/inbox/addreport', formData);
export const getMail = (id) => API.get(`/inbox/getmail/${id}`);
export const sendGetQuoteMessage = (formData) => API.post(`/inbox/sendgetqoutmessage`, formData);
export const getQuoteCreateAccount = (formData) => API.post('/inbox/getquotecreateaccount', formData);
/**
 * Public API Routes
 * 
 */
export const getHomeLatestProducts = () => API.get('/public/gethomelatestproducts');
export const getHomeFeaturedProducts = () => API.get('/public/gethomefeaturedproducts');
export const getHomeFeaturedMembers = () => API.get('/public/gethomefeaturedmembers');
export const getHomeLogs = () => API.get('/public/gethomelogs');
export const getHomeCategory = () => API.get('/public/gethomecategories');
export const getHomeToMember = () => API.get('/public/gethometopmember');
export const getItems = (category, type) => API.get(`/public/getitems/${category}/${type}`);
export const getItemsForCountry = (category, type, country) => API.get(`/public/getfiltereditems/${category}/${type}/${country}`);
export const getSingleProductInfo = (id) => API.get(`/public/getsingleproductinfo/${id}`);
