const router = require('express').Router();
const axios = require('axios');
const multer  = require('multer');

const controller = require('../controllers/controller');


// const storage = multer.diskStorage({
//   destination: './Users/necatiozmen/desktop/imgtest',
//   filename(req, file, cb) {
//     cb(null, `${new Date()}-${file.originalname}`);
//   },
// });


const upload = multer({ dest:'/Users/necatiozmen/Desktop/imgtest' });

//gets keyword from SearchBar and get studios from yelp
router.post('/search', controller.searchStudios);

//get the users reviews from yelp
router.post('/reviews', controller.getReviews);

// create a profile for personelinstructor
router.post('/profilecreate', controller.profileCreate);

//get all profiles list database
router.get('/listinstructors', controller.listinstructors);





router.post('/test', upload.single('file'), controller.test);

router.get('/test2',  controller.test2);

module.exports = router;
