import Sequelize from 'sequelize';
import db from '../db.config.js';

const TrustNetwork = db.define('trust_network',{
  member: {
      type: Sequelize.BIGINT,
      allowNull: true
  },
  m_id: {
    type: Sequelize.BIGINT,
    allowNull: true
  }
}); 
export default TrustNetwork;