const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateFoodItemInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.price = !isEmpty(data.price) ? data.price : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Item name is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Item price is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
