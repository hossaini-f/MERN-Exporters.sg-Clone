import Sequelize from 'sequelize';
import db from '../db.config.js';

const EmailAlert = db.define('email_alert',{
  keyword: {
      type: Sequelize.STRING,
      allowNull: true
  },
  type: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ac_id: {
    type: Sequelize.BIGINT,
    allowNull: true
  }
}); 
export default EmailAlert;