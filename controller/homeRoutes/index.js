const router = require("express").Router();

router.get("/home", async (req, res) => {
  res.render("homepage");

  //res.render handlebars here review previous activity!!
});
router.get("/menu", async (req, res) => {
  res.render("menu");
});

router.get("/user", async (req, res) => {
  res.render("user");
});

router.get("/event", async (req, res) => {
  res.render("event");
});

router.get("/guest", async (req,res) => {
  res.render("guest");
});

// router.get("/login", async (req, res) => {
//   res.render("/")
// })

module.exports = router;
