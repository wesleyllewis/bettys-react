const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = FoodItem = mongoose.model('foodItem', FoodItemSchema);
