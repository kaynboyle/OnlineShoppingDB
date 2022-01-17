const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
// this file uses the features that are gotten from model from sequelize
class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      //integer not decimal bc id
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
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
    modelName: "category",
  }
);

module.exports = Category;
