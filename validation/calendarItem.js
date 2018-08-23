const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCalendarItemInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.text = !isEmpty(data.text) ? data.text : '';
  data.date = !isEmpty(data.date) ? data.date : '';
  data.time = !isEmpty(data.time) ? data.time : '';
  data.image = !isEmpty(data.image) ? data.image : '';

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = 'Post must be between 20 and 300 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.text = 'Event title is required';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Event text is required';
  }

  if (Validator.isEmpty(data.date)) {
    errors.date = 'Event date is required';
  }

  if (Validator.isEmpty(data.time)) {
    errors.time = 'Event time is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
