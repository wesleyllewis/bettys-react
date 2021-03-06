const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  username: {
    type: String,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String
  }
});

module.exports = CalendarItem = mongoose.model(
  'calendarItem',
  CalendarItemSchema
);
