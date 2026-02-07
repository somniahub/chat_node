var express = require("express");
var router = express.Router();

//引入mongoose
let mongoose = require("mongoose");

//登录
router.get("/:acc/:pwd", async function (req, res) {
    let { acc, pwd } = req.params;
    console.log(acc, pwd);
    //根据账号查询用户数据
    let re = await mongoose.model("userModel").find({
        name: acc,
    });
    // console.log(re);
    if (re.length < 1) {
        res.send({
            code: 260,
            message: "账号不存在!请先注册!",
        });
    } else {
        if (re[0].pwd == pwd) {
            res.send({
                code: 200,
                message: "登录成功!",
            });
        } else {
            res.send({
                code: 250,
                message: "密码错误!",
            });
        }
    }
});
module.exports = router;