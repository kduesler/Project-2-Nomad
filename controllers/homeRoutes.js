const router = require('express').Router();
const { City, Comment, Rating, User } = require("../models");

router.get('/', async (req, res) => {
    try {
      // Get all blogs and JOIN with user data
      const cityData = await City.findAll(
        // {
        //     include: [
        //       {
        //         model: Comment, Rating
        //         // attributes: ['comment'],
        //       },
        //     ],
        //   }
      );
  
      // Serialize data so the template can read it
    //   const cities = cityData.map((city) => city.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      
      res.json(cityData);
      console.log(cityData);
    //   res.render('homepage', { 
    //     cities, 
    //   });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

