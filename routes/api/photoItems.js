const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validatePhotoItem = require('../../validation/photoItem');

// Load PhotoItem Model
const PhotoItem = require('../../models/PhotoItem');
// Load User Model
const User = require('../../models/User');

// @route  GET api/photoItems/test
// @desc   Tests photoItems route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'PhotoItems works' }));

// @route  GET api/photoItems
// @desc   Get all photos
// @access Public
router.get('/', (req, res) => {
  PhotoItem.find()
    .sort({ date: -1 })
    .then(photoItem => res.json(photoItem))
    .catch(err => res.status(404).json({ noitemsfound: 'No photos found' }));
});

// @route  GET api/photoItems/:id
// @desc   Get photo by id
// @access Public
router.get('/:id', (req, res) => {
  PhotoItem.findById(req.params.id)
    .then(photoItem => res.json(photoItem))
    .catch(err =>
      res.status(404).json({ notitemfound: 'No photo with that id' })
    );
});

module.exports = router;
