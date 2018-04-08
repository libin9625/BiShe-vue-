let express = require('express');
let route = express.Router();
let NoticeDB = require('../model/NoticeDB');

// 查询所有
route.get('/findAll',(req,resp)=>{
    NoticeDB.findAll().then(function(result){
      resp.send(result);
    }).catch(function(err){
      console.log(err);
    })
});

//单个查询
route.get('/findById',(req,resp)=>{
  NoticeDB.findById(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//删除
route.get('/delete',(req,resp)=>{
  NoticeDB.delete(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//修改
route.post('/update',(req,resp)=>{
  NoticeDB.update(req.body,req.body.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//添加
route.post('/save',(req,resp)=>{
  NoticeDB.save(req.body).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

module.exports = route;
