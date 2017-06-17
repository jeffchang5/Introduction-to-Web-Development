const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userModel = require('../db/models/users');
const db = mongoose.connection;

router.get('/', (req, res) => {

  userModel.find({}, '', (err, user) => {
    if (err) res.err(err);
    res.send(user);
  });
});

router.post('/', (req, res) => {
  const user = new userModel(req.body);
  user.save((err) => {
    if (err) res.send(err);
    res.send({ success: true });
  });
});


module.exports = router;
module.exports.findOne = (id, callback) => {
  userModel.findById(id, (err, user) => {

    if (err) callback(err, null);
    callback(null, user);
  });
};