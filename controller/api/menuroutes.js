const router = require('express').Router();
const { Menu, Wine, Guests } = require('../../models');

//get the whole menu
router.get('/', async (req, res) => {
  try {
    const menuData = await Menu.findAll();
    res.status(200).json(menuData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one menu item
router.get('/menu/:id', async (req, res) => {
    try {
      const menuData = await Menu.findByPk(req.params.id, {
        include: [
          {
            model: dish,
            attributes: [
              'id',
              'dish',
              'guest_id',
              'description',
            ],
          },
        ],
      });
  });

  router.post('/', async (req, res) => {
    try {
      const menuData = await Menu.create(req.body);
      res.status(200).json(menuData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

  
  module.exports = router;