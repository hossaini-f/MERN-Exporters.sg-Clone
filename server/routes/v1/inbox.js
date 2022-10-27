import express from 'express';
import {
    addContactList,
    sendNewMessage,
    getMessages,
    blockMember,
    addTrustNetwork,
    addNewReview,
    addNewReport,
    getEmail,
    sendGetQuoteMessage,
    getQuoteCreateAccount,
    generatePassword
    } from '../../controller/v1/inbox.js';

const router = express.Router();

// Member Inbox Routes
router.get('/addcontactlist/:sender/:receiver', addContactList);
router.post('/sendnewmessage', sendNewMessage);
router.get('/getmessages/:sender/:receiver', getMessages);
router.get('/blockmember/:sender/:receiver', blockMember);
router.get('/addTrustNetwork/:sender/:receiver', addTrustNetwork);
router.post('/addreview', addNewReview);
router.post('/addreport', addNewReport);
router.get('/getmail/:id', getEmail);
router.post('/sendgetqoutmessage', sendGetQuoteMessage);
router.post('/getquotecreateaccount', getQuoteCreateAccount);

export default router;
