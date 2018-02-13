var mongoose=require('mongoose');

const REMOTE_MONGO = 'mongodb://sample:sample@ds129706.mlab.com:29706/sample';
const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
const MONGO_URI = process.env.MONGODB_URI || LOCAL_MONGO;
    
mongoose.Promise=global.Promise;
//mongoose.connect(MONGO_URI);
mongoose.connect(MONGO_URI)
.then((res)=>{ console.log('connected')})
.catch((err)=>{ 
   //fs.appendFileSync('log',`${err}\n`);       
   console.log(err);
});

// module.exports={
//     mongoose
// }
//mongoose.connect('mongodb://localhost:27017/TodoApp');
