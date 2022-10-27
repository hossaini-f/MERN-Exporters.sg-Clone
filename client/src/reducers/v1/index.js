import { combineReducers } from 'redux';
// Import Reducers
import Auth from './auth.reducer';
import Profile from './profile.reducer';
import Selling from './selling.reducer';
import Buying from './buying.reducer';
import Feeds from './feeds.reducer';
import HomePage from './homepage.reducer';
import Public from './public.reducer';
import Inbox from './inbox.reducer';

export default combineReducers({
    Auth,
    Profile,
    Selling,
    Buying,
    Feeds,
    HomePage,
    Public,
    Inbox
});