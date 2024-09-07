const router = require('express').Router();
const usercontrollers = require(`../controllers/UserControllers`)
const heroController = require(`../controllers/HerosControllers`)
const favouriteController = require(`../controllers/FavouriteControllers`)
const authentication = require('../middleware/authentication')
const errorHandler = require('../middleware/errorHandler');

router.post(`/login`, usercontrollers.login)
router.post(`/register`, usercontrollers.register),

router.use(authentication)
router.get(`/heroes`, heroController.getAllHeroes)

router.get(`/favourites`, favouriteController.getFavourites)
router.post(`/favourites/:heroId`, favouriteController.addFavourite)
router.put(`/favourite/:id`,favouriteController.updateFavourite)

router.use(errorHandler)
module.exports = router