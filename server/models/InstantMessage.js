import Sequelize from 'sequelize';
import db from '../db.config.js';

const InstantMessage = db.define('instant_msgs',{
  type: {
      type: Sequelize.STRING,
      allowNull: true
  },
  link: {
    type: Sequelize.STRING,
    allowNull: true
  },
  m_id: {
    type: Sequelize.BIGINT,
    allowNull: true
  }
}); 
export default InstantMessage;