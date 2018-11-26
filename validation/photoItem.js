const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePhotoItemInput(data) {
  let errors = {};

  data.photoURL = !isEmpty(data.photoURL) ? data.photoURL : '';
  data.caption = !isEmpty(data.caption) ? data.caption : '';

  if (Validator.isEmpty(data.photoURL)) {
    errors.photoURL = 'URL is Required';
  }

  if (!Validator.isURL(data.photoURL)) {
    errors.photoURL = 'A valid URL is Required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
