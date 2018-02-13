var mongoose=require('mongoose');

const REMOTE_MONGO = 'mongodb://<bandariraman>:<r2m2642i@123B>@ds247357.mlab.com:47357/todoapi';
const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
const MONGO_URI = process.env.MONGODB_URI || LOCAL_MONGO;
    
mongoose.Promise=global.Promise;
mongoose.connect(MONGO_URI);
// mongoose.connect(MONGO_URI)
// .then((res)=>{ console.log('connected')})
// .catch((err)=>{ 
//    //fs.appendFileSync('log',`${err}\n`);       
//    console.log(err);
// });

module.exports={
    mongoose
}
//mongoose.connect('mongodb://localhost:27017/TodoApp');
