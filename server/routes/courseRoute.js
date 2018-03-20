let express = require('express');
let route = express.Router();
let CourseDB = require('../model/CourseDB');

// 查询所有
route.get('/findAll',(req,resp)=>{
    CourseDB.findAll().then(function(result){
      resp.send(result);
    }).catch(function(err){
      console.log(err);
    })
});

//单个查询
route.get('/findById',(req,resp)=>{
  CourseDB.findById(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//删除
route.get('/delete',(req,resp)=>{
  CourseDB.delete(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//修改
route.post('/update',(req,resp)=>{
  CourseDB.update(req.body,req.body.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//添加
route.post('/save',(req,resp)=>{
  CourseDB.save(req.body).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

module.exports = route;
