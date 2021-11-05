const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage");

  //res.render handlebars here review previous activity!!
});
router.get("/menu", async (req, res) => {
  res.render("menu");
});

router.get("/user", async (req, res) => {
  res.render("user");
});

router.get("/wine", async (req, res) => {
  res.render("wine");
});

router.get("/event", async (req, res) => {
  res.render("event");
});

router.get("/guest", async (req,res) => {
  res.render("guest");
});

module.exports = router;
