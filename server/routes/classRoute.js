let express = require('express');
let route = express.Router();
let ClassDB = require('../model/ClassDB');

// 查询所有
route.get('/findAll',(req,resp)=>{
    ClassDB.findAll().then(function(result){
      resp.send(result);
    }).catch(function(err){
      console.log(err);
    })
});

//单个查询
route.get('/findById',(req,resp)=>{
  ClassDB.findById(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//删除
route.get('/delete',(req,resp)=>{
  ClassDB.delete(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//修改
route.post('/update',(req,resp)=>{
  ClassDB.update(req.body,req.body.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//添加
route.post('/save',(req,resp)=>{
  ClassDB.save(req.body).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

module.exports = route;
