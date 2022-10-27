import db from '../../db.config.js';
import dotEnv from 'dotenv';
import moment from 'moment';

dotEnv.config();


// Get Home Latest Products
export const getHomeLatestProducts = async (req, res) => {

    try {
        // WHERE NOT selling.featured = 'Yes'
        const query = "SELECT sellings.image, sellings.price, sellings.model_desc, members.company from sellings "+
                      "JOIN members ON members.id = sellings.m_id "+
                      "ORDER BY sellings.createdAt DESC LIMIT 6";
        const latestProduct = await db.query(query);
        if(!latestProduct) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({latestProducts: latestProduct[0]});
        
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Get Home Featured Products
export const getHomeFeaturedProducts = async (req, res) => {

    try {
        // WHERE NOT selling.featured = 'No'
        const query = "SELECT sellings.image, sellings.price, sellings.model_desc, members.company from sellings "+
                      "JOIN members ON members.id = sellings.m_id "+
                      "ORDER BY sellings.createdAt DESC LIMIT 6";
        const featuredProduct = await db.query(query);
        if(!featuredProduct) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({featuredProducts: featuredProduct[0]});
        
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Get Home Featured Members
export const getHomeFeaturedMembers = async (req, res) => {

    try {
        // WHERE NOT members.featured = 'No'
        const query = "SELECT company_infos.logo, members.company from members "+
                      "JOIN company_infos ON members.id = company_infos.m_id "+
                      "ORDER BY members.createdAt DESC LIMIT 6";
        const featuredMembers = await db.query(query);
        if(!featuredMembers) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({featuredMembers: featuredMembers[0]});
        
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Get Home Logs
export const getHomeLogs = async (req, res) => {
    try {

        const query1 = "SELECT product_desc, createdAt, unit, quantity FROM buyings ORDER BY buyings.createdAt DESC LIMIT 10";
        const logsBuying = await db.query(query1);
        
        const query2 = "SELECT business_description, company, createdAt FROM members ORDER BY members.createdAt DESC LIMIT 4";
        const logsMember = await db.query(query2);
        
        if(!logsBuying) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({homeLogging: logsBuying[0], logsMember: logsMember[0]});
        
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Get Home Categories
export const getHomeCategories = async (req, res) => {
    try {

        const query = "SELECT category FROM categories ORDER BY categories.id DESC LIMIT 12";
        const category = await db.query(query);
        
        if(!category) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({homeCategory: category[0]});
        
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
export const getHomeTopMember = async (req, res) => {
    try {
        const query = "SELECT company_infos.logo, members.company from members "+
                      "JOIN company_infos ON members.id = company_infos.m_id "+
                      "ORDER BY members.createdAt DESC LIMIT 20";
        const member = await db.query(query);
        
        if(!member) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({homeTopMember: member[0]});
        
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Browse Category -> Get Items
export const getItems = async (req, res) => {
    const category = req.params.category;
    const type = req.params.type;
    try {
        // Fetching Buying Leads Data
        if(type === 'buying leads'){
            const buyingLeadsCategory = "SELECT * FROM buyings ORDER BY id DESC limit 20";
            const buyings = await db.query(buyingLeadsCategory);
            
            if(!buyings) return res.status(202).json({message: "Nothing Found."});
            
            return  res.status(200).json({data: buyings[0], type: "buyingleads"});

        }// Fetching Members Data
        else if(type==='members'){
            const membersCategory = "SELECT members.id, members.company, members.country, members.business_type, members.business_description, company_infos.logo FROM members "+
                                    "JOIN company_infos ON members.id = company_infos.m_id "+
                                    "JOIN member_categories ON members.id = member_categories.m_id "+
                                    "JOIN categories ON member_categories.cate_id = categories.id "+
                                    `WHERE categories.category LIKE '%${category}%' ORDER BY members.id DESC LIMIT 20`;
            const members = await db.query(membersCategory);
            // Get Contact list
            const contactList = "SELECT Distinct(receiver_id) FROM member_message";
            const cList = await db.query(contactList);
            
            if(!members) return res.status(202).json({message: "Nothing Found."});
            
            res.status(200).json({data: members[0], type: "members", contact: cList[0]});
            
        }// Fetching Products Data
        else{
            const sellingsCategory = "SELECT members.id, members.country, members.company,sellings.id as productId, sellings.cat_id, sellings.model_desc, sellings.price, sellings.min_order, sellings.image, sellings.shipping_terms, sellings.keyword1, sellings.keyword2, sellings.keyword3 FROM sellings "+
                                     "JOIN members ON members.id = sellings.m_id "+
                                     "JOIN categories ON categories.id = sellings.cat_id "+
                                     `WHERE categories.category LIKE '%${category}%' ORDER BY sellings.id DESC LIMIT 20`;
            const sellings = await db.query(sellingsCategory);
            
            if(!sellings) return res.status(202).json({message: "Nothing Found."});
            
            return res.status(200).json({data: sellings[0], type: "selling"});
        }
        

    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Get Items filtered by Country
export const getItemsForCountry = async (req, res) => {
    const category = req.params.category;
    const type = req.params.type;
    const country = req.params.country;
    try {
        // Fetching Buying Leads Data
        if(type === 'buying leads'){
            const buyingLeadsCategory = "SELECT * FROM buyings "+
                                        "JOIN members ON members.id = buyings.m_id "+
                                        `WHERE members.country LIKE '%${country}' ORDER BY buyings.id DESC LIMIT 20`;;
            const buyings = await db.query(buyingLeadsCategory);
            
            if(!buyings) return res.status(202).json({message: "Nothing Found."});
            
            return  res.status(200).json({data: buyings[0], type: "buyingleads"});

        }// Fetching Members Data
        else if(type==='members'){
            const membersCategory = "SELECT members.id, members.company, members.country, members.business_type, members.business_description, company_infos.logo FROM members "+
                                    "JOIN company_infos ON members.id = company_infos.m_id "+
                                    "JOIN member_categories ON members.id = member_categories.m_id "+
                                    "JOIN categories ON member_categories.cate_id = categories.id "+
                                    `WHERE categories.category LIKE '%${category}%' AND members.country LIKE '%${country}' ORDER BY members.id DESC LIMIT 20`;
            const members = await db.query(membersCategory);
            // Get Contact list
            const contactList = "SELECT Distinct(receiver_id) FROM member_message";
            const cList = await db.query(contactList);
            
            if(!members) return res.status(202).json({message: "Nothing Found."});
            
            res.status(200).json({data: members[0], type: "members", contact: cList[0]});
            
        }// Fetching Products Data
        else{
            const sellingsCategory = "SELECT members.id, members.country, members.company,sellings.id as productId, sellings.cat_id, sellings.model_desc, sellings.price, sellings.min_order, sellings.image, sellings.shipping_terms, sellings.keyword1, sellings.keyword2, sellings.keyword3 FROM sellings "+
                                     "JOIN members ON members.id = sellings.m_id "+
                                     "JOIN categories ON categories.id = sellings.cat_id "+
                                     `WHERE categories.category LIKE '%${category}%' AND members.country LIKE '%${country}' ORDER BY sellings.id DESC LIMIT 20`;
            const sellings = await db.query(sellingsCategory);
            
            if(!sellings) return res.status(202).json({message: "Nothing Found."});
            
            return res.status(200).json({data: sellings[0], type: "selling"});
        }
        

    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Get Single Product Info
export const getSingleProductInfo = async (req, res) => {
    const productId = req.params.id;

    try {
        // Getting Product Information
        const sellingProduct = "SELECT * FROM sellings "+
                                "JOIN categories ON sellings.cat_id = categories.id "+
                                `WHERE sellings.id = ${productId} LIMIT 1`;
        const sell = await db.query(sellingProduct);

        // Getting Member Information
        const member = "SELECT members.id, members.country,members.company, members.business_description, company_infos.logo FROM members "+
                        "JOIN sellings ON sellings.m_id = members.id "+
                        "JOIN company_infos ON members.id = company_infos.m_id "+
                        `WHERE sellings.id = ${productId} LIMIT 1`;
        const memberInfo = await db.query(member);

        // Getting Member Reviews
        const reviews = "SELECT company_infos.logo, member_review.comments, member_review.createdAt, members.company FROM member_review "+
                        "JOIN members ON member_review.m_id = members.id "+
                        "JOIN company_infos ON company_infos.m_id = member_review.rater_id "+
                        `WHERE member_review.rater_id = ${sell[0][0].m_id} LIMIT 7`;
        const memberReivews = await db.query(reviews);
        
        if(!sell) return res.status(202).json({message: "Nothing Found."});
        
        return res.status(200).json({product: sell[0], member: memberInfo[0], review: memberReivews[0]});

    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}