const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Rating extends Model {}

Rating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    average_rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
    nightlife_rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
    affordability_rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
    dining_rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
    transportation_rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
    familyfriendly_rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
    nature_rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
    weather: {
      type: DataTypes.DECIMAL(3, 2),
    },
    activities_rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "rating",
  }
);

module.exports = Rating;
