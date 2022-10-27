import Sequelize from 'sequelize';
import db from '../db.config.js';

const Selling = db.define('sellings',{
    model_desc : {
      type: Sequelize.STRING,
      allowNull: true
  },
  sku_no: {
    type: Sequelize.STRING,
    allowNull: true
  },
  product_type: {
    type: Sequelize.STRING,
    allowNull: true
  },
  price: {
    type: Sequelize.STRING,
    allowNull: true
  },
  unit: {
    type: Sequelize.STRING,
    allowNull: true
  },
  quantity: {
    type: Sequelize.STRING,
    allowNull: true
  },
  min_order: {
    type: Sequelize.STRING,
    allowNull: true
  },
  expiry_date: {
    type: Sequelize.STRING,
    allowNull: true
  },
  keyword1: {
    type: Sequelize.STRING,
    allowNull: true
  },
  keyword2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  keyword3: {
    type: Sequelize.STRING,
    allowNull: true
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  },
  quantity: {
    type: Sequelize.STRING,
    allowNull: true
  },
  payment_method: {
    type: Sequelize.STRING,
    allowNull: true
  },
  stock_location: {
    type: Sequelize.STRING,
    allowNull: true
  },
  delivery_time: {
    type: Sequelize.STRING,
    allowNull: true
  },
  shipping_terms: {
    type: Sequelize.STRING,
    allowNull: true
  },
  additional_info: {
    type: Sequelize.STRING,
    allowNull: true
  },
  m_id: {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  cat_id: {
    type: Sequelize.STRING,
    allowNull: true
  }
}); 

export default Selling;