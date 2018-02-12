var mongoose=require('mongoose');
var Todos=mongoose.model('Todo',{
    text:{
       type:String,
       require:true,
       minlength:1,
       trim:true//removes any whitespaces in the string
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

module.exports={Todos};