const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("../Model/bookdata");

booksRouter.get('',function(req,res){
    
    Bookdata.find()
                .then(function(Books){
                    res.send(Books);
                });
});


booksRouter.get('/:id',  (req, res) => {
  
  const id = req.params.id;
    Bookdata.findOne({"_id":id})
    .then((Books)=>{
        res.send(Books);
    });
})



module.exports = booksRouter;