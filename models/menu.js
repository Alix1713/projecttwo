const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model {}

Menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guest_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'menu',
  }
);

module.exports = Menu;