const express = require("express");
const editBookRouter = express.Router();
const Bookdata = require("../Model/bookdata");


editBookRouter.put('/update',(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  Bookname= req.body.Bookname,
  Author = req.body.Author,
  Description = req.body.Description
 Bookdata.findByIdAndUpdate({"_id":id},
                              {$set:{
                              "Bookname":Bookname,
                              "Author":Author,
                              "Description":Description
                            }})
 .then(function(){
     res.send();
 })
})


editBookRouter.get('/:id',  (req, res) => {
  
  const id = req.params.id;
    Bookdata.findOne({"_id":id})
    .then((Books)=>{
        res.send(Books);
    });
})

module.exports = editBookRouter;