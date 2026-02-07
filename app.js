var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

//引入集合模型创建代码文件
require("./db/userModel");

//引入后端模块
var usersRouter = require("./routes/users");


// 设置 CORS 允许跨域
var allowCrossDomain = function (req, res, next) {
  // 设置允许哪一个源（域）可以进行跨域访问，* 表示所有源
  res.header("Access-Control-Allow-Origin", "*");
  // 设置允许跨域访问的请求头
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Origin,Content-Type,Accept,Authorization"
  );
  // 设置允许跨域访问的请求类型
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
  // 设置允许 cookie 发送到服务器
  res.header("Access-Control-Allow-Credentials", "true");
  next();
};
app.use(allowCrossDomain);


//配置一级路由
app.use("/users", usersRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(8088, () => { console.log('这是我自己设置的连接成功调用函数 ——app.js'); });
app.listen(3000, function () {
  console.log('服务器启动成功!端口号为3000');
})


require('./mongodb');
