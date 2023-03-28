const router = require("express").Router();
const { City, Comment, Rating } = require("../../models");
// const withAuth = require("../utils/auth");


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
      // homepage reference handlebars
      res.render("entry", {
        cities
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//   router.post('/', async (req, res) => {
//   try {
//     const newComment = await Comment.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newComment);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post('/', async (req, res) => {
    try {
      const newRating = await Rating.create({
        ...req.body
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;
  