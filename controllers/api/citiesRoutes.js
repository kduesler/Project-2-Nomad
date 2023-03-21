const router = require("express").Router();
const { City } = require("../../models");


router.post("/", /*withAuth,*/ async (req, res) => {
    try {
      const cityData = await City.create(req.body, {
        user_id: req.session.user_id,
      });
  
      res.json(cityData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', /*withAuth,*/ async (req,res) => {
    try {
      const cityData = await City.update(
        {
          title: req.body.title,
          contents: req.body.contents,
        },
        {
          where: {
            id: req.params.id,
            // user_id: req.session.user_id, 
          },
        }
      )
  
      res.json(cityData);
    } catch (err) {
      res.status(400).json(err);
    }
  })

  module.exports = router;