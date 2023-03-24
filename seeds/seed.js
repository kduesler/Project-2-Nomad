const sequelize = require('../config/connection');
const { User, City, Comment, Rating } = require('../models');

const userData = require('./userData.json');
const cityData = require('./cityData.json')
const commentData = require('./commentData.json')
const ratingData = require('./ratingData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const city of cityData) {
    await City.create({
      ...city,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const rating of ratingData) {
    await Rating.create({
      ...rating,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
