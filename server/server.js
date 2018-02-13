var express= require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb')
var {mongoose}=require('./db/mongoose');
var {Users}=require('./model/Users');
var {Todos}=require('./model/Todos');


var app=express();

const port=process.env.PORT || 3000;

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
});

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todos.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
            
    },((err)=>{
        return res.status(400).send();
    }));

})

app.listen(port ,()=>{
   console.log(`Started on  port  ${port}`  );   
})