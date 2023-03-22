const User = require('./User');
const City = require('./City');
const Comment = require('./Comment');
const Rating = require('./Rating');

User.hasMany(Comment, {
    foreignKey: 'comment_id',
  })

Rating.belongsTo(City, {
  foreignKey: 'city_id'
})

Rating.belongsTo(User, {
    foreignKey: 'user_id'
  });

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

Comment.belongsTo(City, {
    foreignKey: 'city_id'
  });

module.exports = { User, City, Comment, Rating };