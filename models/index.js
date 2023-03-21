const User = require('./User');
const City = require('./City');
const Comment = require('./Comment');

City.hasMany(Comment, {
    foreignKey: 'city_id',
    onDelete: 'CASCADE'
  });

City.hasMany(User, {
    foreignKey: 'user_id',
  })

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User, City, Comment };