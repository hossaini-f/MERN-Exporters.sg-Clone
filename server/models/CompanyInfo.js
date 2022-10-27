import Sequelize from 'sequelize';
import db from '../db.config.js';

const CompanyInfo = db.define('company_infos',{
  year_established: {
      type: Sequelize.STRING,
      allowNull: true
  },
  no_employees : {
    type: Sequelize.STRING,
    allowNull: true
  },
  sales_turnover : {
    type: Sequelize.STRING,
    allowNull: true
  },
  operational_add: {
    type: Sequelize.STRING,
    allowNull: true
  },
  trading_company1: {
    type: Sequelize.STRING,
    allowNull: true
  },
  trading_company2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  trading_company3: {
    type: Sequelize.STRING,
    allowNull: true
  },
  interested_company1: {
    type: Sequelize.STRING,
    allowNull: true
  },
  interested_company2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  interested_company3: {
    type: Sequelize.STRING,
    allowNull: true
  },
  payment_method: {
    type: Sequelize.STRING,
    allowNull: true
  },
  shipping_terms: {
    type: Sequelize.STRING,
    allowNull: true
  },
  business_reg_no: {
    type: Sequelize.STRING,
    allowNull: true
  },
  logo: {
    type: Sequelize.STRING,
    allowNull: true
  },
  cover_logo: {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  m_id: {
    type: Sequelize.BIGINT,
    allowNull: true
  }
}); 
export default CompanyInfo;