var express= require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Users}=require('./model/Users');
var {Todos}=require('./model/Todos');


var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
   //console.log(req.body);
   var todo=new Todos({
       text:req.body.text
   });
   todo.save().then((doc)=>{
       //console.log('Todo created'+doc);
       res.status(400).send(doc)
   },(err)=>{
      // console.log('Error in creating Todo:'+err);
      res.send(err);
   });

});


app.get('/todos',(req,res)=>{
    
    Todos.find().then((todos)=>{
    res.send({
        todos
    });
   });
},(err)=>{
    console.log('unable to get'+err);
})

app.listen(3016,()=>{
   console.log('Started on  port 3000');   
})