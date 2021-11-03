const router = require('express').Router();
const { Menu, Wine, User } = require('../../models');
console.log(Menu);
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
router.get('/:id', async (req, res) => {
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
    } catch (err) {
res.status(400).json(err);
  }
  });

//post menu item
  router.post('/', async (req, res) => {
    try {
      const menuData = await Menu.create(req.body);
      res.status(200).json(menuData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // UPDATE a menu item
router.put('/:id', async (req, res) => {
  try {
    const menuData = await Menu.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!menuData[0]) {
      res.status(404).json({ message: 'No menu item with this id!' });
      return;
    }
    res.status(200).json(menuData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // DELETE a menu item nobody likes your gluten free rice cakes KAREN
  router.delete('/:id', async (req, res) => {
    try {
      const menuData = await Menu.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!menuData) {
        res.status(404).json({ message: 'No menu item with this id!' });
        return;
      }
      res.status(200).json(menuData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;