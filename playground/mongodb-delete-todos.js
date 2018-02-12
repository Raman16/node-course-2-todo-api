const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err){
     return console.log('Unable to connect');
 }
 console.log('connected...');

//  db.collection('Todos').deleteMany({
//      text:'eat lunch'
//  }).then((res)=>{
//      console.log(res);
//  },(err)=>{
//      console.log(err);
//  })

// db.collection('Todos').deleteOne({
//     completed:true
// }).then((res)=>{
//     console.log(res);
// },(err)=>{
//     console.log(err);
// })

db.collection('Todos').findOneAndDelete({
    _id:new ObjectID('5a7eb6caa30c6a5efa6d5157')
}).then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
})

//db.close();


})