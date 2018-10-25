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
    .sort({ name: 1 })
    .then(foodItem => res.json(foodItem))
    .catch(err =>
      res.status(404).json({ noitemsfound: 'No food items found' })
    );
});

// @route  POST api/foodItems
// @desc   Create FoodItem
// @access Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFoodItem(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    const newFoodItem = new FoodItem({
      name: req.body.name,
      price: req.body.price,
      user: req.user.id
    });
    newFoodItem.save().then(foodItem => res.json(foodItem));
  }
);

// @route  DELETE api/foodItems/:id
// @desc   Delete a foodItem
// @access Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findOne({ user: req.user.id }).then(foodItem => {
      FoodItem.findById(req.params.id).then(foodItem => {
        // Check for item owner
        if (foodItem.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: 'User not authorized' });
        }

        // Delete
        foodItem
          .remove()
          .then(() => res.json({ success: true }))
          .catch(err =>
            res.status(404).json({ itemnotfound: 'No food item found' })
          );
      });
    });
  }
);

module.exports = router;
