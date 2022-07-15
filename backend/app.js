var express=require('express');
var Bookdata=require('./Model/bookdata');
var bodyparser=require('body-parser');
var app=new express();
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
var path=require('path');


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/bookss',function(req,res){
    
    Bookdata.find()
                .then(function(Books){
                    res.send(Books);
                });
});

app.put('/update',(req,res)=>{
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


app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
      Bookdata.findOne({"_id":id})
      .then((Books)=>{
          res.send(Books);
      });
  })

app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})

const loginRouter=require('./routes/loginRouter');
const signupRouter=require('./routes/signupRouter');
// const booksRouter=require('./routes/booksRouter');
const removeBooksRouter=require('./routes/removeBooksRouter');
// const editBooksRouter=require('./routes/editBookRouter');
const newBooksRouter=require('./routes/newBooksRouter');


app.use("/login", loginRouter);
app.use("/register", signupRouter);
// app.use("/bookss", booksRouter);
app.use("/remove", removeBooksRouter);
// app.use("/update", editBooksRouter);
app.use("/insert", newBooksRouter);




// function verifyToken(req, res, next) {
//   if(!req.headers.authorization) {
//     return res.status(401).send('Unauthorized request')
//   }
//   let token = req.headers.authorization.split(' ')[1]
//   if(token === 'null') {
//     return res.status(401).send('Unauthorized request')    
//   }
//   let payload = jwt.verify(token, 'secretKey')
//   if(!payload) {
//     return res.status(401).send('Unauthorized request')    
//   }
//   req.userId = payload.subject
//   next()
// }

const PORT = (process.env.PORT || 3000);
app.listen(PORT, function(){
    console.log('listening to port ' +PORT);
});
