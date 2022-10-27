import express from 'express';
import {
        addNewBuyingLead,
        getAllBuyingLead,
        removeAllBuyingLeads,
        featureAll,
        getSingleBuyingLead
    } from '../../controller/v1/buying.js';

const router = express.Router();

// Buying Products Routes
router.post('/addnewbuyinglead/:id', addNewBuyingLead);
router.get('/getallbuyinglead/:id', getAllBuyingLead);
router.delete('/removeallbuyinleads/:id', removeAllBuyingLeads);
router.get('/featureallbuyingleads/:id', featureAll);
router.get('/getsinglebuyinglead/:id', getSingleBuyingLead);

export default router;
