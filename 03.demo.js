
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

var StuModel = mongoose.model("student", stuSchema)
/* 
  - 有了model ,我们就可以对数据库进行正删改查的操作了
  - model.create(doc(s),[callback])
  - 用来创建一个或者多个文档并添加到数据库中
  - 参数：
   doc(s) 可以事一个文档对象，也可以是一个文档对象的数组
   callback 当操作完成就调用回调函数
*/

// 增
/* StuModel.create({
  name: "沙和尚",
  age: 16,
  gender: "male",
  address:"流沙河"
}, function (err) {
  if (!err) {
    console.log(arguments)
  }
})
 */


// 查
/* 
 - 查询所有符合条件的文档
   - Model.find((conditions),[projection],[options],[callback])
   - 返回的是一个数组
   - 根据文档的id属性来查询文档
   - Model.findById((conditions),[projection],[options],[callback])
 - 查询符合条件的第一个文档
   - Model.findOne((conditions),[projection],[options],[callback])
 
   conditions 查询的条件
   projection 投影 需要获取到字段
     - 两种方式
      {name:1,_id:0} //1 表示要 0表示不要
      "name -_id"
   options 查询的选项(skip limit)
   callback 回调函数 查询结果通过回调函数返回
     回调函数比逊传递参数，如果不传参数就是不会查询
   */

// find() 查询
/* StuModel.find({}, {name:1,_id:0}, (err, results) => {
  if (!err) {
    console.log(results)
  }
}) */

// findOne()
/* StuModel.findOne({},  (err, results) => {
  if (!err) {
    console.log(results)
  }
})  */

// 根据id来查找
/* StuModel.findById({_id:"63e60e8fa4724740608e7aab"},  (err, results) => {
  if (!err) {
    console.log(results)
    通过find查询的结果，返回的对象，就是document，文档对象
    // document 对象是model的实例
  }
}) 
 */


// 改
/* 

   - Model.update((conditions),[projection],[options],[callback])
   - Model.updateOne((conditions),[projection],[options],[callback])
   - Model.updateMany((conditions),[projection],[options],[callback]) 
*/

// 修改唐僧的年龄为20
/* StuModel.updateOne({ name: "唐僧" }, { $set: { age: 20 } }, function (err) {
  if (!err) {
  console.log('数据修改成功')
}
})
 */


/* 
Model.remove((conditions,[callback]))
Model.removeONe((conditions,[callback]))
Model.removeMany((conditions,[callback]))
 */
// 删除
StuModel.remove({ name: "唐僧" }, (err) => {
  console.log(err)
})

/* 
Model.count((conditions,[callback]))
*/
// 统计文档的数据
StuModel.count({}, function (err, count) {
  if (!err) {
    console.log(count)
  }
})