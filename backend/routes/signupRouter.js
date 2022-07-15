const express = require('express'); 
const signupRouter = express.Router();
var userData=require('../Model/user');

signupRouter.post('',function(req,res){
   
    console.log(req.body);
   
    var Users = {       
      Username : req.body.Users.username,
      Email : req.body.Users.email,
      Password : req.body.Users.password
   }       
   var Users = new userData(Users);
   Users.save();
  });
  
  module.exports=signupRouter;