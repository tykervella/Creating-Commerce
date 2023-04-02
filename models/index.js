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

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

Tag.belongsToMany(ProductTag, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

ProductTag.belongsTo(Product, {
  foreignKey: "product_id"
});

ProductTag.belongsTo(Tag, {
  foreignKey: "tag_id"
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
