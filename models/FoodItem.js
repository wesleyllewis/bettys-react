const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  itemName: {
    type: String,
    require: true
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = FoodItem = mongoose.model('foodItem', FoodItemSchema);
