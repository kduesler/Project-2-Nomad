const router = require("express").Router();
const { City, Comment, Rating } = require("../../models");
const withAuth = require("../../utils/auth");

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
      const cities = cityData.map((city) => city.get({ plain: true }));
      res.render("entry", {
        cities
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/', withAuth, async (req, res) => {
    try {
      const newRating = await Rating.create({
        ...req.body
      });
  
      res.status(200).json(newRating);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;
  