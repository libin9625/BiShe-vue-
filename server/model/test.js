var Sequelize = require('sequelize');
var sequelize = new Sequelize(
  'kindergarten',
  'root',
  '',
  {
      host: 'localhost',
      dialect: 'mysql'
  }
)

var Student = sequelize.import('./Student.js');
var Teacher = sequelize.import('./Teacher.js');
var Class = sequelize.import('./Class.js');
var Course = sequelize.import('./Course.js');

Class.hasMany(Student,{foreignKey: 'classId'});
Student.belongsTo(Class,{foreignKey:'classId'});
Teacher.belongsTo(Class,{foreignKey: 'teacherId'});
// Class.getStudent({
//   where: {
//       id:1
//   }
// }).then(function(data){
//   console.log(data.name+" 是 "+data.result.name+" 学生");
// }).catch(function(err){
//   console.log('查询失败'+err);
// })
// Student.findAll({
//   where: {
//       id:'1'
//   }
// }).then(function(data){//data是个数组啊
//   console.log(data[getClass]);
// }).catch(function(err){
//   console.log('查询失败'+err);
// })
var include = [{
  model: Class,
 }];
 Student.findOne({include:include}).then((result) => {
  console.log(result.t_student);
 }).catch((err) => {
  console.error(err);
 });

