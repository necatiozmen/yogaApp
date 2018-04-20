const db = require('../db');
const profileSchema = new db.Schema({
  name: { type: String, required: true },
  surname: { type: String },
  city: { type: String },
  language: { type: String },
  certification: { type: String },
  phone: { type: Number, default: Math.random() },
  experience: { type: Number, default: Math.random() },
  price: { type: Number, default: Math.random() },
});

const Profiles = db.mongoose.model('Profiles', profileSchema);
module.exports = Profiles;
