let express = require('express');
let route = express.Router();
let StudentDB = require('../model/StudentDB');

// 查询所有
route.get('/findAll',(req,resp)=>{
    StudentDB.findAll().then(function(result){
      console.log('success');
      resp.send(result);
    }).catch(function(err){
      console.log('error');
      console.log(err);
    })
});

//添加
route.post('/save',(req,resp)=>{
  console.log('获取到数据');
  console.log(req.body);
    // StudentDB.save().then(function(result){

    // })
})

module.exports = route;
