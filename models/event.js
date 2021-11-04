const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connetion');

 class Event extends Model{}

 Event.init
 ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    menu_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wine_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
    }
);
module.exports = Event;