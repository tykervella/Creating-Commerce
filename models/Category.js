// importing Sequelize's Model class and requiring it to extend to category and allow us to start build our own classes 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    /// first column. used as pk in various routes. basically just used to index when grabbing relevant information
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    /// second column. actual data for the category's name 
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);


/// exports this as Category 
module.exports = Category;
