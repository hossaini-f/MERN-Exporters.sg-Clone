import express from 'express';
import {
        getMemberCategories,
        removeMemberCategory,
        getAllCategories,
        addCategoryByOne,
        addMultipleCategory,
        feedsBuyingLeads,
        feedsSelling,
        feedsMember
    } from '../../controller/v1/feeds.js';

const router = express.Router();

// Feeds Routes
/**
 * Managing Categories
 */
router.get('/getmembercategories/:id', getMemberCategories);
router.delete('/removemembercategory/:id/:category', removeMemberCategory);
router.get('/getallcategory', getAllCategories);
router.get('/addonecategory/:id/:cateId', addCategoryByOne);
router.post('/addmultiplecategory/:id', addMultipleCategory);
/**
 * Getting Feeds 1. Buying Leads
 *               2. Selling Products
 *               3. Members 
 */ 
router.get('/getallbuyingleads/:id', feedsBuyingLeads);
router.get('/getallsellingproducts/:id', feedsSelling);
router.get('/getallmembers/:id', feedsMember);

export default router;
