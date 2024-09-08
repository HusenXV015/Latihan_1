const { Favourite, Hero } = require('../models');

class favouriteController {
  static async getFavourites(req, res, next) {
    try {
      const {userId} = req.loginInfo;
      const favourites = await Favourite.findAll({
        where: {userId}, 
        include: Hero 
      });
      res.status(200).json(favourites);
    } catch (err) {
      next(err);
    }
  }

  static async addFavourite(req, res, next) {
    try {
      const { heroId } = req.params;
      const { userId } = req.loginInfo

      const hero = await Hero.findByPk(heroId);
      if (!hero) throw { status: 404, message: 'Hero not found' };

      const favourite = await Favourite.create({ heroId, userId });
      res.status(201).json(favourite);
    } catch (err) {
      next(err);
    }
  }

  static async updateFavourite(req, res, next) {
    try {
      const { id } = req.params;
      const { role, power } = req.body;

      const favourite = await Favourite.findByPk(id);
      if (!favourite)  
        {return res.status(404).json({ message: 'Favourite not found.' });};

      favourite.role = role 
      favourite.power = power 

      await favourite.save();
      res.status(200).json({ message: 'Hero has been updated', 
        favourite });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = favouriteController;
