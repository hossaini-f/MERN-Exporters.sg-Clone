import db from '../../db.config.js';
import dotEnv from 'dotenv';
import CompanyInfo from '../../models/CompanyInfo.js';
import Member from '../../models/Members.js';
import InstatnMessaging from '../../models/InstantMessage.js';
import Account from '../../models/Account.js';

dotEnv.config();
// Member Profile Photo
export const updateProfilePhoto =  async (req, res) =>  {
    const id = req.params.id;
    const profilePhoto = req.files.file;
    const imageSize = profilePhoto.size; // File Size in Bytes
    var fileSizeInMegabytes = imageSize / (1024*1024); // File Size in Mega Bytes
    
    // check if file is null
    if(profilePhoto === null){
        res.status(401).json({message: "null"});
    }
    // check if file size is more than 2MB
    else if(fileSizeInMegabytes > 2){
        res.status(202).json({message: "File size is more than 2 Mega Bytes."});
    }
    // check if file type is [PNG, JPEG, JPG, GIF]
    else if(profilePhoto.mimetype === "image/png" || profilePhoto.mimetype === "image/jpg" ||
        profilePhoto.mimetype === "image/jpeg" || profilePhoto.mimetype === "image/gif"){
         
            try {
                const memberProfile = await CompanyInfo.findOne({ where: { m_id: id } });
                // check if file already exist
                if(profilePhoto.name === memberProfile.logo){
                    return res.status(202).json({message: "Image already exist."});
                }
                const file = req.files.file;
                file.mv(`./uploads/profile/${file.name}`, err => {
                    if(err){
                        res.status(202).json({message: err + " <<Error uploading file."})
                    }
                });

                memberProfile.logo = process.env.SERVER_URL +'/uploads/profile/'+ file.name;
                await memberProfile.save();
                
                return res.status(200).json({advance: memberProfile});
                
                
            } catch (error) {
                res.status(500).json({message: error + "  >>something went wrong."});
            }
        }else{
            return res.status(202).json({message: "not a image file."});
        }
}
// Get Basic Info
export const getBasicInfo = async (req, res) => {
    const id = req.params.id;
    try {
        const memberBasicInfo = await Member.findOne({ where: { id: id } });
        if(!memberBasicInfo) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({member: memberBasicInfo});
        
    } catch (error) {
        res.status(202).json({message: error});
    }
}
// Get Advance Info
export const getAdvanceInfo = async (req, res) => {
    const id = req.params.id;
    try {
        const memberAdvanceInfo = await CompanyInfo.findOne({ where: { m_id: id } });
        if(!memberAdvanceInfo) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({advance: memberAdvanceInfo});
        
    } catch (error) {
        res.status(202).json({message: error});
    }
}
// Get Instant Messaging Info
export const getInstantMessagingInfo = async (req, res) => {
    const id = req.params.id;
    try {
        const instantMessaging = await InstatnMessaging.findAll({ where: { m_id: id } });
        if(!instantMessaging) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({instantMessage: instantMessaging});
        
    } catch (error) {
        res.status(202).json({message: error});
    }
}
// Get Account Info
export const getAccountInfo = async (req, res) => {
    const id = req.params.id; // Member Id
    try {
        const member = await Member.findOne({ where: { id: id } });
        const account = await Account.findOne({ where: { id: member.ac_id } });
        if(!member || !account) return res.status(202).json({message: "Nothing Found."});
        res.status(200).json({account: account});
        
    } catch (error) {
        res.status(202).json({message: error});
    }
}
// Update Email Subscription
export const updateAccountEmailSubs = async (req, res) => {
    const id = req.params.id; // Member Id
    try {
        const member = await Member.findOne({ where: { id: id } });
        const account = await Account.findOne({ where: { id: member.ac_id } });
        if(!member || !account) return res.status(202).json({message: "Nothing Found."});
        account.msg_notification = !account.msg_notification;
        await account.save(); 
        res.status(200).json({account: account});
        
    } catch (error) {
        res.status(202).json({message: error});
    }
}
// Add Basic Info
export const addBasicInfo = async (req, res) => {
    const id = req.params.id; // Member Id
    const data = req.body
    try {
        const member = await Member.findOne({ where: { id: id } });
        
        if(!member) return res.status(202).json({message: "Nothing Found."});
        
        member.name = data.name;
        member.business_description = data.business_description;
        member.business_type = data.business_type;
        member.address = data.address;
        member.phone = data.phone;
        member.mobile = data.mobile;
        member.fax = data.fax;
        member.website = data.website;
        
        await member.save(); 
        
        res.status(200).json({member: member});
        
    } catch (error) {
        res.status(202).json({message: error});
    }
}
// Add Advance Info
export const addAdvanceInfo = async (req, res) => {
    const id = req.params.id; // Member Id
    const data = req.body
    try {
        const companyInfo = await CompanyInfo.findOne({ where: { m_id: id } });
        
        if(!companyInfo) return res.status(202).json({message: "Nothing Found."});
        
        companyInfo.year_established = data.year_established;
        companyInfo.no_employees = data.no_employees;
        companyInfo.sales_turnover = data.sales_turnover;
        companyInfo.operational_add = data.operational_add;
        companyInfo.trading_company1 = data.trading_company1;
        companyInfo.trading_company2 = data.trading_company2;
        companyInfo.trading_company3 = data.trading_company3;
        companyInfo.interested_company1 = data.interested_company1;
        companyInfo.interested_company2 = data.interested_company2;
        companyInfo.interested_company3 = data.interested_company3;
        companyInfo.payment_method = data.payment_method;
        companyInfo.shipping_terms = data.shipping_terms;
        companyInfo.business_reg_no = data.business_reg_no;
        
        await companyInfo.save(); 
        
        res.status(200).json({advance: companyInfo});
        
    } catch (error) {
        res.status(202).json({message: error});
    }
}
// Add Basic Info
export const addInstantMessage = async (req, res) => {
    const id = req.params.id; // Member Id
    const data = req.body
    try {
        const AIM           = await InstatnMessaging.findOne({ where: { m_id: id , type: "AIM"} });
        const WINDOWSLIVE   = await InstatnMessaging.findOne({ where: { m_id: id , type: "Windows Live"} });
        const GOOGLETALK    = await InstatnMessaging.findOne({ where: { m_id: id , type: "Google Talk"} });
        const SKYPE         = await InstatnMessaging.findOne({ where: { m_id: id , type: "Skype"} });
        const YAHOO         = await InstatnMessaging.findOne({ where: { m_id: id , type: "Yahoo"} });
        const ICO           = await InstatnMessaging.findOne({ where: { m_id: id , type: "ICO"} });
        const WHATSAPP      = await InstatnMessaging.findOne({ where: { m_id: id , type: "WhatsApp"} });
        const WECHAT        = await InstatnMessaging.findOne({ where: { m_id: id , type: "WeChat"} });
        const LINE          = await InstatnMessaging.findOne({ where: { m_id: id , type: "Line"} });
        const VIBER         = await InstatnMessaging.findOne({ where: { m_id: id , type: "Viber"} });
        const QQ            = await InstatnMessaging.findOne({ where: { m_id: id , type: "QQ"} });
        
        if(!AIM){
            await InstatnMessaging.create({
                type: data[0].type,
                link: data[0].link,
                m_id: id
            })
        }else{
            AIM.link            = data[0].type === "AIM" && data[0].link !== "" ? data[0].link : AIM.link; 
            await AIM.save();
        }

        if(!WINDOWSLIVE){
            await InstatnMessaging.create({
                type: data[1].type,
                link: data[1].link,
                m_id: id
            })
        }else{
            WINDOWSLIVE.link    = data[1].type === "Windows Live" && data[1].link !== "" ? data[1].link : WINDOWSLIVE.link;
            await WINDOWSLIVE.save();
        }
        
        if(!GOOGLETALK){
            await InstatnMessaging.create({
                type: data[2].type,
                link: data[2].link,
                m_id: id
            })
        }else{
            GOOGLETALK.link     = data[2].type === "Google Talk" && data[2].link !== "" ? data[2].link : GOOGLETALK.link;
            await GOOGLETALK.save();
        } 
        
        if(!SKYPE){
            await InstatnMessaging.create({
                type: data[3].type,
                link: data[3].link,
                m_id: id
            })
        }else{
            SKYPE.link          = data[3].type === "Skype" && data[3].link !== "" ? data[3].link : SKYPE.link;
            await SKYPE.save();
        } 
        
        if(!YAHOO){
            await InstatnMessaging.create({
                type: data[4].type,
                link: data[4].link,
                m_id: id
            })
        }else{
            YAHOO.link          = data[4].type === "Yahoo" && data[4].link !== "" ? data[4].link : YAHOO.link;
            await YAHOO.save();
        }
        
        if(!ICO){
            await InstatnMessaging.create({
                type: data[5].type,
                link: data[5].link,
                m_id: id
            })
        }else{
            ICO.link            = data[5].type === "ICO" && data[5].link !== "" ? data[5].link : ICO.link;
            await ICO.save();
        }  
        
        if(!WHATSAPP){
            await InstatnMessaging.create({
                type: data[6].type,
                link: data[6].link,
                m_id: id
            })
        }else{
            WHATSAPP.link       = data[6].type === "WhatsApp" && data[6].link !== "" ? data[6].link : WHATSAPP.link;
            await WHATSAPP.save();
        } 
        
        if(!WECHAT){
            await InstatnMessaging.create({
                type: data[7].type,
                link: data[7].link,
                m_id: id
            })
        }else{
            WECHAT.link         = data[7].type === "WeChat" && data[7].link !== "" ? data[7].link : WECHAT.link;
            await WECHAT.save();
        } 
        
        if(!LINE){
            await InstatnMessaging.create({
                type: data[8].type,
                link: data[8].link,
                m_id: id
            })
        }else{
            LINE.link           = data[8].type === "Line" && data[8].link !== "" ? data[8].link : LINE.link;
            await LINE.save();
        } 
        
        if(!VIBER){
            await InstatnMessaging.create({
                type: data[9].type,
                link: data[9].link,
                m_id: id
            })
        }else{
            VIBER.link          = data[9].type === "Viber" && data[9].link !== "" ? data[9].link : VIBER.link;
            await VIBER.save();
        } 
        
        if(!QQ){
            await InstatnMessaging.create({
                type: data[10].type,
                link: data[10].link,
                m_id: id
            })
        }else{
            QQ.link             = data[10].type === "QQ" && data[10].link !== "" ? data[10].link : QQ.link;
            await QQ.save();
        } 
        
        const instantMessage = await InstatnMessaging.findAll({ where: { m_id: id} });
        res.status(200).json({instantMessage: instantMessage });
        
        
    } catch (error) {
        res.status(202).json({message: error.message});
    }
}