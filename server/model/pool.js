
//引入框架
var Sequelize = require('sequelize');
//初始化链接（支持连接池）
var pool = global.pool;
if(!pool){
    var pool = new Sequelize(
        'kindergarten',
        'root',
        '',
        {
            host: 'localhost',
            dialect: 'mysql'
        }
    )
    global.pool = pool;
}
