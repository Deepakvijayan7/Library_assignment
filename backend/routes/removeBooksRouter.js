const express = require("express");
const removeBooksRouter = express.Router();
const Bookdata = require("../Model/bookdata");

removeBooksRouter.delete('/:id',(req,res)=>{

    id = req.params.id;
    console.log(id);
   Bookdata.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
  })

  
module.exports = removeBooksRouter;