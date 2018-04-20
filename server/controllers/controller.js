const yelp = require('yelp-fusion');
const Profiles = require('../models/profile-schema');
const client = yelp.client(process.env.APIKEY);
require('dotenv').config();

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

exports.profileCreate = (req, res) => {
  const newProfile = new Profiles({
    name: req.body.name,
    phone: req.body.phone,
  });
  newProfile.save()
  .then(profile => res.send(profile))
  .then(() => res.status(201))
  .catch(() => {
    res.status(400).send(
      'Parameters not accepted'
    );
  });
};

exports.listProfiles = (req, res) => {
  Profiles.find()
  .then(profiles => res.send(profiles))
  .catch(() => {
    res.status(500).send(
      'SERVICE UNAVAILABLE'
    );
  });
};
