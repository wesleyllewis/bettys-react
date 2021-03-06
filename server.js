const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const cors = require('cors');

// Api Routes
const users = require('./routes/api/users');
const calendarItem = require('./routes/api/calendarItems');
const foodItem = require('./routes/api/foodItems');
const photoItem = require('./routes/api/photoItems');

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS middleware
app.use(cors());

//Db Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use routes
app.use('/api/users', users);
app.use('/api/calendarItems', calendarItem);
app.use('/api/foodItems', foodItem);
app.use('/api/photoItems', photoItem);

//Server Static Assets if in Prod
if (process.env.NODE_ENV === 'production') {
  //Set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
