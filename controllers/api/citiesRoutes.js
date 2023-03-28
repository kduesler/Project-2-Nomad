const router = require("express").Router();
const { City, Comment, Rating } = require("../../models");

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

  module.exports = router;