const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const langSchema = new Schema({
  uid: String,
  code: String,
  content: String
});

module.exports = mongoose.model('lang', langSchema, 'langs');