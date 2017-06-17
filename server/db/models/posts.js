const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const postSchema = new mongoose.Schema({
  userId: ObjectId,
  article: String,
  favorite_count: Number,
  cover_background: String,
});

module.exports = mongoose.model('Post', postSchema);