// const router = require('express').Router();
// const { Menu, Wine, Guests } = require('../../models');

//  //get the whole wine list
// router.get('/', async (req, res) => {
//     try {
//       const wineData = await Wine.findAll();
//       res.status(200).json(wineData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
//  // GET one wine
//   router.get('/:id', async (req, res) => {
//     try {
//       const wineData = await wine.findByPk(req.params.id);
  
//       const wine = wineData.get({ plain: true });
  
//       res.render('wine', {
//         wine,
//         countVisit: req.session.countVisit,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

// //post one wine
//   router.post('/:id', async (req, res) => {
//     try {
//       const wineData = await Wine.create(req.body);
//       res.status(200).json(wineData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

//   // UPDATE a wine
// router.put('/:id', async (req, res) => {
//   try {
//     const wineData = await Wine.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!wineData[0]) {
//       res.status(404).json({ message: 'No bottle of wine with this id!' });
//       return;
//     }
//     res.status(200).json(wineData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//   // DELETE a bottle of wine
//   router.delete('/:id', async (req, res) => {
//     try {
//       const wineData = await Wine.destroy({
//         where: {
//           id: req.params.id,
//         },
//       });
//       if (!wineData) {
//         res.status(404).json({ message: 'No bottle of wine with this id!' });
//         return;
//       }
//       res.status(200).json(wineData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   module.exports = router;