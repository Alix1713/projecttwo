const router = require("express").Router();

const menuroutes = require('./menuroutes');
// const wineroutes =require('./wine-routes');
const userroutes = require('./user-routes');
router.use('/menu', menuroutes);
// router.use('/wine', wineroutes);
router.use('/users', userroutes);
// const userroutes = require('./user-routes');
router.use("/menu", menuroutes);

// router.use('/users', userroutes);

module.exports = router;
