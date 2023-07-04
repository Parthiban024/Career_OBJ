const mongoose = require('mongoose');
const reviewthreeSchema = new mongoose.Schema({
    
    employeeNameThree: String,
    employeeIdThree: String,
    systemNoThree: String,
    floorNoThree: String,
    teamNameThree: String,
    teamManagerThree: String,
    priorityThree: String,
    issueDateThree: String,
    descriptionThree: String,
  });
  const ReviewThree = mongoose.model('Reviewthree', reviewthreeSchema);

module.exports = ReviewThree;
