/*
Homework 2
Author: Sizhe Liu
NOTE: if client does not enter any non-white space on the title of a document,
on index page, this document will be treated as no title, thus be given
"empty_title" in order to be rendered/displayed on the index page because I use hyperlink
approach to let client access detail page of each document in the database. Please
note that this is only for display purpose. In the database, a document with empty
title or only white space title will still be stored the way it is created.
 */

//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var documentRouter = require('./routes/document');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/document', documentRouter);

// this is my root page
app.get('/', (req, res) => {
  res.render('/index', { title: 'Welcome welcome!' })
})

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
