const mongoose=require('mongoose');
const ContactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
     number:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    date:{
       type:Date,
       default:Date.now
    }
});

module.exports=mongoose.model('Contacts',ContactSchema);