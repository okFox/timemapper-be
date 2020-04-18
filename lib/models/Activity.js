const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  activityName: String,
  duration: Number,
  color: String,
  description: String,
  position: {
    x: Number,
    y: Number
  }
});

//statics and queries go here

module.exports = mongoose.model('Activity', activitySchema);
