const router = require('express').Router();
const { Menu, Wine, Guests } = require('../../models');

// GET one menu item
router.get('/menu/:id', async (req, res) => {
    try {
      const menuData = await menu.findByPk(req.params.id, {
        include: [
          {
            model: dish,
            attributes: [
              'id',
              'dish',
              'guest',
              'description',
            ],
          },
        ],
      });
  
      const guests = guestData.get({ plain: true });
      res.render('guest', {
        guests,
        countVisit: req.session.countVisit,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // GET one wine
  router.get('/wine/:id', async (req, res) => {
    try {
      const wineData = await wine.findByPk(req.params.id);
  
      const wine = wineData.get({ plain: true });
  
      res.render('wine', {
        wine,
        countVisit: req.session.countVisit,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;