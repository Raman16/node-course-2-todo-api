const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect..');
    }
    console.log('Connected...');
   
  db.collection('Users').findOneAndUpdate({
      _id:new ObjectID('5a7eb72f0c11a35f25ffede9')
  },{
      $inc:{age:1}
    },
    {
        returnOriginal:false//returns the updated document rather than the original
    }).then((res)=>{
        console.log(res);
    });



});