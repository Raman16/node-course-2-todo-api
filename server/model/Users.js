const validator=require('validator');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
var UserSchema=new mongoose.Schema({
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
         trim:true,
         validate:{
           validator:validator.isEmail,
           message:'{value} is not a valid email'
         }

     },


     password:{
         type:String,
         require:true,
         minlength:6
     },

    tokens:[{                    //this is the syntax mango had setup
        //we have token array by mongo, this is not usaully  happens in postgresql...ect
     access:{
         type:String,
         required:true
     },
     token:{
        type:String,
        required:true
    }

    }]
})

UserSchema.methods.generateAuthToken=function(){
    var user=this;
    var access='auth';
    var token=jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
    user.tokens.push({access,token});


    //
   return user.save().then(()=>{
        return token;
    });

}
var Users=mongoose.model('Users',UserSchema);

module.exports={Users};