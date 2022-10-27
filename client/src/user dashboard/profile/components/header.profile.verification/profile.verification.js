import React from 'react';
import './statics/style.css';
import Active from './statics/images/active.png';
import Approved from './statics/images/approved.png';
import Popular from './statics/images/popular.png';
import PCompleted from './statics/images/profile_complete.png';
import Responsive from './statics/images/response.png';

const ProfileVerification = () => {
    return(
        <>
        <div id="profile-verification-container">
            <div class="p-v-wrapper">
                <div class="p-v-icon" style={{backgroundImage: "url("+ Approved +")"}}></div>
                <div class="p-v-txt"><a>Appproved</a></div>
            </div>
            <div class="p-v-wrapper">
                <div class="p-v-icon" style={{backgroundImage: "url("+ Popular +")"}}></div>
                <div class="p-v-txt"><a>Popular</a></div>
            </div>
            <div class="p-v-wrapper">
                <div class="p-v-icon" style={{backgroundImage: "url("+ Active +")"}}></div>
                <div class="p-v-txt"><a>Active</a></div>
            </div>
            <div class="p-v-wrapper">
                <div class="p-v-icon" style={{backgroundImage: "url("+ Responsive +")"}}></div>
                <div class="p-v-txt"><a>Responsive</a></div>
            </div>
            <div class="p-v-wrapper">
                <div class="p-v-icon" style={{backgroundImage: "url("+ PCompleted +")"}}></div>
                <div class="p-v-txt"><a>Completed Profile</a></div>
            </div>
             
        </div>
        </>
    )
}
export default ProfileVerification;