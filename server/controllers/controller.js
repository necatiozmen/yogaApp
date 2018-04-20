const yelp = require('yelp-fusion');
require('dotenv').config();
const client = yelp.client(process.env.APIKEY);



exports.searchStudios = (req, res) => {
  client.search({
    term: 'yoga',
    location: req.body.location,
  })
  .then(response => {
    res.send(response.jsonBody.businesses);
  })
  .catch(e => {
    console.log(e);
  });
};

exports.listStudios = (req, res) => {

};

// exports.getReviews = (req, res) => {
//   console.log(req.body.alias);
//   client.reviews('good-vibes-covent-garden-london-2').then(response => {
//     console.log(response.jsonBody.reviews[0].text);
//   }).catch(e => {
//     console.log(e);
//   });
// };
