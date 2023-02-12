
// 1.引入mongoose
let mongoose = require("mongoose")
// 2.连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test")
mongoose.connection.once("open", function () {
  console.log('数据库连接成功！！')
})

// 将mongoose.schema 赋值给一个变量
var schema = mongoose.Schema

// 创建 schema (模式) 对象
var stuSchema = new schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    default:"female"
  },
  address:String
})

// 通过schema 来创建 model
// model 代表的是数据库中的集合，通过model才能对数据库进行操作
// mongoose.model("modelName",schema)
// modelName 表示 要和数据库中集合名映射的,mongoose 回自动将集合名变成复数
var StuModel = mongoose.model("student", stuSchema)

// 向数据库中插入一个文档化
// StuModel.create(doc,function(){})
StuModel.create({
  name: "白骨精",
  age: 22,
  address:"白骨洞"
}, function (err) {
  if (!err) {
    console.log(err)
  }
})
