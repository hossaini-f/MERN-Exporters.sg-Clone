import express from 'express';
import {check} from 'express-validator';
import auth from '../../middleware/auth.js';
import {
    updateProfilePhoto, 
    getBasicInfo, 
    getAdvanceInfo, 
    getInstantMessagingInfo,
    getAccountInfo,
    updateAccountEmailSubs,
    addBasicInfo,
    addAdvanceInfo,
    addInstantMessage
} from '../../controller/v1/profile.js';

const router = express.Router();

// Update Profile Image
router.post('/updatephoto/:id', updateProfilePhoto);
router.get('/getbasicinfo/:id', getBasicInfo);
router.get('/getadvanceinfo/:id', getAdvanceInfo);
router.get('/getinstantmessaginginfo/:id', getInstantMessagingInfo);
router.get('/getaccountinfo/:id', getAccountInfo);
router.patch('/updatedailysubs/:id', updateAccountEmailSubs);
router.post('/addbasicinfo/:id', addBasicInfo);
router.post('/addadvanceinfo/:id', addAdvanceInfo);
router.post('/addinstantmessage/:id', addInstantMessage);

export default router;
