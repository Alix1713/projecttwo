const User = require("./User");
const Menu = require("./Menu");
const Wine = require("./Wine");
const Dish = require("./dish");

// Menu.hasMany(Dish, {
//   foreignKey: 'dish_id',
//   onDelete: 'CASCADE'
// });

// Dish.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Menu, Wine, Dish };
