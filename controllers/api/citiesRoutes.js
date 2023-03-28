const router = require("express").Router();
const { City, Comment, Rating } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try{
    
    const cityData = await City.findAll({
      include: [
        {
          model: Comment,
        }
      ]
    });
    const cities = cityData.map((city) => city.get({ plain: true }));
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