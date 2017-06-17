const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const User = new mongoose.Schema({
  first_name: String,
  last_name: String,  
  profile_pic: String,
  password: String,
  favorited_posts: [ObjectId],
});

module.exports = mongoose.model('User', User);