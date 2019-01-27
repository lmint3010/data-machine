const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const engSchema = new Schema({
  uid: String,
  content: String
});

module.exports = mongoose.model('eng', engSchema, 'eng');