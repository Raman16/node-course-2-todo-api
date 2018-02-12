var mongoose=require('mongoose');

const REMOTE_MONGO = 'mongodb://bandariraman:r2m2642i@123B@ds247357.mlab.com:47357/todoapi';
const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;
    
mongoose.connect(MONGO_URI);

//mongoose.connect('mongodb://localhost:27017/TodoApp');
