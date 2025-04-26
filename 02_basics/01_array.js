// =================---------###---ARRAY------####------=============================
// ==================================================================================

// const arr = [1,2,3,4,5,6,7,8,9,];
// console.log(arr[0]);

// const myHeros = ["antmen" , "marvel" , "thor" , "tonystark"];
// console.log(myHeros);

// const bool=[+true , +false];
// console.log(bool);


// ============array methods=================================================================
// ==========================================================================================

// let myArray = [1,2,,3,4,5,6]
// myArray.push(6);//   last me include any value according you--------
// console.log(myArray);

// myArray.pop();// this method used to last value remove from array------------
// console.log(myArray);

// myArray.unshift(4);// is used to include startinng position;
// console.log(myArray);
// shift use remove from starting position--------------------


// let myArr = [1,2,3,4,5,6];
// let arr1 = myArr.join();//join use covert to string format-----
// console.log(typeof arr1);

// console.log("A" , myArr);
// let newArr1 = myArr.slice(1 , 3);
// console.log(newArr1);
// console.log("B" , myArr);

// let newArr2 = myArr.splice(1 , 3);
// console.log(newArr2);
// console.log("C" , myArr);

// let num = [1,2,3,4,5,6];
// console.log(num);

// console.log(num.slice(1 , 3 ));
// console.log("A" , num);

// console.log(num.splice(1 , 3));
// console.log("B" , num)

// array section-------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

// let marvel_heros = ["thor" , "ironman" , "spiderman"];
// let dc_heros = ["tonystark" , "flash" , "antman" ];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1]);

// let allheros = marvel_heros.concat(dc_heros);
// console.log(typeof allheros);
// console.log(typeof marvel_heros)

// ----------------used spred method for array--------------#############################################

// let marvel_heros = ["thor" , "ironman" , "spiderman"];
// let dc_heros = ["tonystark" , "flash" , "antman" ];
// let allheros = [...marvel_heros , ...dc_heros]    // spred is very most----------method used to conacat two arrays.
// console.log(allheros);



//=============flat used to all arays elements add  in add in one array-------------------------------

// let another_array = [1,2,3,4, [5,6,7, [8,9,7], [6,5,3,2], [2,4,6,7]]];  //-------------------------

// let real_array = another_array.flat(Infinity);//---------------------------------------------------
// console.log(typeof real_array);//------------------------------------------------------------------



//***** */ mostly cases used array-------------------------------------------------------------------------
// console.log(Array.isArray(["sunil" ,"dabriya"]));//accepted output in true and false-------------------------
// console.log(Array.from("hitesh"));//accepected output in array form *******-----------------------------------------

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1 , score2, score3));

// console.log(Array.from({name :"sunil"}));//is accepteed output empty array--------is very intersted-------
// console.log("hello sunil");

















