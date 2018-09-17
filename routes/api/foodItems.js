const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateFoodItem = require('../../validation/foodItem');

// Load FoodItem Model
const FoodItem = require('../../models/FoodItem');
// Load User Model
const User = require('../../models/User');

// @route  GET api/foodItems/test
// @desc   Tests foodItems route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'FoodItems works' }));

// @route  GET api/foodItems
// @desc   Get all foodItems
// @access Public
router.get('/', (req, res) => {
  FoodItem.find()
    .sort({ itemName: 1 })
    .then(foodItems => res.json(foodItems))
    .catch(err =>
      res.status(404).json({ noitemsfound: 'No food items found' })
    );
});

module.exports = router;
