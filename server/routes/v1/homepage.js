import express from 'express';
import {
        getHomeLatestProducts,
        getHomeFeaturedProducts,
        getHomeFeaturedMembers,
        getHomeLogs,
        getHomeCategories,
        getHomeTopMember,
        getItems,
        getItemsForCountry,
        getSingleProductInfo
    } from '../../controller/v1/homepage.js';

const router = express.Router();

// Home Page Routes
router.get('/gethomelatestproducts', getHomeLatestProducts);
router.get('/gethomefeaturedproducts', getHomeFeaturedProducts);
router.get('/gethomefeaturedmembers', getHomeFeaturedMembers);
router.get('/gethomelogs', getHomeLogs);
router.get('/gethomecategories', getHomeCategories);
router.get('/gethometopmember', getHomeTopMember);
router.get('/getitems/:category/:type', getItems);
router.get('/getfiltereditems/:category/:type/:country', getItemsForCountry);
router.get('/getsingleproductinfo/:id', getSingleProductInfo);

export default router;