// console.log("sunildabriya");

// numbers==================================
// let score = 400;
// console.log(score);
// console.log(typeof score);

// let balance = new String(500);
// console.log(balance)

// let score =10;
// let score1 = String(score);
// console.log(typeof score1);
// console.log( typeof score);

// let user ={
//           email:"sunil@.com",
//           pass:112233
// }
// let user1 = user;
// user1.email="sunildabriyya@gmail.com"
// console.log( user1)
// =====================================================================================================

// ===========================start numbers============================================================
// let score = 100;
// console.log(score);
// console.log(typeof score);
// used new object keyword for number only ;
// let balance = new Number(100);
// console.log(balance);
// ---------if in this method used for actual namber and after changing cahnge datatype number to object
// -------if in this method change toSting after changing change data type in number
// toStrig is method ------------------------------------------------------------------------------------
// console.log( balance.toString().length);



//=============== toFixed is method used to decimal points================================================================ 
// console.log(balance.toFixed(4));

//=======================================EXAMPLE-------------- used valueof()method is used to change datatype object to number ;
// let num= new Number(85);
// console.log(typeof num);

// let num1 = num.valueOf();
// console.log(num1);
// console.log(typeof num1);

// =======================================toprecision()=======
// const number = 123.89;
// console.log(number.toPrecision(3));

// =============toLocalString===========
// let num =10000000;
// console.log(num.toLocaleString());   //us standard----------
// console.log(num.toLocaleString('en-IN'));//indian standard========


// ======================++maths==============================================================
// =========================++maths===========================================================
// 1.---method math.abs used to change negetive number to positive number-------
// let number = -5700;
// console.log(Math.abs(number));
// ---------
// const num = -54555;
// console.log(Math.abs(num));==================

// 2.----Math.round()--used decimal value ko round of value providing---

// let num = 5.4;
// let num1 =5.5;
// console.log(Math.round(num));
// console.log(Math.round(num1));

// Math.ceil()used to toop value means suppose any value like 4.2 to convert top value 5;
// let num = 4.2;
// let num1 = 4.9
// console.log(Math.ceil(num));
// console.log(Math.ceil(num1));

//   Math.floor-------used to lowes value providing means suppose any value like 4.2 and 4.9 to convert 4;

// let num1 = 4.2;
// let num2 = 4.9;
// console.log(Math.floor(num1));
// console.log(Math.floor(num2));


// find minimum and maximum value in array is used to Math .min()----------

// console.log(Math.min(10,5,20,40,7,9));
// console.log(Math.max(10,5,20,40,7,9));

// *****important method Math.random-----is used to generating random numbers===========
// ==============================================
// ========================================
// ===================================

// console.log(Math.random());  //math.random provide value between  0-1;
// *10 karne ka reson ye heme result me 1 digit and decimila points generate karega 
// +1 ad karne ka means h ki ye hme 0 value nhi generate karke dega ye hme kam se kam 1 se value generate karke dega
// console.log(Math.random()*10+1);
// let min =10;
// let max =20;
// console.log(Math.floor(Math.random()*((max-min)+1)+min));
// let min =10;
// let  max = 20;
// console.log((Math.floor(Math.random()*((max-min)+1)+min)))

// console.log(Math.ceil(Math.random()*10+1));




