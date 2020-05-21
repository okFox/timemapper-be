const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  userId: String, //number?  reference?
  blockName: String,
  color: String,
  description: String,
  timeUnitInMin: Number,
  hours: Number,
  totalMin: Number
});

//statics and queries go here

module.exports = mongoose.model('Block', blockSchema);


