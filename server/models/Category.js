import Sequelize from 'sequelize';
import db from '../db.config.js';

const Category = db.define('categories',{
  category: {
      type: Sequelize.STRING,
      allowNull: false
  }
}); 
export default Category;