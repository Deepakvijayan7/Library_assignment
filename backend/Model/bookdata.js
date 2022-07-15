const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Librays');
const Schema = mongoose.Schema;
const MONGODB_URI='mongodb+srv://admin:1234@cluster0.uoaf66f.mongodb.net/Libraryapp?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI ,{ useNewUrlParser: true ,useUnifiedTopology: true});

var BookdataSchema = new Schema({
    Bookname: String,
    Author:String,
    Description:String,
    Bookpic:String
});

var Bookdata = mongoose.model('booksdata', BookdataSchema);                 

module.exports = Bookdata;