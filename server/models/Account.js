import Sequelize from 'sequelize';
import db from '../db.config.js';

const Account = db.define('accounts',{
  email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mem_type: {
    type: Sequelize.STRING,
    allowNull: true
  },
  msg_notification: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },
  confirmed: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    default: "no"
  }
}); 
export default Account;