
//引入框架
var Sequelize = require('sequelize');
//初始化链接（支持连接池）
var sequelize = new Sequelize(
    'kindergarten',
    'root',
    '',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
)
//定义数据模型Model
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define("t_students", {
//       name : DataTypes.STRING,
//       birthday : DataTypes.DATE,
//       gender : DataTypes.BOOLEAN,
//       idcard : DataTypes.STRING,
//       picture_url : DataTypes.STRING,
//       address : DataTypes.STRING,
//       keepername : DataTypes.STRING,
//       relation : DataTypes.STRING,
//       phonenum : DataTypes.STRING,
//       qq : DataTypes.STRING,
//       weixin : DataTypes.STRING,
//       classId : DataTypes.STRING,
//   })
// }

var Course = sequelize.define('t_courses', {
      name : Sequelize.STRING,
      description : Sequelize.STRING,
      price : Sequelize.INTEGER,
      period : Sequelize.STRING
})
//添加数据
/*
{
    name: '陈俊帆',
    birthday: new Date(1980, 6, 20),
    gender: true,
    idcard: '6201041234561962',
    picture_url: './test/test.png',
    address: '兰州市七里河区',
    keepername: '大大',
    relation: '父子',
    phonenum: '18119343172'
}
*/
var save = function(course){
  return new Promise(function(resolve,reject){
    sequelize.sync().then(function() {
        return Course.create(course);
    }).then(function(result) {
        resolve({answer:'success'});
    }).catch(function (err) {
        reject(err);
    });
  })

}

//查询所有数据
var findAll = function(){
  return new Promise(function(resolve,reject){
    Course.findAndCountAll({}).then(function(result) {
      resolve(result);
    }).catch(function(err){
      reject(err);
    });
  })
}
// findAll();

//根据id查找数据
var findById = function(id){
  return new Promise(function(resolve,reject){
     Course.findById(id).then(function(result) {
      resolve(result);
      // project 是一个 Project 实例，且包含存储在数据中的数据
      // 当不存在 id 为123的记录时 project 为 null
    }).catch(function(err){
      reject(err);
    })
  })
}

//修改数据
var update = function(course,id){
  return new Promise(function(resolve,reject){
    Course.update(course,{'where':{'id':id}})
    .then(function(result){
      resolve({answer:'success'});
    }).catch(function(err){
      reject(err);
    });
  })

}
//所需参数
// update({'name':'李斌'},6);

//删除数据
var Delete = function(id){
  return new Promise(function(resolve,reject){
    Course.destroy({'where':{'id':id}})
    .then(function(result){
      resolve({answer:'success'});
    }).catch(function(err){
      reject(err);
    });
  })

}
// Delete(5)
module.exports = {
  findAll:findAll,
  save:save,
  findById:findById,
  delete:Delete,
  update:update
}
