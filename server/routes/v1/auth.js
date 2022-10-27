import express from 'express';
import {check} from 'express-validator';
import {signIn, signUp } from '../../controller/v1/auth.js';

const router = express.Router();

// Sign In Form Validation
const ValidateLoginForm = [
    check('username')
    .notEmpty().withMessage("Email Field should not be empty.")
    .isEmail().withMessage("Not a valid Email."),
    
    check('password')
    .notEmpty().withMessage("Password Field should not be empty.")
]
// Sign Up Form Validation
const ValidateCreateAccount = [
    check('email')
    .notEmpty().withMessage("Email Field could not be empty.")
    .isEmail().withMessage("Please Enter a valid Email Address."),
    // .isLength({max: 40}).withMessage("Email could not exceed 40 characters in length."),
    
    check('confirmEmail')
    .notEmpty().withMessage("Please Confirm your Email."),
    // .isEmail().withMessage("Please Confirm your Email.")
    // .isLength({max: 40}).withMessage("Email could not exceed 40 characters in length."),

    check('password')
    .notEmpty().withMessage("Password Field could not be empty."),
    // .isLength({min: 10}).withMessage("Password lenght at least should be 10 (Strong Passwords Include: Numbers, Characters and Symbols).")
    // .isLength({max: 30}).withMessage("Password could not exceed 30 characters in length."),
    
    check('companyName')
    .notEmpty().withMessage("Please Enter your Company Name."),
    // .isString().withMessage("Please Enter only Characters in Company Name Field.")
    // .isLength({min: 5}).withMessage("Company Name could not be less than 5 characters in length.")
    // .isLength({max: 50}).withMessage("Company Name could not exceed  50 characters in length."),
    
    check('primaryIndustry')
    .notEmpty().withMessage("Please Select a Primary Industry."),

    check('businessType')
    .notEmpty().withMessage("Please Select a Business Type."),
    
    check('country')
    .notEmpty().withMessage("Please Select your country."),
    
    check('fullCompanyAddress')
    .notEmpty().withMessage("Please Enter your full Company Address."),
    // .isLength({min: 10}).withMessage("Company Name could not be less than 10 characters in length.")
    // .isLength({max: 60}).withMessage("Company Name could not be exceed 60 characters in length."),
    
    check('name')
    .notEmpty().withMessage("Please Enter your full Name."),
    // .isLength({min: 5}).withMessage("Name could not be less than 5 characters in length.")
    // .isLength({max: 40}).withMessage("Name could not exceed 40 characters in length."),
    
    check('phoneNumber')
    .notEmpty().withMessage("Please Enter you Phone Number including your Country Code."),
    // .isLength({min: 10}).withMessage("Phone Number could not be less than 10 Digits.")
    // .isLength({max: 15}).withMessage("Phone Number could exceed 15 digits in length"),
    
    check('companyDescription')
    .notEmpty().withMessage("Please Enter your Company Description."),
    // .isLength({min: 10}).withMessage("Company Description could not be less than 20 characters in length.")
    // .isLength({max: 100}).withMessage("Company Description could not be exceed 100 characters in length."),
    
]

// Sign In Member
router.post('/signin', ValidateLoginForm, signIn);
// Sign Up Member
router.post('/signup', ValidateCreateAccount, signUp);
export default router;
