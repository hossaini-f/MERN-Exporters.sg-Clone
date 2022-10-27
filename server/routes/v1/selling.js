import express from 'express';
import {
        getAllCategories,
        addProductForSale,
        getMemberSellingProducts,
        updateSellingProduct,
        updateProductImage,
        removeAll,
        repostProduct,
        repostAll,
        search,
        searchMarket,
        featureAll
    } from '../../controller/v1/selling.js';

const router = express.Router();

// Selling Products Routes
router.get('/getallcategories', getAllCategories);
router.get('/getmembersellingproducts/:id', getMemberSellingProducts);
router.post('/addproductforsale/:id', addProductForSale);
router.post('/updateproductinfo/:id', updateSellingProduct);
router.post('/updatesellingimage/:id', updateProductImage);
router.delete('/removeallsellingproducts/:id', removeAll);
router.patch('/repostproduct/:product/:member', repostProduct);
router.patch('/repostallproduct/:id', repostAll);
router.get('/search/:id/:query', search);
router.get('/searchmarket/:query', searchMarket);
router.get('/featureallproducts/:id', featureAll);

export default router;
