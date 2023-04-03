// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// A category can have many products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// A product belongs to a single category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// A tag can have many products 
Product.belongsToMany(Tag, {
  //goes through model ProductTag as an intermediate to connect a product with its tag. 
  through: ProductTag,
  foreignKey: 'product_id',
});

// A product can have many tags 
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// exports associations to the models they come from 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
