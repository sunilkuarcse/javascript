// object is very important part of javasript------------------------------------------------------------------
// #singleton============
// #object literals======

// const mySym = Symbol("key1")

// let jsuser = {
//           name : "sunil" ,
//           age : 21, 
//           location : "jaipur" , 
//          email : "sunildabriya@gmail.com" ,
//          fruites: ["apple" , "orange"],
//        [ mySym] : "key1",

// }

// console.log(jsuser["age"]);
// console.log(jsuser["fruites"]);
// console.log(jsuser);

// jsuser.email = "sunildabriya216@gmail.com";
// console.log(jsuser);
// Object.freeze(jsuser)
// jsuser.age =22;
// console.log(jsuser);

// let mySym = Symbol("key1")
// let jsUser = {
// name  : "sunil",
// email : "sk@gmail.com",
// [mySym] : "key1"
// }

// console.log(jsUser["name"]);
// console.log(jsUser);



// greeting method 
// let jsUser = {
//           name : "sunil",
//           email : "sk@gmail.com",
// }

// jsUser.greeting = function(){
//           console.log("hello js user");
// }
// jsUser.greetingTwo = function(){
//           console.log(`hello js user ${this.name}`);
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// ######################################################################################################################################
// singleton -----------let tinder = new object();
// console.log(tinder);

// let tinder = {};
// console.log(tinder);  //none singleton object---------------------------------

// tinder.id = "sunil" ; 
// tinder.email = "sunildabriya";

// console.log(tinder);

// let regular_user = {
//           email : "sunil@gmail.com",
//           userName : {
//                     fullName : {
//                               name :"Sunil" , 
//                               age : 21,
//                     }
//           }
// }
// console.log(regular_user.userName);

// let obj1 = {
//           a : 1,
//           b : 2,
// }
// let obj2 = {
//           e : 1,
//           f : 2,
// }
// let obj3 = {
//           c : 1,
//           d : 2,
// }

// let combine = Object.assign({},obj1 , obj2 ,obj3 );
// console.log(combine);
// let combine = {...obj1 ,...obj2 ,...obj3 };
// console.log(combine);
// console.log(Object.values(obj3));