import Sequelize from 'sequelize';
import db from '../db.config.js';

const NewsLetter = db.define('news_letter',{
  status: {
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
export default NewsLetter;