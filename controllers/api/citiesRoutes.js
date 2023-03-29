const router = require("express").Router();
const sequelize = require("../../config/connection");
const { City, Comment, Rating, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    const sqlString = req.params.id;
    const ratingsData = await Rating.findAll({
      where: { city_id: req.params.id },
      include: [{ model: City }, { model: User }],
      attributes: {
        include: [
          [
            sequelize.literal(
              `(SELECT AVG(average_rating) from rating WHERE city_id=${sqlString})`
            ),
            "cityAverageRating",
          ],
          [
            sequelize.literal(
              `(SELECT AVG(nightlife_rating) from rating WHERE city_id=${sqlString})`
            ),
            "cityNightlifeRating",
          ],
          [
            sequelize.literal(
              `(SELECT AVG(affordability_rating) from rating WHERE city_id=${sqlString})`
            ),
            "cityAffordabilityRating",
          ],
          [
            sequelize.literal(
              `(SELECT AVG(dining_rating) from rating WHERE city_id=${sqlString})`
            ),
            "cityDiningRating",
          ],
          [
            sequelize.literal(
              `(SELECT AVG(transportation_rating) from rating WHERE city_id=${sqlString})`
            ),
            "cityTransportationRating",
          ],
          [
            sequelize.literal(
              `(SELECT AVG(familyfriendly_rating) from rating WHERE city_id=${sqlString})`
            ),
            "cityFamilyfriendlyRating",
          ],
          [
            sequelize.literal(
              `(SELECT AVG(nature_rating) from rating WHERE city_id=${sqlString})`
            ),
            "cityNatureRating",
          ],
          [
            sequelize.literal(
              `(SELECT AVG(weather) from rating WHERE city_id=${sqlString})`
            ),
            "cityWeatherRating",
          ],
          [
            sequelize.literal(
              `(SELECT AVG(activities_rating) from rating WHERE city_id=${sqlString})`
            ),
            "cityActivitiesRating",
          ],
        ],
      },
    });
    res.status(200).json(ratingsData);
    console.log("rating Data", ratingsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newCity = await City.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCity);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
