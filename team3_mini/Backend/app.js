const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

//session
const session = require('express-session');

//Database
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true)

mongoose.connect('mongodb://localhost:27017/team3mini').then((db)=>{

  console.log('Mongodb connected');

}).catch(err=> console.log(err));


//session
app.use(session({
  saveUninitialized:true,
  resave:true,
  secret:'restore',
  store:require('mongoose-session')(mongoose) // 세션들을 저장하는 데이터베이스
})); // req에 session이라는 객체를 생성시켜 

////Middleware
//cors 
const cors = require('cors');
app.use(cors());

//body Parser 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('view engine', 'ejs'); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);




// catch 404 and forward to error handler
//Handling error
app.use((req,res,next)=>{
  const error = new Error('Not found');
  error.status = 404;
  next(error);

});

app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
      error:{
         message: error.message
      }

  });


});

module.exports = app;
