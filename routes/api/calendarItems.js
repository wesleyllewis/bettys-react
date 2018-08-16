const express = require("express");
const router = express.Router();

//Load CalendarItem Model
const CalendarItem = require("../../models/CalendarItem");

// @route  GET api/calendarItems/test
// @desc   Tests calendarItems route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "CalendarItems works" }));

module.exports = router;
