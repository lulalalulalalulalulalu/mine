"use strict"
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//加载路由控制
var index = require('./routes/index');
// var users = require('./routes/users');

//创建项目实例
var app = express();

// view engine setup
//定义EJS模板引擎和模板文件位置，也可以使用jade或其他模型引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//定义日志和输出级别
app.use(logger('dev'));
//定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//定义cookie解析器
app.use(cookieParser());
//定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

//匹配路径和路由
app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
//404错误处理
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};  //开发环境为err，生产环境为空对象

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//输出模型app
module.exports = app;
