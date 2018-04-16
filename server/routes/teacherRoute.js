let express = require('express');
let route = express.Router();
let TeacherDB = require('../model/TeacherDB');

// 查询所有
route.get('/findAll',(req,resp)=>{
    TeacherDB.findAll().then(function(result){
      resp.send(result);
    }).catch(function(err){
      resp.send(err);
    })
});

//单个查询
route.get('/findById',(req,resp)=>{
  console.log(req.query.id);
  TeacherDB.findById(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//所需参数
// update({'name':'李斌'},6);
//修改
route.post('/update',(req,resp)=>{
  TeacherDB.update(req.body,req.body.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//删除
route.get('/delete',(req,resp)=>{
  TeacherDB.delete(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//添加
route.post('/save',(req,resp)=>{
  TeacherDB.save(req.body).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//按性别查找
route.get('/findByGender',(req,resp)=>{
  TeacherDB.findByGender(req.query.gender).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

module.exports = route;
