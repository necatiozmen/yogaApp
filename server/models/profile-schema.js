const db = require('../db');
const profileSchema = new db.Schema({
  name: { type: String, required: true },
  surname: { type: String },
  city: { type: String },
  language: { type: String },
  certification: { type: String },
  gender: { type: String },
  specialities: { type: Array },
  phone: { type: Number, default: Math.random() },
  datapicker: { type: Date },
  experience: { type: String },
  rate: { type: Number, default: Math.random() },
  refId: { type: Number },
  image: { data: Buffer, contentType: String },
  imageUrl: { type: String },
});

const Profiles = db.mongoose.model('Profiles', profileSchema);
module.exports = Profiles;
