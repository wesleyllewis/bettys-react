const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  photoURL: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = PhotoItem = mongoose.model('photoItem', PhotoItemSchema);
