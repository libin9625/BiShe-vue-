
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

var User = sequelize.define('t_users', {
      username : Sequelize.STRING,
      password : Sequelize.STRING,
      usertype : Sequelize.STRING,
})

var save = function(user){
  return new Promise(function(resolve,reject){
    sequelize.sync().then(function() {
        return User.create(user);
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
    User.findAndCountAll({}).then(function(result) {
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
     User.findById(id).then(function(result) {
      resolve(result);
      // project 是一个 Project 实例，且包含存储在数据中的数据
      // 当不存在 id 为123的记录时 project 为 null
    }).catch(function(err){
      reject(err);
    })
  })
}

//修改数据
var update = function(clazz,id){
  return new Promise(function(resolve,reject){
    User.update(user,{'where':{'id':id}})
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
    User.destroy({'where':{'id':id}})
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
