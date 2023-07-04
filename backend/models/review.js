const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    
    employeeName: String,
    employeeId: String,
    emailId: String,
    systemNo: String,
    systemType: String,
    systemTypetwo: String,
    unitNo: String,
    floorNo: String,
    teamName: String,
    teamManager: String,
    priority: String,
    issueDate: String,
    description: String,
    accepted: {
      type: Boolean,
      default: false
    },
    resolved: {
      type: Boolean,
      default: false
    }
  });
  const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
