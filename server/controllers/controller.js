const yelp = require('yelp-fusion');
const Profiles = require('../models/profile-schema');
const client = yelp.client(process.env.APIKEY);
const multer  = require('multer');
const fs = require('fs');
require('dotenv').config();

exports.searchStudios = (req, res) => {
  client.search({
    term: 'yoga',
    location: req.body.location,
    limit: 40,
  })
  .then(response => {
    res.send(response.jsonBody.businesses);
  })
  .catch(e => {
    console.log(e);
  });
};

exports.getReviews = (req, res) => {
  client.reviews(req.body.alias).then(response => {
    res.send(response.jsonBody.reviews);
  }).catch(e => {
    console.log(e);
  });
};

exports.profileCreate = (req, res) => {
  const newProfile = new Profiles({
    name: req.body.name,
    surname: req.body.surname,
    city: req.body.city,
    refId: req.body.id,
    language: req.body.language,
    certification: req.body.certification,
    gender: req.body.gender,
    specialities: req.body.specialities,
    phone: req.body.phone,
    datapicker: req.body.datepicker,
    experience: req.body.experience,
    rate: req.body.rate,
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

exports.listinstructors = (req, res) => {
  Profiles.find()
  .then(profiles => res.send(profiles))
  .catch(() => {
    res.status(500).send(
      'SERVICE UNAVAILABLE'
    );
  });
};

exports.test = (req, res) => {
  console.log(req.file.path);
  Profiles.findOneAndUpdate({ refId: req.query.id },
  { image: { data: fs.readFileSync(req.file.path),
    contentType: 'image/png', }, })
  .then(profile => res.send(profile))
  .then(() => res.status(201))
  .catch(() => {
    res.status(400).send(
      'Parameters not accepted'
    );
  });
};
