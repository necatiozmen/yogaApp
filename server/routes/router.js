const router = require('express').Router();
const controller = require('../controllers/controller');


//gets keyword from SearchBar and changes the location
router.post('/search', controller.searchStudios);

// create a profile for personelinstructor
router.post('/profilecreate', controller.profileCreate);

//get all profiles list database
 router.get('/listprofiles', controller.listProfiles);


// //get individual person profile from list
// router.get('/getpersonprofile', controller.getPersonProfile);


// shows studios on the map
router.get('/showmap', (req, res) => {
  console.log('pins the studio on map');
});



module.exports = router;
