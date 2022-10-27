import express from 'express';
import bodyParder from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import dotEnv from 'dotenv';
import path from 'path';
import db from './db.config.js';
import authRoute from './routes/v1/auth.js';
import profileRoute from './routes/v1/profile.js';
import sellingRoute from './routes/v1/selling.js';
import buyingRoute from './routes/v1/buying.js';
import feedsRoute from './routes/v1/feeds.js';
import inboxRoutes from './routes/v1/inbox.js';
import homePageRoutes from './routes/v1/homepage.js';

const app = express();
dotEnv.config();

app.use(fileUpload());
app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use('/uploads', express.static('uploads'));
// Routes
app.use('/auth', authRoute);
app.use('/member', profileRoute);
app.use('/selling', sellingRoute);
app.use('/buying', buyingRoute);
app.use('/feeds', feedsRoute);
app.use('/inbox', inboxRoutes);
// Public Client Routes
app.use('/public', homePageRoutes);

app.get('/check',(req, res) => { res.json({message: "Working Well....."})});

// Database Connection
db.authenticate()
.then(() => app.listen(process.env.PORT, () => console.log(`Server is running on Port: ${process.env.PORT}`)))
.catch( error => console.log("Error "+ error));