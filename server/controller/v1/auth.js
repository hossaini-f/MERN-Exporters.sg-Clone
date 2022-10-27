import db from '../../db.config.js';
import {check, validationResult} from 'express-validator';
import crypto from 'crypto-js';
import fetch from 'node-fetch';
import dotEnv from 'dotenv';
import jwt from 'jsonwebtoken';
import Account from '../../models/Account.js';
import Member from '../../models/Members.js';
import Category from '../../models/Category.js';
import MemberCategory from '../../models/MemberCategories.js';
import CompanyInfo from '../../models/CompanyInfo.js';
import InstantMessage from '../../models/InstantMessage.js';

dotEnv.config();
/*
        Authenticaton Methods:
        remain that what data to response in success status.
*/ 
// Member Authentication
export const signIn =  async (req, res) =>  {
    const email = req.body.username;
    const password = req.body.password;
    const errors = validationResult(req);
    const dbError = [];

    if(!errors.isEmpty()){
        res.status(202).json({message: errors.array()});
    }
        try {
            let memberProfile = null;

            await Account.findOne({where: {email: email}})
            .then(user => {
                if(!user){
                    dbError.push({msg:  "User Does not exist."});
                    return res.status(202).json({message: dbError});  
                } 
                const userPassword = crypto.AES.decrypt(user.password, process.env.JWT_SECRET).toString(crypto.enc.Utf8);
                
                if(userPassword !== password){
                    dbError.push({msg:  "Invalid Credentials."});
                    return res.status(202).json({message: dbError});  
                }
                 
                // to remove Messages from Array
                dbError.pop();  

                const token = jwt.sign({email: user.email, id: user.id}, process.env.JWT_ACCOUNT_ACTIVATION, {expiresIn: '1h'});
                
                const memberProfile = Member.findOne({where: {ac_id: user.id}})
                .then(member => {
                    res.status(200).json({result: member, token})
                })
                .catch(error => console.log(error));
                

            }).catch((error) => console.log(error));
            
        }catch (error) {
            res.status(500).json({message: "something went wrong."});
        }   
}

/*
    Adding New Member
    Tables:
    1. Members
    2. Account
    3. Category
*/

// Validate UserIsRobot
// export const validateIsHuman = async (req, res) => {
//     const secret = process.env.RECAPTCHA_SECRET_KEY
//     const token = req.body.reCaptcha;
//     const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?
//                                     secret=${secret}&response=${token}`,{
//                                         method: "POST"
//                                     });
//     const data = await response.json();
//     console.log(data);
    
// }
export const signUp = async (req, res) => {
    
    const email = req.body.email;
    const confEmail = req.body.confirmEmail;

    const errors = validationResult(req);
    const dbError = [];
    
    if(!errors.isEmpty()){
       return res.status(202).json({message: errors.array()});
    }
    if(confEmail !== email){
        dbError.push({msg:  "Email Addresses did not match."});
        return res.status(202).json({message: dbError}); 
    }
    
    try {
        await Account.findOne({where: {email: email}})
        .then(user => {
            if(user){
                dbError.push({msg:  "Email Address already has been taken."});
                return res.status(202).json({message: dbError});  
            } 
        })
        .catch((error) => console.log(error));

        const hashedPassword = crypto.AES.encrypt(req.body.password, process.env.JWT_SECRET).toString();
        let ac_id = null; // Foreign key -> Table Account
        let m_id = null; // Foreign key -> Table Members
        let profile = null;
        
        // Table Account
        await Account.create({
            email: req.body.email,
            password: hashedPassword,
            msg_notification: false
        })
        .then(user => {
            ac_id = user.id;
            const emailData = {
                from: process.env.EMAIL_FROM,
                to: user.email,
                subject: "Account Activation Link",
                html: `
                    <h3>Welcom to Medicinesworld.com</h3>
                    <h5>Please click to the link below to Activate your Account</h5>
                    <p>click <a href="">here</a>.</p>
                    <hr/>
                    <p>Do not reply to this Email</p>
                `
            }
            
        })
        .catch(error => {
            if(error){
                console.log(error);
                dbError.push({msg:  "an Error occured while creating account! Please try again later."});
                return res.status(202).json({message: dbError});  
            } 
        });
        
        // Table Member
        await Member.create({
            name: req.body.name,
            company: req.body.companyName,
            business_type:req.body.businessType,
            country:req.body.country,
            address: req.body.fullCompanyAddress,
            business_description: req.body.companyDescription,
            phone: req.body.phoneNumber,
            ac_id: ac_id
        })
        .then(member => {
            m_id = member.id;
            profile = member;
        })
        .catch(error => {
            if(error){
                dbError.push({msg:  "an Error occured while creating account! Please try again later."});
                return res.status(202).json({message: dbError});  
            }
        })
        
        // Table Company Info
        await CompanyInfo.create({
            m_id: m_id
        })
        .then(company => {
            console.log(company);
        })
        .catch(error => {
            console.log(error);
            if(error){
                dbError.push({msg:  "an Error occured while creating account! Please try again later."});
                return res.status(202).json({message: dbError});  
            }
        });
        
        // Table Instant Messaging 
        await InstantMessage.create({
            m_id: m_id
        })
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.log(error);
            if(error){
                dbError.push({msg:  "an Error occured while creating account! Please try again later."});
                return res.status(202).json({message: dbError});  
            }
        });

        // Table Category
        await MemberCategory.create({
            cate_id: req.body.primaryIndustry,
            m_id: m_id
        })
        .then(cate => {
            const token = jwt.sign({email: req.body.email, id: req.body.id}, process.env.JWT_ACCOUNT_ACTIVATION, {expiresIn: '1h'});
            res.status(200).json({result: profile, token});
        })
        .catch(error => {
            console.log(error);
            if(error){
                dbError.push({msg:  "an Error occured while creating account! Please try again later."});
                return res.status(202).json({message: dbError});  
            }
        })

    } catch (error) {
        dbError.push({msg:  "something went wrong."});
        res.status(202).json({message: dbError});
    }
}