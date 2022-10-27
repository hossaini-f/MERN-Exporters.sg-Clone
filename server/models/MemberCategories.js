import Sequelize from 'sequelize';
import db from '../db.config.js';

const CateHelper = db.define('member_categories',{
  m_id: {
      type: Sequelize.BIGINT,
      allowNull: true,
  },
  cate_id: {
    type: Sequelize.BIGINT,
    allowNull: true
  }
}); 
export default CateHelper;