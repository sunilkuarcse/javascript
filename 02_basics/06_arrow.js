// -----------------------------imp arrow function----------------------------------------------------------------------------------------------------------------------********************--------------------------------------------------------------------------------------

// const user = {
//           UserName : "sunil",
//           price : 999,

//           welcomemessage : function(){
//                     console.log(`${this.UserName} , wwlcome to website`);
                    
//                     // console.log(this)

//           }
// }

// user.welcomemessage();
// user.UserName = "dabriya"
// user.welcomemessage();


//   ----------notes ---this --is global object of windows object----------------------------------------


// function code(){
//           console.log(this);
// }
// code();

// --------------------------------arrow function--------------------------------------------

// const code = (num1 , num2) =>{
// return num1+ num2 ; 
// }

// console.log(code(4,5));

// const code  = (num1 , num2) =>{
//           console.log(num1 * num2 );
// }
// code(4,5);

// you are write arrow function in different format is call implicit

// let code = (num1 , num2 ) => num1+num2
// console.log(code(8,5));

// let code1 = (num1 , num2 ) => (num1 * num2);   //not need return keyword in this format------------
// console.log(code1(8,8));





// -------------------------immediately invoked function expression(iife)----------------------------------------------------------------
// -------------------------+++++++++++++++++++++++++++++++++++++++++++++----------------------------------------------------------------



// let code = function(){
//           console.log("db connnected");
// }
// code();
// different type of execute code used iife-----------------in this method function on take it bareket 
// (function code(){
//           console.log("db connected");
// })();

// (() => {
//           console.log("db connected");
// })();

// ((name) => {
//           console.log(`db connectedd ${name}`)
// })("sunil")