// -------------------------######--controlflow---#####---------------------------------------------------------------------------------------######################-----------------------------------------------------------

// if (false){
//           console.log("executed");
// }
// if(true){
//           console.log("executed");


//---------control flow used comparision---- < > ,=< ,>=  ,!= , == , ===(check data type)

// const age = prompt("enter number");
// if (age <=25 ){
//           console.log("age less than equal 25");
// }
// else {
//           console.log("age greater than equal to 25");
// }


// const temp = 51;
// if(temp <= 50){
//           console.log("temerature is less than 50");
// }
// else{
// console.log("temerature is greather than 50");
// }

// if(2 !=3){
//           console.log(" 2 not equal to 3");
// }

// if (2==5){
// console.log("2 equal to 2");
// }
// else{
//           console.log("not equal to 2");
// }
// if (5==5){
// console.log("5 equal to 5");
// }
// else{
//           console.log("not equal to 5");
// }

// if (5 =="5"){
//           console.log("is equal ");
// }
// else{
//           console.log("not equal");
// }

// if(8==="8"){
//           console.log("is equal"); ///check data type 
// }
// else{
//           console.log("not equal");
// }
// if (8=="8"){
//           console.log("is equal");
// }
// else{
//           console.log("not equal");
// }

// examples---------------------

// 1.odd and even---------------------------------------

// let num = 9;
// if (num%2==0){
//           console.log("even");
// }
// else{
//           console.log("odd");
// }
// let num1 = 8;
// if (num1%2==0){
//           console.log("even");
// }
// else{
//           console.log("odd");
// }

// 2.---nasted if-else------------------------------------
// let score=85;
// if (score >=90){
//           console.log("grade A");
// }
// else if(score >=75){
//           console.log("grade B");
// }
// else if(score >=50){
//           console.log("grade C");
// }
// else{
//           console.log("fail");
// }


// 3.-----switch case -------------------------------------

// let day = 7;
// switch(day){
//           case 1 : console.log("monday");break;
//           case 2 : console.log("tuesday");break;
//           case 3 : console.log("wednesday");break;
//           case 4 : console.log("thursday");break;
//           case 5 : console.log("friday");break;
//           case 6 : console.log("saturday");break;
//           case 7 : console.log("sunday");break;
//           default:console.log("weekend");
// }


// 4.ternery operator --------used basicaly in variable;

// let age = 17;
// let message = age >= 18? "adult" : "minor";
// console.log(message);

// 5. Multiple Conditions (AND && OR ||)

// let temerature = 42;
// let isSunny = true;
// if (temerature > 40 && isSunny){  //temp=42 is greeter than 40;(is true ) and isSunny=true ;  both condtion are true; true && true;
//           console.log("perfect wheather");
// }
// else{
//           console.log("not perfect wheather");
// }


// 6. Check Valid Triangle (Using Only If-Else);-----------------------------------------------

// let a=10 , b=15 , c= 20;

// if ((a+b>c)&&(a+c>b)&&(b+c>a)){
//           console.log("is valid");
// }
// else{
//           console.log("is not valid");
// }


// 7. Login Simulation (Simple Authentication)--------------------------------------------

// let UserName = "sunil";
// let password = "1234";

// if ((UserName==="sunil") && (password==="1234")){
//           console.log("login succesfull");
// }
// else{
//           console.log("login failed");
// }

// 8. Truthy/Falsy Check-----------------------------------------------------------------------------

// let input="";
// if (input){
//           console.log("is valid");
// }
// else{
//           console.log("not valid");///expected ouyput is not valid; empty string is not valid 
// }



// 9. Switch with Boolean Expressions-----------------------------------------------------------------------

// let marks = 49;
// switch(true){

//           case (marks >=90):
//           console.log("excellent");
//           break;
//           case (marks >=75):
//           console.log("very good");
//           break;
//           case (marks >=60):
//           console.log("good");
//           break;
//           default : console.log("need improvement");
//           }





