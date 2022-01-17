// bring in everything by assigning variable names
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

// Tags belongToMany Products
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

// instead of exporting just index you export all of the models because this is info editing those models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
