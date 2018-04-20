const router = require('express').Router();
const controller = require('../controllers/controller');


//gets keyword from SearchBar and changes the location
router.post('/search', controller.searchStudios);




// router.post('/reviews', controller.getReviews);



// shows studios on the map
router.get('/showmap', (req, res) => {
  console.log('pins the studio on map');
});

//show personel instructor list
router.get('/personelinstructor', (req, res) => {
  console.log('personel trainer pages');
});

// create a profile for personelinstructor
router.post('/profilecreate', (req, res) => {
  console.log('create profile and advertise');
});

module.exports = router;
