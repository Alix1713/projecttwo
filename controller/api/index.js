const router = require("express").Router();

const menuroutes = require("./menuroutes");

// const userroutes = require('./user-routes');
router.use("/menu", menuroutes);

// router.use('/users', userroutes);

module.exports = router;
