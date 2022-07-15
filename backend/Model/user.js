const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Librays');
const MONGODB_URI='mongodb+srv://admin:1234@cluster0.uoaf66f.mongodb.net/Libraryapp?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI ,{ useNewUrlParser: true ,useUnifiedTopology: true});


var userSchema= new mongoose.Schema({
    Username:String,
    Email:String,
    Password:String
});

var userData=mongoose.model('user',userSchema);
module.exports=userData;