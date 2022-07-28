const router = require('express').Router();

const testRoute = require('./routes/test');
const userRoute = require('./routes/userdetails');

router.use('/test', testRoute);
router.use('/user', userRoute);


module.exports = router;
