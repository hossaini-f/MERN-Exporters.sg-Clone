import Sequelize from 'sequelize';
import db from '../db.config.js';
import Buying from './Buying.js';

const Members = db.define('members',{
  name: {
      type: Sequelize.STRING,
      allowNull: false
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false
  },
  business_type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  business_description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fax: {
    type: Sequelize.STRING,
    allowNull: true
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: true
  },
  website: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ac_id: {
    type: Sequelize.BIGINT,
    allowNull: true
  }
}); 

export default Members;
