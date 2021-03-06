const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateCalendarItem = require('../../validation/calendarItem');

// Load CalendarItem Model
const CalendarItem = require('../../models/CalendarItem');
// Load User model
const User = require('../../models/User');

// @route  GET api/calendarItems/test
// @desc   Tests calendarItems route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'CalendarItems works' }));

// @route  GET api/calendarItems
// @desc   Get all calendarItems
// @access Public
router.get('/', (req, res) => {
  CalendarItem.find({ date: { $gt: Date.now() } })
    .sort({ date: 'asc' })
    .then(calendarItems => res.json(calendarItems))
    .catch(err =>
      res.status(404).json({ noitemsfound: 'No calendar items found' })
    );
});

// @route  GET api/calendarItems/:id
// @desc   Get calendarItem by id
// @access Public
router.get('/:id', (req, res) => {
  CalendarItem.findById(req.params.id)
    .then(calendarItem => res.json(calendarItem))
    .catch(err =>
      res
        .status(404)
        .json({ noitemfound: 'No calendar item found with that id' })
    );
});

// @route  POST api/calendarItems
// @desc   Create CalendarItem
// @access Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCalendarItem(req.body);

    // Check validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    const newCalendarItem = new CalendarItem({
      title: req.body.title,
      text: req.body.text,
      date: req.body.date,
      time: req.body.time,
      image: req.body.image,
      user: req.user.id,
      username: req.user.username
    });
    newCalendarItem.save().then(calendarItem => res.json(calendarItem));
  }
);

// @route  DELETE api/calendarItems/:id
// @desc   Delete a calendarItem
// @access Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findOne({ user: req.user.id }).then(calendarItem => {
      CalendarItem.findById(req.params.id).then(calendarItem => {
        // Check for item owner
        if (calendarItem.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: 'User not authorized' });
        }

        // Delete
        calendarItem
          .remove()
          .then(() => res.json({ success: true }))
          .catch(err =>
            res.status(404).json({ itemnotfound: 'No calendar item found' })
          );
      });
    });
  }
);

module.exports = router;
