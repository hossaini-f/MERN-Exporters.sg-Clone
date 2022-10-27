import  Sequelize  from 'sequelize';
import dotEnv from 'dotenv';

dotEnv.config();

const HOST     = process.env.HOST;
const PORT     = process.env.DB_PORT;
const DATABASE = process.env.DATABASE;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DIALECT  = process.env.DIALECT;
const MAX      = process.env.POOL_MAX;
const MIN      = process.env.POOL_MIN;
const ACQUIRE  = process.env.POOL_ACQUIRE;
const IDLE     = process.env.POOL_IDLE;

var Connection = new Sequelize('medicinesworld', 'medicines','root', {
        host: HOST,
        port: PORT,
        dialect: DIALECT,
        pools:{
                max: MAX,
                min: MIN,
                acquire: ACQUIRE,
                idle: IDLE
        }
})
export default Connection;