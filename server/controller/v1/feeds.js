import db from '../../db.config.js';
import moment from 'moment';
import dotEnv from 'dotenv';
import Member from '../../models/Members.js';
import Buying from '../../models/Buying.js';
import Selling from '../../models/Selling.js';

dotEnv.config();

// Get Member Categories
export const getMemberCategories =  async (req, res) => {
    const id = req.params.id;

    try {
        const categories = await db.query(`SELECT DISTINCT category, cate_id from categories JOIN member_categories ON categories.id = member_categories.cate_id  where member_categories.m_id = ${id}`);
        if(!categories) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({memberCategories: categories[0]});
    } catch (error) {
        res.json({Error: error.message});
    }
}
// Remove Member Category
export const removeMemberCategory = async (req, res) => {
    const id = req.params.id;
    const cateId = req.params.category;

    try {
        const dlt = await db.query(`DELETE FROM member_categories WHERE cate_id='${cateId}' AND m_id = '${id}'`);
        const categories = await db.query(`SELECT category from categories JOIN member_categories ON member_categories.cate_id = categories.id where member_categories.m_id = ${id}`);
        if(!categories) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({memberCategories: categories[0]});

    } catch (error) {
        res.json({Error: error.message});
    }

}
// Get All Category
export const getAllCategories = async (req, res) => {
    try {
        const category = await db.query("SELECT category, id from categories");
        if(!category) return res.status(202).json({message: "Nothing Found"});

        res.status(200).json({category: category[0]});
    } catch (error) {
        res.json({Error: error.message});
    }
}
// Add one Category to Member
export const addCategoryByOne = async (req, res) => {
    const id = req.params.id;
    const catId = req.params.cateId;
    try {
        const isExist = await db.query(`SELECT * FROM member_categories WHERE cate_id='${catId}' AND m_id = '${id}'`);
        
        if(isExist[0].length === 0){
            const joinCate = await db.query(`INSERT INTO member_categories (m_id, cate_id) VALUES ('${id}', '${catId}')`);
        }
        
        const categories = await db.query(`SELECT category from categories JOIN member_categories ON member_categories.cate_id = categories.id where member_categories.m_id = ${id}`);
        if(!categories) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({memberCategories: categories[0]});

    } catch (error) {
        res.json({Error: error.message});
    }
}
// Add Multiple Category
export const addMultipleCategory = async(req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        for(var i=0; i < data.length; i++){
            const isExist = await db.query(`SELECT * FROM member_categories WHERE cate_id='${data[i]}' AND m_id = '${id}'`);
            
            if(isExist[0].length === 0){
                await db.query(`INSERT INTO member_categories (m_id, cate_id) VALUES ('${id}', '${data[i]}')`);
            }
        }
        const categories = await db.query(`SELECT category from categories JOIN member_categories ON member_categories.cate_id = categories.id where member_categories.m_id = ${id}`);
        if(!categories) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({memberCategories: categories[0]});
    } catch (error) {
        res.json({Error: error.message});
    }
}
// Get All Buing Leads DISTINCT in Member Categories
export const feedsBuyingLeads = async (req, res) => {
    const id = req.params.id;
    try {
        // WHERE NOT buyings.m_id = ${id}
        const query = "SELECT categories.category, buyings.product_desc, buyings.delivery_location, buyings.unit, buyings.quantity, buyings.featured, buyings.createdAt FROM buyings "+
                      "JOIN member_categories ON member_categories.cate_id = buyings.cat_id "+
                      `JOIN categories ON categories.id = member_categories.cate_id AND member_categories.m_id= ${id} `+
                      "JOIN members ON member_categories.m_id = members.id "+
                      `ORDER BY buyings.featured ASC LIMIT 20`;
        const allBuyingLeads = await db.query(query);
        if(!allBuyingLeads) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({feedsBuying: allBuyingLeads[0].reverse()});
        
    } catch (error) {
        res.status(202).json({message: error});
    }
}
// Get All Sellings DISTINCT in Member Categories
export const feedsSelling = async (req, res) => {
    const id = req.params.id;
    try {
        // WHERE NOT sellings.m_id = ${id}
        const query = "SELECT categories.category, sellings.model_desc, sellings.price, sellings.additional_info,sellings.image, sellings.featured, sellings.createdAt FROM sellings "+
                      "JOIN member_categories ON member_categories.cate_id = sellings.cat_id "+
                      `JOIN categories ON categories.id = member_categories.cate_id AND member_categories.m_id= ${id} `+
                      "JOIN members ON member_categories.m_id = members.id "+
                      ` ORDER BY sellings.featured ASC LIMIT 20`;
        const allSellings = await db.query(query);
        if(!allSellings) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({feedsSellings: allSellings[0].reverse()});
        
    } catch (error) {
        res.status(202).json({message: error});
    }
}
// Get All Feeds Member in Member Categories
export const feedsMember = async (req, res) => {
    const id = req.params.id;
    try {
        // WHERE NOT members.id = ${id}
        const query = "SELECT categories.category, members.country, members.createdAt, members.company FROM members "+
                      "JOIN member_categories ON member_categories.m_id = members.id "+
                      `JOIN categories ON categories.id = member_categories.cate_id AND member_categories.m_id= ${id}`;
                      `ORDER BY members.id DESC`;
                      
        const allMembers = await db.query(query);
        if(!allMembers) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({feedMembers: allMembers[0].reverse()});
        
    } catch (error) {
        res.status(202).json({message: error});
    } 
}