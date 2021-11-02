const User = require('./User');
const Menu = require('./Menu');
const Wine = require('./Wine')

// Menu.hasMany(Menu, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Menu, Wine };
