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
//定义数据模型Model
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("t_teachers", {
      name : DataTypes.STRING,
      birthday : DataTypes.DATE,
      gender : DataTypes.BOOLEAN,
      nation : DataTypes.STRING,
      political : DataTypes.STRING
  })
}
