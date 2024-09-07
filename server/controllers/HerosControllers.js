const { Hero } = require('../models');

class heroController {
  static async getAllHeroes(req, res, next) {
    try {
      const heroes = await Hero.findAll();
      res.status(200).json(heroes);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = heroController;
