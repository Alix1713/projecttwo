const router = require('express').Router();
const { User } = require('../../models');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const users = await User.findAll({
        include: [
          { model: Post, attributes: ['id', 'title', 'description'] },
          { model: Comment, attributes: ['id', 'post_id', 'comment'] },
        ],
      });

      !users ? res.status(404).send(new Error('Oops!')) : null;

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const created = await User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      });

      !created ? res.status(400).send(new Error('Oops!')) : null;

      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = created.dataValues.id;

        res.status(200).json({
          message: `Created user with username of ${created.username}`,
        });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });