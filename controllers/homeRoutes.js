const router = require("express").Router();
const { City, Comment, Rating, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const cityData = await City.findAll({
      include: [
        {
          model: Comment,
        },
        {
          model: Rating,
        }
      ]
    });

    // Serialize data so the template can read it
    const cities = cityData.map((city) => city.get({ plain: true }));
    const newCities = [];
    // Pass serialized data and session flag into template
    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      const totalRatings = {
        //...city.ratings[0]
        average_rating: 0,
      };
      for (let j = 0; j < city.ratings.length; j++) {
        const rating = city.ratings[j];
        totalRatings.average_rating += parseFloat(rating.average_rating);
      }
      totalRatings.average_rating = (totalRatings.average_rating/city.ratings.length).toFixed(1)
      city.totalRatings = totalRatings;
      newCities.push(city);
      // push updates to newCities
    }
    // homepage reference handlebars
    res.render("homepage", {
      cities: newCities
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try{
    res.render("login");
  }
 catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

module.exports = router;
