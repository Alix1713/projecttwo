const router = require('express').Router();
const { Menu, Wine, Guests } = require('../../models');

 
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


  router.post('/wine/;id', async(req,res) => {
        try {
          const wineData = await Wine.create(req.body);
          res.status(200).json(wineData);
        } catch (err) {
          res.status(400).json(err);
        }
      });
  }