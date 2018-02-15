var env=process.env.NODE_ENV;//this variable only set on heroku.

const express= require('express');
const _=require('lodash');
const bodyParser=require('body-parser');
const {ObjectID}=require('mongodb')
const {mongoose}=require('./db/mongoose');
const {Users}=require('./model/Users');
const {Todos}=require('./model/Todos');


const app=express();

const port=process.env.PORT || 3022;

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

});

app.delete('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
   Todos.findByIdAndRemove(id).then((todo)=>{
      
       if(!todo){
           return res.status(400).send();
        }
        return res.send({todo});
 
   })
   .catch((err)=>{
      res.status(404).send();
   });
});

app.patch('/todos/:id',(req,res)=>{
    var id=req.params.id;
    var body=_.pick(req.body,['text','completed']);

    if(!ObjectID.isValid(id)){
        return res.status(400).send();
    }
    
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt=new Date().getTime();
    }
    else{
        body.completed=false;
        body.completedAt=null
    }
    
        Todos.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{ //we need to use $set update operatros always to update the docuemnt

            if(!todo){
                return res.status(400).send();
            }
            return res.send(todo);

        })
        .catch((err)=>{
        res.status(404).send();
        });

})


//Users Crud
app.post('/users',(req,res)=>{
   
    var body=_.pick(req.body,['email','password']);
    //var user=new Users({body});//may not work
    var user=new Users(body);
    user.save().then(()=>{
       return  user.generateAuthtoken();
    })
    .then((token)=>{
        res.header('x-auth').send(user);
    })
    .catch((err)=>{
       res.status(400).send(err);
    });
});


app.listen(port ,()=>{
   console.log(`Started on  port  ${port}`  );   
})