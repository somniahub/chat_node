//引入mongoose模块
let mongoose = require('mongoose');

//连接数据库
//数据库的URL
mongoose.connect('mongodb://localhost:27017/localhost_27017');

//设置连接成功时要执行的回调函数
mongoose.connection.on('connected', function () {
    console.log('数据库连接成功!');
});