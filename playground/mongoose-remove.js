const {ObjectID}=require('mongodb');
var {mongoose}=require('./../server/db/mongoose');
var {Todos}=require('./../server/model/Todos');



//Below method removes all todo documents and
//will show the count of the documents removed
// Todo.remove({})//works same todo.find.
// Todo.remove({}).then((res)=>{
//     console.log("removes all Todo");
// });


//Finds one document and removes//also shows the removed 
///returns the removed object as response
//Todo.findOneAndRemove({})

Todos.findOneAndRemove({_id:'5a806339f09697623e01df7f'}).then((todo)=>{
      console.log(`removed: ${todo}`);
 });

//Todo.findByIdAndRemove({});

// Todos.findByIdAndRemove('5a806365f09697623e01df80').then((todo)=>{
//   console.log(`removed: ${todo}`);
// });