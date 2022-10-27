import Sequelize from 'sequelize';
import db from '../db.config.js';

const Buying = db.define('buyings',{
  product_desc: {
    type: Sequelize.STRING,
    allowNull: true
},
quantity: {
  type: Sequelize.STRING,
  allowNull: true
},
unit: {
  type: Sequelize.STRING,
  allowNull: true
},
reply_by: {
  type: Sequelize.STRING,
  allowNull: true
},
purchase_type: {
  type: Sequelize.STRING,
  allowNull: true
},
price_per_unit: {
  type: Sequelize.STRING,
  allowNull: true
},
payment_method: {
  type: Sequelize.STRING,
  allowNull: true
},
delivery_location: {
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
}
}); 

export default Buying;
