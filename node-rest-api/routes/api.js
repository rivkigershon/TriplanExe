const route = require('express').Router()

const cityController = require('../controllers/city');

route.get('/getCities',cityController.getCities)

module.exports = route;