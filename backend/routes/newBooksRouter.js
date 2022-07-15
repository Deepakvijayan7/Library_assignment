const express = require("express");
const newBooksRouter = express.Router();
const Bookdata = require("../Model/bookdata");

newBooksRouter.post('', function(req,res){
    var Books = {       
        Bookname : req.body.Books.Bookname,
        Author : req.body.Books.Author,
        Description : req.body.Books.Description,
        Bookpic: req.body.Books.Bookpic
   }       
   var Books = new Bookdata(Books);
   Books.save();
});

module.exports = newBooksRouter;