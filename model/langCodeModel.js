const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const langCodeSchema = new Schema({
  code: String,
  country: String
});

module.exports = mongoose.model('langCode', langCodeSchema, 'langCodes');