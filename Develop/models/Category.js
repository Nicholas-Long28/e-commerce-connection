const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
  id: {
    // define columns
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  category_name: {
  type: DataTypes.STRING,
  allowNull: false
}},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
  );

module.exports = Category;

/*  * `category_id`

    * Integer.

    * References the `Category` model's `id`. */