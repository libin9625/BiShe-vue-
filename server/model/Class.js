//引入框架
var Sequelize = require('sequelize');

//初始化链接（支持连接池）
var sequelize = new Sequelize(
    'kindergarten',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

// var Student = sequelize.import("./Student.js");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("t_classes", {
      name:Sequelize.STRING,
      teacherId:Sequelize.STRING
  })
}
