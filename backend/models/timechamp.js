const mongoose = require('mongoose');
const reviewtwoSchema = new mongoose.Schema({
    

    employeeIdTwo: String,
    systemNoTwo: String,
    systemTypeTwo: String,
    unitNoTwo: String,
    emailID: String,
    floorNoTwo: String,
    teamNameTwo: String,
    priorityTwo: String,
    issueDateTwo: String,
    descriptionTwo: String,
    accepted: {
      type: Boolean,
      default: false
    },
    resolved: {
      type: Boolean,
      default: false
    }
  });
  const ReviewTwo = mongoose.model('Reviewtwo', reviewtwoSchema);

module.exports = ReviewTwo;
