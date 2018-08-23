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
      name: req.user.name
    });
    newCalendarItem.save().then(calendarItem => res.json(calendarItem));
  }
);

module.exports = router;
