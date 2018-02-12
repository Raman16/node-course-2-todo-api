//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');//Object destructuring...
//ObjectID->constructor function lets us make new  ObjectID's on the fly....


var obj=new ObjectID();//ccreats a regaulr object Id
console.log(obj);//we can use this ObjectID for any pupose as its a uniqure ID.

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
   if(err){
      return console.log(`Unable to connect MangoDB Server....`);
   }
   console.log('Connected to MangoDB Server...');

//    db.collection('Todos').insertOne({
//       text:'Something to do...',
//       completed:false
//    },(err,res)=>{
//       if(err){
//           return console.log('Unable to insert Todo',err);
//       }
//       console.log(JSON.stringify(res.ops,undefined,2));
//    });

//    db.collection('Users').insertOne({
//      name:'Raman',
//      age:27,
//      location:"Bangalore"
//    },(err,res)=>{
 
//       if(err){
//           return console.log('unable to insert Users',err);
//       }
//       console.log(res.ops[0]._id.getTimestamp());
//    });
   db.close();
});