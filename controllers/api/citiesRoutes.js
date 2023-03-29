const router = require("express").Router();
const { City, Comment, Rating } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try{
    
    const cityData = await City.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
        },
        {
          model: Rating
        }
      ]
    });
    const cities = cityData.get({ plain: true });
    
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
      // push updates to newCities
    }
    
    res.render("cityname", {
      cities
    });
  }
 catch (err) {
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