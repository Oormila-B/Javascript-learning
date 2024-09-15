/*'use strict';
//strict mode forbids us to certain things and it shows visible errors     
 // make us visible errors
 let hasDriversLicense = false;
 const passTest = true;

 if(passTest) hasDriversLicense = true;
 if(hasDriversLicense) console.log('I can drive :D');

 //can't use private mode and if agian*/

 //Java script functions
// Function is a piece of code we can use over and over again
/*function logger(){
    console.log('my name is Oormila');
}
//calling,Running, Invoking function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);//5,0
console.log(appleJuice);//Juice with 5 apples and 0 oranges.

const appleOrangeJuice = fruitProcessor(2,4);//2 4
console.log(appleOrangeJuice);//Juice with 2 apples and 4 oranges.
 const num = Number('23');*/

 //Function Declarations vs. Expressions 
 /*function calcAge1(birthYeah){
    return 2037 - birthYeah;
 }
//Function expression
const age1= calcAge1(1923);
console.log(age1);//114
 const calcAge2 = function (birthYeah){
    return 2037 - birthYeah;
 }
const age2 = calcAge2(1998);
console.log(age2)//39
console.log(age1,age2);//114,39*/

//normal function expression)
/*const calcAge2 = function (birthYeah){
    return 2037 - birthYeah;
}
//Arrow function
const calcAge3 = birthYeah => 2037- birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65- age ;
    //return retirement;
    return`${firstName} retires in ${ retirement} years`;
}
console.log(yearUntilRetirement(1991,'Oormila'));
console.log(yearUntilRetirement(1980,'Yokesh'));*/

//Functions calling other functions

/*function cutFruitPieces(fruit){
    return fruit*4;
}
function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples,oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));*/

//Reviewing function
/*const calcAge = function(birthYear){
    return 2037-birthYear;
}
const yearUntilRetirement = function (birthYear,firstName) {
    const age = calcAge(birthYear);
    const retirement = 65- age ;

    if(retirement>0){
        console.log(`${firstName} retires in ${ retirement} years`);
        return retirement;
       //before return  log statement it only works
    }
    else {
        console.log(`${firstName} has already retired`);
        return -1;
       //before return  log statement it only works 
    }
    //return retirement;
    //return`${firstName} retires in ${ retirement} years`;
}
  console.log(yearUntilRetirement(1991, 'Oormila'));
  console.log(yearUntilRetirement(1950, 'Yokesh'));*/

  //3 different function types

  /*
  1. Function declaration
  function calcAge(birthYear){
  return 2037-birthYear;
  }

  2.Function expresssion
  const calcAge= function(birthYear){
  return 2037 - birthyear;
  }

3.Arrow function
const calcAge = birthYear => 2037 - birthYear;

//challenge 5

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);*/

//Arrays

/*const friends1='Oormila';
const  friends2='Yokesh';
const friends3='Arun';
const friends =['oormila','Yokesh','Arun'];
console.log(friends[0]);//oormila
console.log(friends[2]);//Arun
 console.log(friends.length);//3
 console.log(friends[friends.length-1]);//Arun

// Add array

friends[2]='Jya'
console.log(friends);//[ 'oormila', 'Yokesh', 'Jya' ]

const firstName='Jonas'
const jonas=[firstName,'Oormila',2037-1991,'Developer',friends];
console.log(jonas);//Jonas', 'Oormila', 46, 'Developer', [ 'oormila', 'Yokesh', 'Jya'
console.log(jonas.length);

//Excercise
const calcAge = function(birthYear){
   return 2037 - birthYear; 
}

const years =[1990,1967,14567,2020,1098,2021];
console.log(calcAge(years));//NaN

const age1=calcAge(years[0]);
const age2=calcAge(years[1]);
const age3=calcAge(years[2]);
const age4=calcAge(years[3]);
const age5=calcAge(years[years.length-1]);
console.log(age1,age2,age3,age4,age5);//47 70 -12530 17 16 

//creating new array

const ages=[calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);*/



