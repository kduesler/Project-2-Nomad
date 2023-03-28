const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cityRoutes = require('./citiesRoutes');
const entryRoutes = require('./entryRoutes');

router.use('/users', userRoutes);
router.use('/cities', cityRoutes);
router.use('/entry', entryRoutes);

module.exports = router;