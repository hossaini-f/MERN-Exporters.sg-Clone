import db from '../../db.config.js';
import dotEnv from 'dotenv';
import Member from '../../models/Members.js';
import Categories from '../../models/Category.js';
import Selling from '../../models/Selling.js';
import moment from 'moment';

dotEnv.config();


// Get All Categories
export const getAllCategories = async (req, res) => {
    
    try {
        const allCategories = await db.query("SELECT id, category from categories");
        if(!allCategories) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({category: allCategories[0]});
        
    } catch (error) {
        res.status(202).json({message: error});
    }
}
// Get All Member Sellings
export const getMemberSellingProducts = async (req, res) => {
    const id = req.params.id;
    try {
        const allSelling = await db.query(`SELECT * from categories JOIN sellings ON sellings.cat_id = categories.id where sellings.m_id = ${id} ORDER BY sellings.id DESC`);
        if(!allSelling) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({sellingProduct: allSelling[0]});
        
    } catch (error) {
        res.status(202).json({message: error.message});
    }
}
// Add Product For Sale
export const addProductForSale = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const date = new Date();
    const expiration = moment(date).add(data.expiryDate, 'd').format('YYYY MM DD');
    try {
        const proudct = await Selling.create({
            model_desc: data.productDescription,
            sku_no: data.sku,
            product_type: data.productType,
            price: data.price,
            unit: data.unit,
            quantity: data.quantity,
            min_order: data.minOrder,
            expiry_date: expiration,
            additional_info: data.additionalInfo,
            keyword1: data.keyword1,
            keyword2: data.keyword2,
            keyword3: data.keyword3,
            payment_method: data.paymentMethod,
            shipping_terms: data.shippingTerms,
            stock_location: data.stockLocation,
            delivery_time: data.deliveryTime,
            image: "",
            m_id: id,
            cat_id: data.category
        });
        
        const allSelling = await db.query(`SELECT * from categories JOIN sellings ON sellings.cat_id = categories.id where sellings.m_id = ${id} ORDER BY sellings.id DESC`);
        if(!allSelling) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({sellingProduct: allSelling[0]});
        
    } catch (error) {
        console.log(error.message);
    }
}
// Update Product
export const updateSellingProduct = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    const date = new Date();
    const expiration = moment(date).add(data.expiryDate, 'd').format('YYYY MM DD');
    
    try {
        const product = await Selling.findOne({where: {id: data.productId}});
        
        product.model_desc = data.productDescription;
        product.sku_no = data.sku;
        product.product_type= data.productType;
        product.price = data.price;
        product.unit = data.unit;
        product.quantity = data.quantity;
        product.min_order = data.minOrder;
        product.expiry_date = expiration;
        product.additional_info = data.additionalInfo;
        product.keyword1 = data.keyword1;
        product.keyword2 = data.keyword2;
        product.keyword3 = data.keyword3;
        product.payment_method = data.paymentMethod;
        product.shipping_terms = data.shippingTerms;
        product.stock_location = data.stockLocation;
        product.delivery_time = data.deliveryTime;
        
        product.save();
        
        
        const allSelling = await db.query(`SELECT * from categories JOIN sellings ON sellings.cat_id = categories.id where sellings.m_id = ${id} ORDER BY sellings.id DESC`);
        if(!allSelling) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({sellingProduct: allSelling[0]});
        
    } catch (error) {
        console.log(error.message);
    }
}
// Update Product Image
export const updateProductImage =  async (req, res) =>  {
    const id = req.params.id;
    const productImage = req.files.file;
    const imageSize = productImage.size; // File Size in Bytes
    var fileSizeInMegabytes = imageSize / (1024*1024); // File Size in Mega Bytes
    
    // check if file is null
    if(productImage === null){
        res.status(401).json({message: "null"});
    }
    // check if file size is more than 2MB
    else if(fileSizeInMegabytes > 2){
        res.status(202).json({message: "File size is more than 2 Mega Bytes."});
    }
    // check if file type is [PNG, JPEG, JPG, GIF]
    else if(productImage.mimetype === "image/png" || productImage.mimetype === "image/jpg" ||
            productImage.mimetype === "image/jpeg" || productImage.mimetype === "image/gif"){
         
            try {
                const Product = await Selling.findOne({ where: { id: id } });
                // check if file already exist
                if(productImage.name === Product.logo){
                    return res.status(202).json({message: "Image already exist."});
                }
                const file = req.files.file;
                file.mv(`./uploads/selling/${file.name}`, err => {
                    if(err){
                        res.status(202).json({message: err + " <<Error uploading file."})
                    }
                });

                Product.image = process.env.SERVER_URL +'/uploads/selling/'+ file.name;
                await Product.save();
                
                const products = await Selling.findAll({where: {m_id: Product.m_id}});
                if(!products) return res.status(202).json({message: "Nothing Found."});
                
                res.status(200).json({sellingProduct: products});
                
            } catch (error) {
                res.status(500).json({message: error + "  >>something went wrong."});
            }
        }else{
            return res.status(202).json({message: "not a image file."});
        }
}
// Remove All Products 
export const removeAll = async (req, res) => {
    const id = req.params.id;
    try {
        const rows = await Selling.destroy({where: {m_id: id}});
        res.status(200).json({sellingProduct: []})
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Repost a Single Product 
export const repostProduct = async (req, res) => {
    const id = req.params.product;
    const member = req.params.member;

    try {
        const updateProduct = await Selling.findOne({where: {id: id}});
        
        updateProduct.expiry_date = moment(updateProduct.expiry_date).add(7, 'd').format('YYYY MM DD'); 
        
        updateProduct.save();

        const allSelling = await db.query(`SELECT * from categories JOIN sellings ON sellings.cat_id = categories.id where sellings.m_id = ${member} ORDER BY sellings.id DESC`);
        if(!allSelling) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({sellingProduct: allSelling[0]});

    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Repost All Expired Products
export const repostAll = async (req, res) => {
    const id = req.params.id;
    const date = new Date();
    const todayDate = moment(date).format('YYYY MM DD');
    const updateDate = moment(date).add(7, 'd').format('YYYY MM DD');
    
    try {
        const updateAllExpired = await db.query(`SELECT expiry_date from sellings where sellings.m_id = ${id} AND sellings.expiry_date = '${todayDate}'`);
        
        if(!updateAllExpired) return res.status(202).json({message: "Nothing Found."});
        
        for(var i=0; i < updateAllExpired[0].length; i++){
            await db.query(`UPDATE sellings set expiry_date = '${updateDate}' where sellings.m_id = ${id} AND sellings.expiry_date = '${todayDate}'`);
        }

        const allSelling = await db.query(`SELECT * from categories JOIN sellings ON sellings.cat_id = categories.id where sellings.m_id = ${id} ORDER BY sellings.id DESC`);
        if(!allSelling) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({sellingProduct: allSelling[0]});
        
        
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Search product
export const search = async (req, res) => {
    const id = req.params.id;
    const query = req.params.query;

    try {
        const allSelling = await db.query(`SELECT * from categories JOIN sellings ON sellings.cat_id = categories.id where sellings.m_id = ${id} AND model_desc LIKE '%${query}%' ORDER BY sellings.id DESC`);
        if(!allSelling) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({sellingProduct: allSelling[0]});

    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Search Market
export const searchMarket = async (req, res) => {
    const query = req.params.query;

    try {
        const marketResult = await db.query(`SELECT * from sellings  where sellings.model_desc LIKE '%${query}%' LIMIT 7`);
        if(!marketResult) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({market: marketResult[0]});
        
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Feature All Products
export const featureAll = async(req, res) => {
    const id = req.params.id;

    try {
        const isFeatured = await db.query(`SELECT featured from sellings where sellings.m_id = ${id} AND sellings.featured = 'No'`);
        
        if(!isFeatured) return res.status(202).json({message: "Nothing Found."});
        
        for(var i=0; i < isFeatured[0].length; i++){
            await db.query(`UPDATE sellings set featured = 'Yes' where sellings.m_id = ${id} AND sellings.featured = 'No'`);
        }

        const allSelling = await db.query(`SELECT * from categories JOIN sellings ON sellings.cat_id = categories.id where sellings.m_id = ${id} ORDER BY sellings.id DESC`);
        if(!allSelling) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({sellingProduct: allSelling[0]});
        
        
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}