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

//Basic Array Operations 
/*const friends =['Oormila','Yokesh'];
friends.push('Arun');//add end of the array
console.log(friends);
friends.unshift('Bala');//Add element first in the array
console.log(friends);
//remove element 
friends.pop();//remove last element //remove last element
const popped=friends.pop();//show which element next popped
console.log(popped);//Yokesh
console.log(friends);//[ 'Bala', 'Oormila' ]

//Remove first element from array

friends.shift();//remove first element 
console.log(friends);//Oormila//
console.log(friends.indexOf('Oormila'));//0
//To know elements in the array or not
console.log(friends.includes('Oormila'));//True
console.log(friends.includes('Arun'));//false*/

//challenge 6
//question
/*CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.*/

//my answer
/*const calcTip= function(bills){
  if(bills>=50 && bills<=300){
      return bills*0.15;
  }
  else {
      return bills*0.20;
  }
}
const bills=[125,555,44];
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const totals=[bills[0]+tips[0] , bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills,tips,totals);*/

//object 

/*const oormiArray=[
  'Oormila',
  'developer',
  2037-1991,
  ['oormila','Yokesh']
];

const oormi={
  firstName: 'Oormila',
  lastName: 'Bala'
  age: 2024-2002, // key : property
  job: 'Developer',
  friends:['oormila','yokesh']
}*/



