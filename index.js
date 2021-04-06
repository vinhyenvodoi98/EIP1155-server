require('dotenv').config();
var express = require('express');
var helmet = require('helmet');
var logger = require('morgan');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var app = express();
var port = process.env.PORT || 3000;
// var configDB = require('./config/database.js');
// var mongoose = require('mongoose');

// configuration ===============================================================
// const connectDB = async () => {
//   await mongoose.connect(
//     configDB.url,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     },
//     (error) => {
//       if (error) console.log('error :', error);
//       else console.log('Connect successfully');
//     }
//   );
//   mongoose.set('useCreateIndex', true);
// };

// connectDB().catch((error) => console.error(error));

// router ===============================================================

const token = require('./routes');

app.use(logger('dev'));

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: '*', // allow to server to accept request from different origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // allow session cookie from browser to pass through
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(helmet());

app.use(
  require('express-session')({
    secret: process.env.EXPRESS_SESSION,
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/', token);

app.listen(port);
console.log('The magic happens on port ' + port);