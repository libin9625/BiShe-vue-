let express = require('express');
let route = express.Router();
let UserDB = require('../model/UserDB');

// 查询所有
route.get('/findAll',(req,resp)=>{
    UserDB.findAll().then(function(result){
      resp.send(result);
    }).catch(function(err){
      console.log(err);
    })
});

//单个查询
route.get('/findById',(req,resp)=>{
  UserDB.findById(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//删除
route.get('/delete',(req,resp)=>{
  UserDB.delete(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//修改
route.post('/update',(req,resp)=>{
  UserDB.update(req.body,req.body.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//添加
route.post('/save',(req,resp)=>{
  UserDB.save(req.body).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

module.exports = route;
