const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cityRoutes = require('./citiesRoutes');

router.use('/users', userRoutes);
router.use('/cities', cityRoutes);

module.exports = router;