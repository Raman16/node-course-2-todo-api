const {ObjectID}=require('mongodb');
var {mongoose}=require('./../server/db/mongoose');
var {Todos}=require('./../server/model/Todos');

//var id='5a80630bf09697623e01df7e';
//In mongoose we need no need to use ObjectID(id), it automatically call that constructor
Todos.find({_id:id}).then((todos)=>{
    console.log('Todos(find)'+todos);
});

Todos.findOne({_id:id}).then((todo)=>{
    console.log('Todos(findOne)'+todo);
});

if(!ObjectID.isValid(id)){
    console.log('ID is not valid');
   }

Todos.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id not found...');
    }
    console.log('Todos(findById)'+todo);
}).catch((err)=>{
  console.log(err)
});


