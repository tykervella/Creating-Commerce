// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
     /// first column. used as pk in various routes. basically just used to index when grabbing relevant information
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // second column. string to represent product's name 
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // third column. decimal to appear like money for the price (eg. $199.99)
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      // validates the user actually entered the price as a decimal 
      validate: {
        isDecimal: true,
      },
    },
    // sets default to 10. Takes and checks that input is an integer. 
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },

    // Saved within this table as the id for the product's category. Can then reference the category model and check the table to see what the data 
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
