var mongoose=require('mongoose');
var Users=mongoose.model('Users',{
    name:{
        type:String,
        require:true,
         minlength:1
     },
     email:{
         type:String,
         require:true,
         minlength:6,
         unique: true,
         trim:true

     }
});

module.exports={Users};