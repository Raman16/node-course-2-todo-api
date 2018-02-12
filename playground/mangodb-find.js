//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');//Object destructuring...

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
   if(err){
      return console.log(`Unable to connect MangoDB Server....`);
   }
   console.log('Connected to MangoDB Server...');
//    db.collection('Todos').find().count().then((cnt)=>{
//     console.log('Count:'+cnt);
//    },(err)=>{
//     console.log('unable to fetch:'+err);
//    });

 db.collection('Todos').deleteOne({
     text:'Eat lunch'
 }).then((cnt)=>{
     console.log('Count:'+cnt);
   },(err)=>{
     console.log('unable to fetch:'+err);
});


   //db.close();
});