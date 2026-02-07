//引入mongoose
let mongoose = require("mongoose");
//创建目标模型对象

let userSchema = new mongoose.Schema({
    name: String,
    pwd: String,
});

//建立模型对象与集合的关联关系
let userModel = mongoose.model("userModel", userSchema, "user");