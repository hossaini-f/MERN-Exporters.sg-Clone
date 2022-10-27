import db from '../../db.config.js';
import dotEnv from 'dotenv';
import moment from 'moment';
import nodemailer from 'nodemailer';
import { query } from 'express-validator';

dotEnv.config();


// Get Home Latest Products
export const addContactList = async (req, res) => {
    const senderId = req.params.sender;
    const receiverId = req.params.receiver;
    try {
        const checkIfExist = `SELECT sender_id from member_message WHERE sender_id = ${senderId}`;
        const exist = await db.query(checkIfExist);
        
        if(exist[0].length > 0){
            return 
        }
        const query = "INSERT INTO member_message (sender_id, receiver_id) "+
                      `VALUES ('${senderId}', '${receiverId}')`;

        const contact = await db.query(query);
        if(!contact) return res.status(202).json({message: "Nothing Found."});
        
        res.status(200).json({message: "Added."});
        
    } catch (error) {
        res.status(500).json({message: error + "  >>something went wrong."});
    }
}
// Send New Message
export const sendNewMessage = async(req, res) => {
    const data = req.body;
    
    if(data.quote === 'No'){
        const query = "INSERT INTO member_message (sender_id, receiver_id, message_content) "+
                      `VALUES ('${data.sender}', '${data.receiver}', '${data.message}')`;
      
        const sent = await db.query(query);
        if(!sent) return res.status(202).json({message: "Nothing Found."});
    }
    else if(data.quote === "Yes"){
        const msg = "<b>Product:</b> &nbsp;"+data.product+"<br/>"+
                    "<b>Quantity:</b> &nbsp;"+data.quantity+"<br/>"+
                    "<b>Unit:</b> &nbsp;"+data.unit+"<br/>";

        const query = "INSERT INTO member_message (sender_id, receiver_id, message_content) "+
                      `VALUES ('${data.sender}', '${data.receiver}', '${msg}')`;

        const sent = await db.query(query);
        if(!sent) return res.status(202).json({message: "Nothing Found."});
    }
    
    res.status(200).json({message: "sent."});
}
// Get All Messages
export const getMessages = async(req, res) => {
    const sender = req.params.sender;
    const receiver = req.params.receiver;
    let trusted = false;

    const query = 'SELECT * FROM member_message '+
                  `WHERE (member_message.sender_id = ${sender} AND member_message.receiver_id = ${receiver}) `+
                  `OR (member_message.sender_id = ${receiver} AND member_message.receiver_id = ${sender}) `+
                  'ORDER BY id ASC';
    const getMsg = await db.query(query);
    
    // Check if Trust Network Exist
    const query2 = 'SELECT m_id FROM trust_network '+
                  `WHERE (trust_network.member = ${sender} AND trust_network.m_id = ${receiver})`;

    const getTrustNetwork = await db.query(query2);

    if(getTrustNetwork[0].length > 0){
        trusted = true;
    }

    res.status(200).json({messages: getMsg[0], trusted});
}
// Block Member
export const blockMember = async(req, res) => {
    const sender = req.params.sender;
    const receiver = req.params.receiver;
    let trusted = false;

    const updateQuery = "UPDATE member_message "+
                  "SET is_blocked = 'Yes' "+
                  `WHERE (member_message.sender_id = ${sender} AND member_message.receiver_id = ${receiver})`;
    const updateMember = await db.query(updateQuery);
    if(!updateMember) return res.status(202).json({message: " Error."})

    const query = 'SELECT * FROM member_message '+
                  `WHERE (member_message.sender_id = ${sender} AND member_message.receiver_id = ${receiver}) `+
                  `OR (member_message.sender_id = ${receiver} AND member_message.receiver_id = ${sender}) `+
                  'ORDER BY id ASC';
    const getMsg = await db.query(query);
    if(!getMsg) return res.status(202).json({message: "no Message"})
    
    // Check if Trust Network Exist
    const query2 = 'SELECT m_id FROM trust_network '+
    `WHERE (trust_network.member = ${sender} AND trust_network.m_id = ${receiver})`;

    const getTrustNetwork = await db.query(query2);

    if(getTrustNetwork[0].length > 0){
        trusted = true;
    }
    res.status(200).json({messages: getMsg[0], trusted});
}
// Add Trust Network
export const addTrustNetwork = async(req, res) => {
    const sender = req.params.sender;
    const receiver = req.params.receiver;
    
    const query = "INSERT INTO trust_network (member, m_id) "+
    `VALUES ('${sender}', '${receiver}')`;

    const sent = await db.query(query);
    if(!sent) return res.status(202).json({message: "Nothing Found."});

    return res.status(200).json({message: "Added New Trust Network"});
}
// Add New Review
export const addNewReview = async(req, res) => {
    const data = req.body;
    const query = "INSERT INTO member_review (on_time, expectation, support, comments, m_id, rater_id) "+
                  `VALUES ('${data.onTime}','${data.expectation}','${data.support}','${data.comment}','${data.m_id}','${data.rater_id}')`;
    const addReview = await db.query(query);
    if(!addReview) return res.status(202).json({message: "Error occured"});

    return res.status(200).json({message:"Review Submitted"});
}
// Add New Report
export const addNewReport = async(req, res) => {
    const data = req.body;
    const query = "INSERT INTO report (name, email, subject, report) "+
                  `VALUES ('${data.name}','${data.email}','${data.subject}','${data.report}')`;
    const addReport = await db.query(query);
    if(!addReport) return res.status(202).json({message: "Error occured"});

    return res.status(200).json({message:"Report Submitted"});
}
// Get Email
export const getEmail = async(req, res) => {
    const id = req.params.id;
    const query = "SELECT accounts.email from accounts "+
                  `JOIN members ON members.ac_id = accounts.id WHERE members.id = ${id} LIMIT 1`;
    const getMail = await db.query(query);

    return res.status(200).json({Email: getMail[0]})
}
// Send New Message [Get Quote]
export const sendGetQuoteMessage = async(req, res) => {
    const data = req.body;

    const msg = "<span>Product Interested:</span> &nbsp;"+data.product+ " ("+data.order+" unit"  + ") "+ data.additional+"<br/><br/><br/><br/>"+
                "<span>Payment Method:</span> &nbsp;"+"<br/>"+
                "<span>Delivery Address:</span> &nbsp;"+data.country+"<br/>"+
                "<span>Delivery Date:</span> &nbsp;"+data.date+"<br/>";

    const query = "INSERT INTO member_message (sender_id, receiver_id, message_content) "+
                    `VALUES ('${data.sender}', '${data.receiver}', '${msg}')`;

    const sent = await db.query(query);
    if(!sent) return res.status(202).json({message: "Nothing Found."});
    // Post as Buying Lead
    if(data.buyingLead === "Yes" && data.additional != "" && data.order > 0){
        const buyingQuery = "INSERT INTO buyings (product_desc, quantity, delivery_location) "+
                            `VALUES ('${data.additional}', '${data.order}', '${data.country}')`;
        const addBuying = await db.query(buyingQuery);
    }
    // Join this Category
    if(data.joinCategory === "Yes"){
        const categoryQuery = "INSERT INTO member_categories (m_id, cate_id) "+
                              `VALUES ('${data.sender}','${data.category}')`;
        const joinNewCategory = await db.query(categoryQuery);
    }
    res.status(200).json({message: "sent."});
}
// Send Message [Get Quote And Create Account]
export const getQuoteCreateAccount = async (req, res) => {
    const data = req.body;
    const pass = generatePassword();

    try {

        const accountQuery = "INSERT INTO accounts (email, password) "+
                             `VALUES ('${data.email}', '${pass}')`;
        const addAccount = await db.query(accountQuery);
        const lId = await db.query("SELECT LAST_INSERT_ID() AS id");

        const memberQuery = "INSERT INTO members (name, company, country, ac_id) "+
                            `VALUES ('${data.name}', '${data.company}', '${data.country}', '${lId[0][0].id}')`;
        const addMember = await db.query(memberQuery);

    /**
     * Sending Email to the User While Sending Quotation
     *  */
    /**
     * 1. Creating Outgoing Server Port
     *  */ 
    let transporter = nodemailer.createTransport({
        host: process.env.OUT_GOING_SERVER,
        port: process.env.PORT_OUT,
        secure: true, 
        auth: {
          user: process.env.EMAIL_FROM,
          pass: process.env.EMAIL_PASSWORD,
        }
    });
    /**
     * 2. Creating Message Body,Subject, To ,From
     */
    var message = {
        from: "'Medicinesworld.com' <noreply@medicinesworld.com>",
        to: data.email,
        subject: "Welcome to Medicinesworld.com",
        text: "Here's your Account information:",
        html: "<p>Here's your Account information:</p><br></br>"+
                "<span>Username: "+data.email+"</span><br></br>" +
                "<span>Password: "+pass+" </span><br></br>"+
                "<P>You can sign into your account at </br><a href='http://medicinesworld.com/signin'>http://www.medicinesworld.com<a/><P/>"+
                "<p>Thank you for joining Medicinesworld.com and we look forward to your participation in our global trade networks.</p>"+
                "<span>Editor</span><br></br>"+
                "<span>Medicinesworld.com</span><br></br>"+
                "<a href='http://www.medicinesworld.com'>http://www.medicinesworld.com</a>"
    };
    /**
     * 3. Sending Email to the User
     */
     transporter.sendMail(message, (error, info) => {
         if(error){
             transporter.close();
             return console.log(error)
         }
         transporter.close();
         return res.json({message: "Email has been sent: " + info.messageId})
     })
    } catch (error) {
        return res.status(202).json({message: error})  
    }
}
// Password Generator
export const generatePassword = () => {
    const length = 20;
    const charset = "Aa1!bB2f@Cc3#xDbdXsN4j$Ee5gBpsd%Ff6Q^uGToug7&jsHh8W#*{N#MTW!K6(&7FLI[f]SFspo}rI^$Tgi9($JYj5570!%)";
    let tempPassword = "";
    for (var i = 0; i < length; i++) {
        tempPassword += charset.charAt(Math.floor(Math.random() * 10));
    }
    return tempPassword;
}