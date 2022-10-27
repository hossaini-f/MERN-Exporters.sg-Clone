import db from '../../db.config.js';
import dotEnv from 'dotenv';
import Member from '../../models/Members.js';
import Buying from '../../models/Buying.js';

dotEnv.config();

// Get All Buing Leads
export const getAllBuyingLead = async (req, res) => {
    const id = req.params.id;
    try {
        const allBuyingLeads = await Buying.findAll({where: {m_id: id}, order: [['createdAt', 'DESC']]});
        if(!allBuyingLeads) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({buyingLead: allBuyingLeads});
        
    } catch (error) {
        res.status(202).json({message: error});
    }
}
// Add Product For Sale
export const addNewBuyingLead = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    
    try {
        const proudct = await Buying.create({
            product_desc: data.productDescription,
            quantity: data.quantity,
            unit: data.unit,
            reply_by: data.reply_by,
            purchase_type: data.purchase_type,
            price_per_unit: data.price,
            payment_method: data.paymentMethod,
            delivery_location: data.deliveryLocation,
            delivery_time: data.deliveryTime,
            shipping_terms: data.shippingTerms,
            additional_info: data.additionalInfo,
            m_id: id,
            category: data.category
        });
        
        const allBuyingLeads = await Buying.findAll({where: {m_id: id}, order: [['createdAt', 'DESC']]});
        if(!allBuyingLeads) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({buyingLead: allBuyingLeads});
        
    } catch (error) {
        console.log(error.message);
    }
}
// Remove All Buying Leads 
export const removeAllBuyingLeads = async (req, res) => {
    const id = req.params.id
    try {
        const rows = await Buying.destroy({where: {m_id: id}});
        res.status(200).json({buyingLead: []})
    } catch (error) {
        console.log(error);
    }
}
// Feaature All
export const featureAll = async (req, res) => {
    const id = req.params.id;

    try {
        const isFeatured = await db.query(`SELECT featured from buyings where buyings.m_id = ${id} AND buyings.featured = 'No'`);
        
        if(!isFeatured) return res.status(202).json({message: "Nothing Found."});
        
        for(var i=0; i < isFeatured[0].length; i++){
            await db.query(`UPDATE buyings set featured = 'Yes' where buyings.m_id = ${id} AND buyings.featured = 'No'`);
        }
        
        const allBuyingLeads = await db.query(`SELECT * from buyings where buyings.m_id = ${id} ORDER BY buyings.id DESC`);
        if(!allBuyingLeads) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({buyingLead: allBuyingLeads[0]});
        
        
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Get Single Buying Lead
export const getSingleBuyingLead = async (req, res) => {
    const id = req.params.id;

    try {

        const query = "SELECT * FROM buyings "+
                      "JOIN members ON buyings.m_id = members.id "+
                      `WHERE buyings.id = ${id} LIMIT 1`;

        const buying = await db.query(query)

        const query2 = "SELECT buyings.id, buyings.product_desc, members.country FROM buyings "+
                        "JOIN members ON buyings.m_id = members.id LIMIT 6";

        const allBuying = await db.query(query2)


        if(!buying) return res.status(202).json({message: "Noting Found"})

        return res.status(200).json({buying: buying[0], allBuyingSide: allBuying[0]})

    } catch (error) {
        res.status(500).json({message: error + " >>something went wrong."})
    }
}