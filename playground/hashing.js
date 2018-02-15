const {SHA256}=require('crypto-js');//256 is number of bits that are resulting hashing.
const jwt  =require('jsonwebtoken');


var data={
    id:10
}
token=jwt.sign(data,'123abc');
console.log('token'+token);


var decoded=jwt.verify(token,'123abc');
//var decoded=jwt.verify(token+'1','123abc');//we will get invalida data
console.log('Decoded:',decoded);

//jwt.verify

// var message='I am user number 3';
// var hash=SHA256(message).toString();  //we will get obejct result so wil  use toString()
// console.log(`Message:${message}`);
// console.log(`Hash:${hash}`);


// var data={
//     id:4
// }

// var token={
//     data,
//     hash:SHA256(JSON.stringify(data)+'somesecret').toString()
// }


// ///////////////////
// //Man in the middle might try somehting like below.
// // token.data.id=5;
// // token.hash=SHA256(JSON.stringify(token.data)).toString();//JSON.stringify() to convert our object into string.
// /////////////////////

// var resultHash=SHA256(JSON.stringify(token.data)+'somesecret').toString();
// if(resultHash===token.hash){
//    console.log('Data was not changed');
// }
// else{
//     console.log('Data was changed, DO not trust...')
// }