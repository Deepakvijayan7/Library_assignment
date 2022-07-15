const express = require('express'); 
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const userData=require('../Model/user');

loginRouter.post("/",function(req,res){
    var username=req.body.username;
    var password=req.body.password;
  
  userData.findOne({Username:username ,Password:password},function(err,user){
      if(err){
        console.log(err);
        res.status(500).send();
      }
      if(!user){
        res.status(404).send();
      }
      else{
        console.log(user);
      let payload = {subject: username+password}
      let token = jwt.sign(payload, 'secretKey');
      res.status(200).send({token,username});
      }
  })
  });
  
  module.exports = loginRouter;