import React from 'react';
import {Route,Switch, BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './Protected.routes';
// importing components
// Pages Folder
import Home from './Pages/index';
import getQuotation from './Pages/getQuotation';
import BrowseCategories from './Pages/browse.categories';
import UserFProducts from './Pages/feature.your.products';
import AboutUsInfo from './Pages/about';
import ContactUs from './Pages/contact';
import Testimonial from './Pages/testimonial';
import TermsOfServices from './Pages/terms.services';
import PrivacyPolicy from './Pages/privacy.statement';
import BannerAdvertisment from './Pages/banner.ads';

// Filtered Categories
import FilteredProducts from './Pages/filter.product';
import AskForQuotationForm from './Pages/ask.quotation';
import SendMemberMessage from './Pages/send.message';
import BuyingLeadsQuotation from './Pages/send.quotation.bl';
import SingleProductInfoQuotation from './Pages/product.info.quotation';

// Auth Folder
import SignIn from './auth/signin/signin';
import SignUp from './auth/signup/signup';
import UpgradeUserAccount from './auth/upgrade.user/upgrade.user.account';
import UpgradePlanPlus from './auth/upgrade.user/plan.plus';
import UpgradePlanPremium from './auth/upgrade.user/plan.premium';

// User Profile
import Member from './Pages/members/member.profile';

// User Panel {Private - Restricted Routes}
import Feed from './user dashboard/panel/Pages/feed';
import ManageCategory from './user dashboard/panel/Pages/manage.categories';
import UserProfile from './user dashboard/panel/Pages/user.profile';
import Inbox from './user dashboard/panel/Pages/inbox';
import Buying from './user dashboard/panel/Pages/buy';
import Selling from './user dashboard/panel/Pages/sell';
import BroadcastMsg from './user dashboard/panel/Pages/broadcast.msg';
import BuyingOrder from './user dashboard/panel/Pages/buy.orders';
import SellingOrder from './user dashboard/panel/Pages/sell.orders';

const App = () => {
    return (
        <Router>
            <Switch>
                {/* Pages Routes */}
                <Route path="/" exact component={Home} />
                <Route path="/browse-categories" exact component={BrowseCategories} />
                <Route path="/featured-products" exact component={UserFProducts} />
                <Route path="/about-us" exact component={AboutUsInfo} />
                <Route path="/testimonial" exact component={Testimonial} />
                <Route path="/terms-of-services" exact component={TermsOfServices} />
                <Route path="/privacy-statement" exact component={PrivacyPolicy} />
                <Route path="/banner-ads" exact component={BannerAdvertisment} />
                <Route path="/get-quotation" exact component={getQuotation} />
                {/* Quotation Routes */}
                <Route path="/contact-us" exact component={ContactUs} />
                {/* FilteredPorductsCategories */}
                <Route path="/category/products" exact component={FilteredProducts} />
                {/* if not logged in */}
                <Route path="/ask-quotation" exact component={AskForQuotationForm} />
                <Route path="/single-product-info" exact component={SingleProductInfoQuotation} />
                <Route path="/send-quotation-bl" exact component={BuyingLeadsQuotation} />
                
                <Route path="/member-message" exact component={SendMemberMessage} />
                {/* Auth Routes */}
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/upgrade-membership" exact component={UpgradeUserAccount} />
                <Route path="/plan-plus" exact component={UpgradePlanPlus} />
                <Route path="/plan-premium" exact component={UpgradePlanPremium} />
                {/* User Dashboard */}
                <Route path="/profile" exact component={Member} />
                
                {/* Private Routes-> per user */}
                {/* Route Perfix -> user */}
                <ProtectedRoute path="/user/feeds" exact component={Feed} />
                <ProtectedRoute path="/user/manage-category" exact component={ManageCategory} />
                <ProtectedRoute path="/user/member-profile" exact component={UserProfile} />
                <ProtectedRoute path="/user/inbox" exact component={Inbox} />
                <ProtectedRoute path="/user/buying" exact component={Buying} />
                <ProtectedRoute path="/user/selling" exact component={Selling} />
                <ProtectedRoute path="/user/broadcast" exact component={BroadcastMsg} />
                <ProtectedRoute path="/user/buying-orders" exact component={BuyingOrder} />
                <ProtectedRoute path="/user/selling-orders" exact component={SellingOrder} />
                {/* Redirect all undefind paths */}
                <Route path="*" exact component={() => "404 Not Found."}/>
            </Switch>
        </Router>
    )
}

export default App;