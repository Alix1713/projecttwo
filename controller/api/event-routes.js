const router = require('express').Router();
const { Model } = require('sequelize/types');
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
    guest_id: {

      },
    post_id:


 })