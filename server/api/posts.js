const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const postModel = require('../db/models/posts');
const Promise = require('bluebird').Promise;
const db = mongoose.connection;

router.get('/', (req, res) => {
  return new Promise((resolve, reject) => {
    postModel.find({}, '', {
      limit: 10, 
      sort: {
          _id: -1,
      }
    }, (err, posts) => {
      if (err) reject(err);
      resolve(posts);
    })
  })
  .map((post) => {
    require('./users').findOne(post.userId, (err, user) => {
      

    });
  })
  .catch(err => (res.send(err)));
});

router.post('/', (req, res) => {
  const post = new postModel(req.body);
  user.save((err) => {
    if (err) res.send(err);
    res.send({ success: true });
  });

});

module.exports = router;