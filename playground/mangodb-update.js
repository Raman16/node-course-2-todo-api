const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect..');
    }
    console.log('Connected...');
   
  db.collection('Todos').findOneAndUpdate({
      _id:new ObjectID('5a7f38d8e9d4217a97333220')
  },{
      $set:{completed:false},
    },
    {
        returnOriginal:false//returns the updated document rather than the original
    }).then((res)=>{
        console.log(res);
    });



});