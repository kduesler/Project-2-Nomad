const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbData= await Comment.findAll(
    );
      res.status(200).json(dbData);

    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/render', async (req, res) => {
  try {
    const dbData = await Comment.findByPk(req.params.id);
    
    const projects = dbData.get({ plain: true });
      res.render('homepage', {
      projects,
     });
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!comment) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

