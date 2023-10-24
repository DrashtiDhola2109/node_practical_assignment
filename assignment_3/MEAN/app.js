var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/cart');

mongoose.connect('mongodb://127.0.0.1:27017/shoppingcart')
.then(()=>{console.log("connection established")})
.catch(()=>{console.log("connection error")})




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


const corsOptions = {
  origin: 'http://localhost:4200', // Replace with the origin of your Angular app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies and credentials
  optionsSuccessStatus: 204, // Return a 204 No Content response for preflight requests
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cart', usersRouter);


app.listen(3000,() => {console.log('listening on http://localhost:3000')})

module.exports = app;
