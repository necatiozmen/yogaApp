const router = require('express').Router();
const axios = require('axios');
const controller = require('../controllers/controller');

//gets keyword from SearchBar and get studios from yelp
router.post('/search', controller.searchStudios);

//get the users reviews from yelp
router.post('/reviews', controller.getReviews);

// create a profile for personelinstructor
router.post('/profilecreate', controller.profileCreate);

//get all profiles list database
router.get('/listinstructors', controller.listinstructors);

module.exports = router;
