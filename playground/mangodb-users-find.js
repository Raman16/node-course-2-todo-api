const {MongoClient}=require('mongodb');//Object destructuring...

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
   if(err){
      return console.log(`Unable to connect MangoDB Server....`);
   }
   console.log('Connected to MangoDB Server...');
  db.collection('Users').find({
      name:'Raman'
  }).toArray().then((user)=>{
    console.log('User: '+JSON.stringify(user,undefined,2));

  },(err)=>{
    console.log('unable to fetch:'+err);

  })

   //db.close();
});