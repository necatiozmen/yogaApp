const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('dotenv').config();

mongoose.connect(process.env.mongoURL);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to database');});


  module.exports = {
    db,
    Schema,
    mongoose
  }
