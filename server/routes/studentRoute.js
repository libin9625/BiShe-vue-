let express = require('express');
let route = express.Router();
let StudentDB = require('../model/StudentDB');

// 查询所有
route.get('/findAll',(req,resp)=>{
    StudentDB.findAll().then(function(result){
      resp.send(result);
    }).catch(function(err){
      console.log(err);
    })
});

//单个查询
route.get('/findById',(req,resp)=>{
  StudentDB.findById(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//删除
route.get('/delete',(req,resp)=>{
  StudentDB.delete(req.query.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//修改
route.post('/update',(req,resp)=>{
  StudentDB.update(req.body,req.body.id).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//添加
route.post('/save',(req,resp)=>{
  StudentDB.save(req.body).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

//按性别查找
route.get('/findByGender',(req,resp)=>{
  StudentDB.findByGender(req.query.gender).then(function(result){
    resp.send(result);
  }).catch(function(err){
    resp.send(err);
  })
})

module.exports = route;
